<template>
    <div class="category-title">
      <Text :content="title" type="subheading" />
      <Text :content="subtitle" type="undertitle" />
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
    top: 30px;
    left: 30px;
    text-transform: uppercase;
  
    .text.subheading {
      font-size: 2rem;
      color: #E84B4A; // Custom red color for emphasis
      letter-spacing: 4%;
    }
  
    .text.undertitle {
      font-family: Muroslant;
      font-size: 2rem;
      color: #000; // Custom black color for normal text
      letter-spacing: 4%;
    }
  }
  </style>
  