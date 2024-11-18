<template>
  <button :class="['search-button', customClass]" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "SØG",
  },
  customClass: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);
</script>

<style scoped lang="scss">
.search-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
