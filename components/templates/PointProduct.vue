<template>
  <template v-if="isLoading">
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
        <div class="productLink" @click.prevent="handleProductClick(product)">
          <Product
            class="product-column"
            :imageSrc="
              parseFloat(product.price + 1000) > userPoints ? padelBat : mainBat
            "
            :alt="product.alt"
            :title="product.title"
            :price="product.price + 1000"
            :showExpire="false"
          />
          <!-- Conditional Overlay -->
          <div
            v-if="parseFloat(product.price + 1000) > userPoints"
            class="product-overlay"
          >
            <Icon name="material-symbols:lock-outline" class="padlock"></Icon>
          </div>
        </div>
      </div>
      <div v-if="showOverlay" class="points-overlay">
        <div class="overlay-content">
          <div class="overlay-header">
            <button @click="closeOverlay" class="close-button">
              <Icon
                name="material-symbols:arrow-back-rounded"
                class="arrowIcon"
              />
            </button>
            <p class="overlay-title">Du har desværre ikke nok</p>
            <p class="overlay-subtitle">
              PADELPOINT <Icon name="ion:tennisball" class="tennisBall"></Icon>
            </p>
          </div>
          <div class="progress-container">
            <div
              class="progress-circle"
              :style="{
                background: `conic-gradient(
          #e84b4a ${progress * 3.6}deg,
          #f6c5c5 ${progress * 3.6}deg
        )`,
              }"
            >
              <div class="inner-circle">
                <p class="progress-percent">{{ progress }}%</p>
                <p class="progress-text">{{ userPoints }}/{{ totalPoints }}</p>
              </div>
            </div>
          </div>
          <NuxtLink to="/produkt" class="linkToProduct">
            <Button label="Gå til produktet" class="goToProduct" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import "swiper/swiper-bundle.css";
import { ref, onMounted } from "vue";
import Product from "@/components/organisms/Product.vue";
import { useFetch } from "#app";
import mainBat from "@/assets/images/mainbat3.png";
import padelBat from "@/assets/images/padelbat.png";

const products = ref([]);
const isLoading = ref(true);
const showOverlay = ref(false);
const selectedProduct = ref(null);
const userPoints = ref(2500);
const totalPoints = ref(3300);

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

const progress = computed(() =>
  Math.floor((userPoints.value / totalPoints.value) * 100),
);

const handleProductClick = (product) => {
  if (props.userPoints < product.price + 1000) {
    selectedProduct.value = product;
    showOverlay.value = true;
  } else {
    window.location.href = "/produkt";
  }
};

const closeOverlay = () => {
  showOverlay.value = false;
  selectedProduct.value = null;
};

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
  const expirationTime = 24 * 60 * 60 * 1000;

  const storedProducts = localStorage.getItem("products");
  const savedTimestamp = localStorage.getItem("productsTimestamp");

  if (storedProducts && savedTimestamp) {
    const isExpired =
      Date.now() - parseInt(savedTimestamp, 10) > expirationTime;

    if (!isExpired) {
      console.log("Loading products from cache");
      products.value = JSON.parse(storedProducts);
      isLoading.value = false;
      return;
    }
  }

  console.log("Fetching products from API");
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
      },
    });

    if (!error.value && data.value) {
      let responseData =
        typeof data.value === "string" ? JSON.parse(data.value) : data.value;

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

      products.value = fetchedProducts.sort((a, b) => a.price - b.price);
      localStorage.setItem("products", JSON.stringify(products.value));
      localStorage.setItem("productsTimestamp", Date.now().toString());
    } else {
      console.error("Error fetching product data:", error.value);
    }
  } catch (err) {
    console.error("Fetch failed, falling back to cached data", err);
    const cachedProducts = localStorage.getItem("products");
    if (cachedProducts) {
      products.value = JSON.parse(cachedProducts);
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<style lang="scss" scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  background-color: $primary-color;
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
  grid-template-columns: repeat(2, 1fr);
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
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  pointer-events: none;

  .padlock {
    display: flex;
    font-size: 3rem;
    color: #000;
    margin-bottom: 25%;
  }
}

.points-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background: #f9f9f9;
  padding: 40px;
  text-align: center;
  width: 320px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.overlay-header {
  margin-bottom: 20px;
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: 100;
  color: #000;
  margin-bottom: 8px;
  letter-spacing: 1px;
  font-family: $font-heading;
}

.overlay-subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: $secondary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  font-weight: 100;
  font-family: $font-heading;

  .tennisBall {
    font-size: 1.6rem;
    margin-bottom: 8px;
    margin-left: 5px;
  }
}

.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.progress-circle {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient($secondary-color 0deg, #f6c5c5 0deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  position: absolute;
  width: 125px;
  height: 125px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.progress-percent {
  font-size: 2rem;
  font-weight: bold;
  color: $secondary-color;
  margin: 0;
  letter-spacing: 1px;
  font-weight: 100;
  font-family: $font-heading;
}

.progress-text {
  font-size: 0.875rem;
  color: #000;
  margin: 0;
  margin-top: 5px;
  font-family: $font-heading;
}

.close-button {
  position: relative;
  right: 20px;
  bottom: 20px;
  background: none;
  color: #000;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
}

.goToProduct {
  margin: 0 auto;
}
.linkToProduct {
  text-decoration: none;
}
</style>
