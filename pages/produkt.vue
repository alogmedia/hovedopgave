<template>
  <div class="points">
    <SubHeader />
    <SmallPromoBanner />

    <!-- Show the 3D model here -->
    <ThreeProductViewer />

    <BottomNav />
  </div>
</template>

<script setup>
import ThreeProductViewer from "@/components/templates/ThreeProductViewer.vue";
</script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
