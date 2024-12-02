<template>
  <div class="points">
    <SubHeader />
    <PromoBanner />
    <ProductTitle />
    <!-- Show the 3D model here -->
    <ThreeProductViewer />
    <ProductForm title="1.500 kr" subtitle="2500" />
    <BottomNav />
  </div>
</template>

<script setup>
import ThreeProductViewer from "@/components/templates/ThreeProductViewer.vue";
</script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;
</style>
