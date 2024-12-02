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
        <div class="product-wrapper">
          <Product
            :title="product.title"
            :imageSrc="product.imageSrc"
            :alt="product.alt"
            :price="product.price"
            :showExpire="true"
          />
          <!-- Conditional Overlay -->
          <div
            v-if="parseFloat(product.price) > userPoints"
            class="product-overlay"
          >
            <p class="overlay-text">
              <Icon name="material-symbols:lock-outline" class="padlock"></Icon>
            </p>
          </div>
        </div>
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

const props = defineProps({
  userPoints: {
    type: Number,
    required: true,
  },
});

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
      // Handle cached products
      const cachedProducts = JSON.parse(storedProducts);
      // Sort cached products by price in ascending order
      products.value = cachedProducts.sort((a, b) => a.price - b.price);
      isLoading.value = false;
      return;
    }
  }

  // Fetch new products if cache is expired or doesn't exist
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
        .slice(0, 10)
        .map((key) => {
          const item = responseData[key];
          return {
            imageSrc: item.featured_image_url || "/assets/images/padelbat.png",
            alt: item.title || "Default Title",
            title: item.title || "Default Product Title",
            price: parseFloat(item?.pricing?.actual_price || "1500"),
          };
        });

      // Sort products by price in ascending order
      products.value = fetchedProducts.sort((a, b) => a.price - b.price);

      localStorage.setItem("products", JSON.stringify(products.value));
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

.product-wrapper {
  position: relative;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.3
  ); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px); /* Add blur effect */
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  pointer-events: none; /* Allow clicks to pass through overlay */
}

.overlay-text {
  margin: 0;

  .padlock {
    font-size: 3rem;
    color: #000;
    margin-bottom: 50%;
  }
}
</style>
