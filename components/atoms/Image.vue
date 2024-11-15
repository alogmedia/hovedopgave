<template>
    <img :src="src" :alt="alt" :width="width" :height="height" class="image"/>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: 'auto'
    }
  });
  </script>
  
  <style scoped lang="scss">
  .image {
    object-fit: cover;
  }
  </style>
  