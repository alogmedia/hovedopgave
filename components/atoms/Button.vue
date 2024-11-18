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
      default: '#0071e3' // Default blue color
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
    width: 175px;
    justify-content: center;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.25rem;
    font-family: Jakarta;
  }
  </style>
  