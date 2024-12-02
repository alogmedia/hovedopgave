<template>
  <input type="text" :placeholder="placeholder" class="search-input" />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Søg...",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.search-input {
  width: 100%;
  border: none;
  font-family: Jakarta;
}
</style>
