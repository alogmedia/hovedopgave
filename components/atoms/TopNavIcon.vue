<!-- components/atoms/TopNavIcon.vue -->
<template>
  <Icon :name="name" :style="{ color }" :size="size" />
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
});
</script>

<style scoped>
</style>
