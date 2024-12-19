<template>
  <div class="points">
    <SubHeader />
    <PageTitle title="Padelpoints" />
    <YourPoints title="Dine Point" subtitle="2500" />
    <LimitedProducts :userPoints="2500" />
    <PointShop />
    <PointProduct :userPoints="2500" />
    <BottomNav />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.points {
  background-color: $background-color; // Apply specific styles for points page
}

.points {
  margin-bottom: 75px;
}
</style>
