<template>
  <div class="points">
    <moleculesTopNav />
    <organismsPromoBanner />
    <organismsBottomNav :homeIcon="homeImg"/>
  </div>

</template>
  
<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";
import homeImg from "/icon.png";

</script>
  
<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
}

</style>
  