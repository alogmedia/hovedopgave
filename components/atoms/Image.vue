<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="['image', customClass]"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "auto",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.image {
  object-fit: cover;
  display: block;
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
