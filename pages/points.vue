<template>
  <div class="points">
    <SubHeader />
    <SmallPromoBanner />
    <PointShop />
    <PointProduct title="Padel" subtitle="Bat" :imageSrc="categoryImage" />
    <BottomNav />
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";
</script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
}
</style>
