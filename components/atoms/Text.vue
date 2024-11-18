<template>
    <component :is="tag" :class="['text', type]">{{ content }}</component>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'paragraph'
    }
  });
  
  const tag = computed(() => {
    switch (props.type) {
      case 'heading':
        return 'h2';
      case 'subheading':
        return 'h3';
      default:
        return 'p';
    }
  });
  </script>
  
  <style scoped lang="scss">
  .text.heading {
    font-size: 2rem;
    letter-spacing: 4%;
  }
  
  .text.subheading {
    font-size: 1.5rem;
    color: #E84B4A;
    letter-spacing: 4%;

  }
  
  .text.paragraph {
    font-size: 1rem;
  }
  </style>
  