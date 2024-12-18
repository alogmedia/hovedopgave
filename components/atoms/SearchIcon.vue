<template>
  <Icon :name="name" :style="iconStyle" :size="size" :class="customClass" />
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "ph-magnifying-glass",
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

