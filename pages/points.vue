<template>
  <div class="points">
    <SubHeader />
    <SmallPromoBanner />
    <PointShop />
    <PointProduct/>
    <BottomNav />
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
}
</style>
