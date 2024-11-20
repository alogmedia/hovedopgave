<template>
    <Swiper
      :slides-per-view="2"
      :space-between="20"
      :breakpoints="breakpointsConfig"
      class="product-slider"
    >
      <SwiperSlide v-for="(product, index) in products" :key="index" class="product-slide">
        <Product
          :imageSrc="product.imageSrc"
          :alt="product.alt"
          :title="product.title"
          :subtitle="product.subtitle"
        />
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  import Product from '@/components/organisms/Product.vue';
  import productImage1 from '@/assets/images/padelbat.png';
  
  const products = ref([
    {
      imageSrc: productImage1,
      alt: 'Padel Bat',
      title: 'Padel',
      subtitle: 'Bat',
    },
    {
      imageSrc: productImage1,
      alt: 'Padel Bat',
      title: 'Padel',
      subtitle: 'Bat',
    },
    {
      imageSrc: productImage1,
      alt: 'Padel Bat',
      title: 'Padel',
      subtitle: 'Bat',
    },
    {
      imageSrc: productImage1,
      alt: 'Padel Bat',
      title: 'Padel',
      subtitle: 'Bat',
    },
    // Add more products as needed
  ]);
  
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
  </script>
  
  <style scoped>
  .product-slider {
    padding: 0 20px;
  }
  
  .swiper-slide {
    width: auto; /* Prevent fixed slide width issues */
  }

  .product-slide {
    width: 150px !important;
  }
  </style>
  