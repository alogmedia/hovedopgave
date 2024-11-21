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
        <Product  v-for="(product, index) in products" :key="index" class="product-column"
          :imageSrc="product.imageSrc"
          :alt="product.alt"
          :title="product.title"
          :price="product.price"
          :showExpire="false"
        />

        </div>
      </template>
  </template>
  
  <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';
import Product from '@/components/organisms/Product.vue';
import { useFetch } from '#app';

const products = ref([]);
const isLoading = ref(true); // State to track loading status

// Placeholder skeleton products
const skeletonProducts = Array.from({ length: 10 }, () => ({
  title: '',
  imageSrc: '',
  alt: '',
  price: '',
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
  const storedProducts = localStorage.getItem('products');
  const savedTimestamp = localStorage.getItem('productsTimestamp');

  if (storedProducts && savedTimestamp) {
    const isExpired = Date.now() - parseInt(savedTimestamp, 10) > expirationTime;

    if (!isExpired) {
      products.value = JSON.parse(storedProducts);
      isLoading.value = false; // Stop loading
      return;
    }
  }

  const requestData = new URLSearchParams();
  requestData.append('action', 'get_product_ids_from_raptor');
  requestData.append('call', 'GetTopViewedInBrands');
  requestData.append('parameters', JSON.stringify({ BrandId: 'Siux', CookieId: 'rsa' }));

  try {
    const { data, error } = await useFetch('/api', {
      method: 'POST',
      body: requestData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0',
      },
    });

    if (!error.value && data.value) {
      let responseData = data.value;

      if (typeof responseData === 'string') {
        try {
          responseData = JSON.parse(responseData);
        } catch (parseError) {
          console.error('Failed to parse response data:', parseError);
          return;
        }
      }

      const fetchedProducts = Object.keys(responseData)
        .slice(0, 10) // Limit to 10 products
        .map((key) => {
          const item = responseData[key];
          return {
            imageSrc: item.featured_image_url || '/assets/images/padelbat.png', // Use fallback if `imageSrc` is undefined
            alt: item.title || 'Default Title',
            title: item.title || 'Default Product Title',
            price: item?.pricing?.actual_price || '1500',
          };
        });

      products.value = fetchedProducts;
      localStorage.setItem('products', JSON.stringify(fetchedProducts));
      localStorage.setItem('productsTimestamp', Date.now().toString());
    } else {
      console.error('Failed to fetch product data:', error.value);
    }
  } catch (err) {
    console.error('An error occurred during the fetch:', err);
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
}

.product-column {
  padding: 10px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

}

  .pointPrice {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width:100%;
    height:40px;
    background-color: #0071E3;

    .points-title {
    gap: 5px;
    margin-top: 10px;
    }

  .tennisBall {
    color: #FFF;
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
 
  </style>
  