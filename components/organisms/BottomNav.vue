<template>
  <nav class="bottom-nav">
    <NuxtLink to="/" class="BottomNavLinks">
      <BottomNavItem icon="mdi-home" label="Hjem" />
    </NuxtLink>
    <NuxtLink to="/points" class="BottomNavLinks">
      <BottomNavItem icon="solar:shop-bold" label="Shop" />
    </NuxtLink>
    <NuxtLink to="/points" class="BottomNavLinks">
      <BottomNavItem icon="mdi-basketball" label="Padelpoints" />
    </NuxtLink>
    <NuxtLink to="/kurv" class="BottomNavLinks">
      <BottomNavItem icon="material-symbols:shopping-cart" label="Kurv" />
    </NuxtLink>
  </nav>
</template>

<script setup>
import BottomNavItem from "@/components/molecules/BottomNavItem.vue";
</script>

<style scoped lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f6f8fa; // Light grey background
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-top: 2px solid #000; // Optional: Add a border to match the example
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); // Adds a shadow for depth
  z-index: 100; // Ensures the nav stays above other content

  .BottomNavLinks {
    text-decoration: none;
    color: #000; // Black text color
    font-family: Jakarta;
  }
}
</style>
