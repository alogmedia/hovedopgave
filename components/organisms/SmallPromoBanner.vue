<template>
    <div class="promotional-banner">
      <SmallBannerContent />
    </div>
  </template>
  
  <script setup>
  import BannerContent from "@/components/molecules/BannerContent.vue";
  </script>
  
  <style scoped lang="scss">
  .promotional-banner {
    display: flex;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    margin-top: 10px;
  }
  </style>
  