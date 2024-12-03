<template>
  <div class="points">
    <SubHeader />
    <PageTitle title="Point butik" />
    <YourPoints title="Dine Point" subtitle="500" />
    <LazyLimitedProducts :userPoints="500" />
    <PointShop />
    <LazyPointProduct :userPoints="500" />
    <BottomNav />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
}

.points {
  margin-bottom: 75px;
}
</style>
