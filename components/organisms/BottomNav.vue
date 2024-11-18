<template>
    <nav class="bottom-nav">
      <img icon="mdi-home" label="HJEM" />
      <BottomNavItem icon="mdi-menu" label="MENU" />
      <BottomNavItem icon="mdi-basketball" label="PADELPOINTS" />
      <BottomNavItem icon="mdi-cart-outline" label="KURV" />
    </nav>
  </template>
  
  <script setup>
  import BottomNavItem from '@/components/molecules/BottomNavItem.vue';
  </script>
  
  <style scoped lang="scss">
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #F6F8FA; // Light grey background
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-top: 2px solid #000; // Optional: Add a border to match the example
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); // Adds a shadow for depth
    z-index: 100; // Ensures the nav stays above other content
  }
  </style>
  