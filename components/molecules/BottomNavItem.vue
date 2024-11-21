<template>
  <div class="bottom-nav-item">
    <IconButton :icon="icon" :label="label" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import IconButton from "@/components/atoms/IconButton.vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.bottom-nav-item {
  flex: 1; // Ensure each item takes up equal space in the bottom navigation
  text-align: center;
}
</style>
