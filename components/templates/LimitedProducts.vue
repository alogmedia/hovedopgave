<template>
  <LimitedDeals />

  <Swiper
    :slides-per-view="1"
    :space-between="10"
    :breakpoints="breakpointsConfig"
    class="product-slider"
  >
    <SwiperSlide
      v-for="(product, index) in isLoading ? skeletonProducts : products"
      :key="index"
      class="product-slide"
    >
      <template v-if="isLoading">
        <!-- Skeleton Loader -->
        <div class="skeleton-loader">
          <div class="skeleton-image"></div>
          <div class="skeleton-title"></div>
          <div class="skeleton-price"></div>
        </div>
      </template>
      <template v-else>
        <!-- Product Component -->
        <Product
          :title="product.title"
          :imageSrc="product.imageSrc"
          :alt="product.alt"
          :price="product.price"
          :showExpire="true"
        />
      </template>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ref, onMounted } from "vue";
import Product from "@/components/organisms/Product.vue";
import { useFetch } from "#app";

const products = ref([]);
const isLoading = ref(true); // State to track loading status

// Placeholder skeleton products
const skeletonProducts = Array.from({ length: 10 }, () => ({
  title: "",
  imageSrc: "",
  alt: "",
  price: "",
}));

const breakpointsConfig = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const fetchProducts = async () => {
  const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Retrieve stored products and timestamp
  const storedProducts = localStorage.getItem("products");
  const savedTimestamp = localStorage.getItem("productsTimestamp");

  if (storedProducts && savedTimestamp) {
    const isExpired =
      Date.now() - parseInt(savedTimestamp, 10) > expirationTime;

    if (!isExpired) {
      products.value = JSON.parse(storedProducts);
      isLoading.value = false; // Stop loading
      return;
    }
  }

  const requestData = new URLSearchParams();
  requestData.append("action", "get_product_ids_from_raptor");
  requestData.append("call", "GetTopViewedInBrands");
  requestData.append(
    "parameters",
    JSON.stringify({ BrandId: "Siux", CookieId: "rsa" }),
  );

  try {
    const { data, error } = await useFetch("/api", {
      method: "POST",
      body: requestData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0",
      },
    });

    if (!error.value && data.value) {
      let responseData = data.value;

      if (typeof responseData === "string") {
        try {
          responseData = JSON.parse(responseData);
        } catch (parseError) {
          console.error("Failed to parse response data:", parseError);
          return;
        }
      }

      const fetchedProducts = Object.keys(responseData)
        .slice(0, 10) // Limit to 10 products
        .map((key) => {
          const item = responseData[key];
          return {
            imageSrc: item.featured_image_url || "/assets/images/padelbat.png", // Use fallback if `imageSrc` is undefined
            alt: item.title || "Default Title",
            title: item.title || "Default Product Title",
            price: item?.pricing?.actual_price || "1500",
          };
        });

      products.value = fetchedProducts;
      localStorage.setItem("products", JSON.stringify(fetchedProducts));
      localStorage.setItem("productsTimestamp", Date.now().toString());
    } else {
      console.error("Failed to fetch product data:", error.value);
    }
  } catch (err) {
    console.error("An error occurred during the fetch:", err);
  } finally {
    isLoading.value = false; // Stop loading regardless of success or failure
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
.product-slider {
  padding: 0 20px;
}

.swiper-slide {
  width: auto; /* Prevent fixed slide width issues */
}

.product-slide {
  width: 100% !important;
  margin-bottom: 20px;
}

.pointProduct-card {
  width: 100%;
}

.expire {
  position: absolute;
}

.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
  height: 250px;
  gap: 10px;
}

.skeleton-image {
  background: #ddd;
  height: 125px;
  width: 125px;
  border-radius: 8px;
}

.skeleton-title,
.skeleton-price {
  background: #ddd;
  height: 20px;
  width: 80%;
  border-radius: 4px;
}
</style>
