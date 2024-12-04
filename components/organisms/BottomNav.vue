<template>
  <nav class="bottom-nav">
    <NuxtLink to="/" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="pad-icon:hjem" label="Hjem" />
    </NuxtLink>
    <NuxtLink to="/404" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="ic:baseline-grid-view" label="Menu" />
    </NuxtLink>
    <NuxtLink to="/points" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="ion:tennisball" label="Padelpoints" />
    </NuxtLink>
    <NuxtLink to="/kurv" class="BottomNavLinks" active-class="active">
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
  border-top: 1px solid #7e7e7e; // Optional: Add a border to match the example
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); // Adds a shadow for depth
  z-index: 100; // Ensures the nav stays above other content

  .BottomNavLinks {
    text-decoration: none;
    color: #000; // Default text color
    font-family: Jakarta;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
      color: #ff4d4d; // Active link color
      font-weight: bold;
    }
  }
}
</style>
