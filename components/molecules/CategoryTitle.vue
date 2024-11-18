<template>
    <div class="category-title">
      <Text :content="title" type="subheading" />
      <Text :content="subtitle" type="paragraph" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Text from '@/components/atoms/Text.vue';
  
  const props = defineProps({
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
  .category-title {
    position: absolute;
    top: 10px;
    left: 10px;
    text-transform: uppercase;
  
    .text.subheading {
      font-weight: bold;
      font-size: 1.2rem;
      color: #E84B4A; // Custom red color for emphasis
    }
  
    .text.paragraph {
      font-weight: bold;
      font-size: 1rem;
      color: #000; // Custom black color for normal text
    }
  }
  </style>
  