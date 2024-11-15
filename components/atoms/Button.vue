<template>
    <button class="button" :style="{ backgroundColor: color }">
      <Icon v-if="icon" :name="icon" size="22px"/>
      <span>{{ label }}</span>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#007bff' // Default blue color
    },

  });
  </script>
  
  <style scoped lang="scss">
  .button {
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight:bold;
  }
  </style>
  