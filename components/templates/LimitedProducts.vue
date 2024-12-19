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
        <div
          class="product-wrapper"
          @click.prevent="handleProductClick(product)"
        >
          <Product
            :title="product.title"
            :imageSrc="
              parseFloat(product.price + 1000) > userPoints ? padelBat : mainBat
            "
            :alt="product.alt"
            :price="product.price + 1000"
            :showExpire="true"
          />
          <div
            v-if="parseFloat(product.price + 1000) > userPoints"
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
  <div v-if="showOverlay" class="points-overlay">
    <div class="overlay-content">
      <div class="overlay-header">
        <button @click="closeOverlay" class="close-button">
          <Icon name="material-symbols:arrow-back-rounded" class="arrowIcon" />
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
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import { useFetch } from "#app";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";
import mainBat from "@/assets/images/mainbat3.png";
import padelBat from "@/assets/images/padelbat.png";
import Product from "@/components/organisms/Product.vue";
import "swiper/swiper-bundle.css";

const router = useRouter();
const nuxtApp = useNuxtApp();
const products = ref([]);
const isLoading = ref(true);
const showOverlay = ref(false);
const selectedProduct = ref(null);
const userPoints = ref(2500);
const totalPoints = ref(3300);

const progress = computed(() =>
  Math.floor((userPoints.value / totalPoints.value) * 100),
);

const handleProductClick = async (product) => {
  if (userPoints.value < product.price + 1000) {
    selectedProduct.value = product;
    showOverlay.value = true;
  } else {
    await nuxtApp.runWithContext(async () => {
      await router.resolve({
        path: "/produkt",
        query: { productId: product.id },
      });
    });

    router.push({ path: "/produkt", query: { productId: product.id } });
  }
};

const closeOverlay = () => {
  showOverlay.value = false;
  selectedProduct.value = null;
};

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
  imageSrc: {
    type: String,
    required: false,
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

  const storedProducts = localStorage.getItem("products");
  const savedTimestamp = localStorage.getItem("productsTimestamp");

  if (storedProducts && savedTimestamp) {
    const isExpired =
      Date.now() - parseInt(savedTimestamp, 10) > expirationTime;

    if (!isExpired) {
      const cachedProducts = JSON.parse(storedProducts);
      products.value = cachedProducts.sort((a, b) => a.price - b.price);
      isLoading.value = false;
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
      console.error("Failed to fetch product data:", error.value);
    }
  } catch (err) {
    console.error("An error occurred during the fetch:", err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<style lang="scss" scoped>
.product-slider {
  padding: 0 20px;
}

.swiper-slide {
  width: auto;
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

¨ .product-wrapper {
  position: relative;
}

.product-overlay {
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
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
  font-family: $font-heading;
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
    margin-left: 5px;
    margin-bottom: 8px;
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
