<template>
    <div class="promotional-banner">
      <BannerContent />
    </div>
  </template>
  
  <script setup>
  import BannerContent from '@/components/molecules/BannerContent.vue';
  </script>
  
  <style scoped lang="scss">
  .promotional-banner {
    display:flex;
    position: relative;
    display: flex;
    align-items: center;
    width:100%;
    margin-top: 20px;
    padding-bottom: 20px;
  }  
 
  </style>
  