<!-- components/atoms/TopNavIcon.vue -->
<template>
  <Icon :name="name" :style="{ color }" :size="size" :class="customClass" />
  
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'black',
  },
  size: {
    type: String,
    default: '38px',
  },
  customClass: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
</style>
