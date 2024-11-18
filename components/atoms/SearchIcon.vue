<template>
  <Icon :name="name" :style="iconStyle" :size="size" :class="customClass" />
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "ph-magnifying-glass", // Default to a magnifying glass icon
  },
  color: {
    type: String,
    default: "black",
  },
  size: {
    type: String,
    default: "24px",
  },
  customClass: {
    type: String,
    default: "",
  },
});

const iconStyle = computed(() => ({
  color: props.color,
}));
</script>

<style scoped>
/* Add any additional styling for the icons if needed */
</style>
