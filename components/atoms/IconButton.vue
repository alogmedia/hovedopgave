<template>
    <div class="icon-button">
      <Icon :name="icon" class="icon" />
      <span v-if="label" class="label">{{ label }}</span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    }
  });
  </script>
  
  <style scoped lang="scss">
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 0.9rem;
  
    .icon {
      font-size: 24px; // Adjust size for the icons
      margin-bottom: 5px;
    }
  }
  </style>
  