<template>
    <div class="pointProduct-card">
      <Image :src="imageSrc" :alt="alt" width="100%" height="100%" class="catImg"/>
      <PointProductTitle :title="title" :subtitle="subtitle" />
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
    subtitle: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped lang="scss">
  .pointProduct-card {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  margin: 0; /* Remove the auto margin to prevent additional spacing */
  position: relative;
  width: 150px;  // Ensure fixed width for consistency in slider
  height: 250px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; // Space between each product in the row

  .catImg {
    display: block;
    margin: auto auto;
    width: 100px;
    padding: 10px; /* Adjust padding to reduce extra space */
  }
}
  </style>
  