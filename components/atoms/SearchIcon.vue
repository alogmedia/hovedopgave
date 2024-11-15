<!-- components/atoms/SearchIcon.vue -->
<template>
    <Icon :name="name" :style="{ color }" :size="size" />
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    name: {
      type: String,
      default: 'ph-magnifying-glass', // Default to a magnifying glass icon
    },
    color: {
      type: String,
      default: 'black',
    },
    size: {
      type: String,
      default: '24px',
    },
  });
  </script>
  
  <style scoped>
  /* Add any additional styling for the icons if needed */
  </style>
  