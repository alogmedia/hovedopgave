<template>
    <div class="cta-button">
      <Button  :icon="icon" :label="label" />
    </div>
  </template>
  
  <script setup>
  import Button from '@/components/atoms/Button.vue';
  
  const props = defineProps({
    label: String,
    icon: String
  });
  </script>
  
  <style scoped lang="scss">
  .cta-button {
    margin-top: 20px;
  }
  </style>
  