<template>
    <LimitedDeals />
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="breakpointsConfig"
      class="product-slider"
    >
      <SwiperSlide v-for="(product, index) in products" :key="index" class="product-slide">
        <Product
          :imageSrc="product.imageSrc"
          :alt="product.alt"
          :title="product.title"
        />
        <div class="pointPrice">
            <div class="points-title">
                <Icon name="ion:tennisball" class="tennisBall"></Icon>
                <Text content="2500" type="price" />
            </div>  
        </div>
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue';
import Product from '@/components/organisms/Product.vue';
import { useFetch } from '#app';

const products = ref([]);

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
  const requestData = new URLSearchParams();
  requestData.append('action', 'get_product_ids_from_raptor');
  requestData.append('call', 'GetTopViewedInBrands');
  requestData.append('parameters', JSON.stringify({ BrandId: 'Siux', CookieId: 'rsa' }));

  try {
    // Using the proxy endpoint
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

      // Check if the response data is a string and parse it if necessary
      if (typeof responseData === 'string') {
        try {
          responseData = JSON.parse(responseData);
          console.log('Parsed response data:', responseData); // Log to confirm the structure
        } catch (parseError) {
          console.error('Failed to parse response data:', parseError);
          return;
        }
      }

      products.value = Object.keys(responseData)
        .slice(0, 10) // Limit to 10 products
        .map((key) => {
          const item = responseData[key];
          console.log(`Processing item with key: ${key}`, item);
          return {
            imageSrc: item.featured_image_url || '/assets/images/padelbat.png', // Use fallback if `imageSrc` is undefined
            alt: item.title || 'Default Title',
            title: item.title || 'Default Product Title',
          };
        });
    } else {
      console.error('Failed to fetch product data:', error.value);
    }
  } catch (err) {
    console.error('An error occurred during the fetch:', err);
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

  .pointPrice {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width:100%;
    height:50px;
    background-color: #0071E3;

    .points-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 12.5px;
    gap: 5px;
    }

  .tennisBall {
    color: #FFF;
    font-size: 20px;
    }
  }
  
  </style>
  