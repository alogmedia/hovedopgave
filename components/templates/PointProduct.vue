<template>
  <template v-if="isLoading">
    <!-- Skeleton Loader -->
    <div class="skeleton-grid">
      <div class="skeleton-loader">
        <div class="skeleton-image"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-price"></div>
      </div>
      <div class="skeleton-loader">
        <div class="skeleton-image"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-price"></div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-wrapper"
      >
        <NuxtLink to="/produkt" class="productLink">
          <Product
            class="product-column"
            :imageSrc="product.imageSrc"
            :alt="product.alt"
            :title="product.title"
            :price="product.price"
            :showExpire="false"
        /></NuxtLink>
        <!-- Conditional Overlay -->
        <div
          v-if="parseFloat(product.price) > userPoints"
          class="product-overlay"
        >
          <Icon name="material-symbols:lock-outline" class="padlock"></Icon>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ref, onMounted } from "vue";
import Product from "@/components/organisms/Product.vue";
import { useFetch } from "#app";

const products = ref([]);
const isLoading = ref(true); // State to track loading status

const props = defineProps({
  imageSrc: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    default: "Category Image",
  },
  price: {
    type: [String, Number],
    default: "1500",
  },
  showExpire: {
    type: Boolean,
    default: false,
  },
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
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 products per row */
  margin-left: 20px;
  margin-right: 20px;
  gap: 20px;

  .productLink {
    text-decoration: none;
  }
}

.product-column {
  padding: 10px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
}

.pointPrice {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background-color: #0071e3;
  z-index: 100;

  .points-title {
    gap: 5px;
    margin-top: 10px;
  }

  .tennisBall {
    color: #fff;
    font-size: 18px;
  }
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 products per row */
  margin-left: 20px;
  margin-right: 20px;
  gap: 20px;
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
  width: 150px;
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

  .padlock {
    display: flex;
    font-size: 3rem;
    color: #000;
    margin-bottom: 25%;
  }
}
</style>
