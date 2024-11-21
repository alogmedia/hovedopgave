<template>
    <div class="pointProduct-card">
      <Image :src="imageSrc" :alt="alt" width="100%" height="100%" class="catImg"/>
      <PointProductTitle :title="title"/>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Image from '@/components/atoms/Image.vue';
  import CategoryTitle from '@/components/molecules/CategoryTitle.vue';
  
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Category Image'
    },
    title: {
      type: String,
      required: true
    },
  });
  </script>
  
  <style scoped lang="scss">
  .pointProduct-card {
  display: flex;
  background-color: #FFFFFF;
  position: relative;
  height: 250px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; // Space between each product in the row

  .catImg {
    display: block;
    margin: auto auto;
    width: 125px;
    padding: 10px; /* Adjust padding to reduce extra space */
  }
}
  </style>
  