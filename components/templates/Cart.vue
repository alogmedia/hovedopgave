<template>

    <AnimationBanner />
    <LazyCartTitle />
    <CartProduct />
    <BottomNav/>
</template>
  
  <script setup>
  </script>
  
  <style lang="scss">
  .top-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0; // Removed padding, relying on header-container's padding
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  </style>
  