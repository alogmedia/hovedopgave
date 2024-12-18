<template>
  <div>
    <Error />
    <BottomNav :homeIcon="homeImg" />
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";
import homeImg from "/icon.png";
</script>

<style scoped lang="scss">

.points {
  background-color: $background-color; // Apply specific styles for points page
}
</style>
