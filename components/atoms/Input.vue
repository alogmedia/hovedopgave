<template>
  <input type="text" class="search-input" />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
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
  font-family: $font-subheading;
}
</style>
