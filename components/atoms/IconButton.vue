<template>
  <div :class="['icon-button', customClass]">
    <Icon :name="icon" class="icon" />
    <span v-if="label" class="label">{{ label }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;

  .icon {
    font-size: 24px;
    margin-bottom: 5px;
    transition: transform 0.2s ease;
  }

  .label {
    font-weight: 100;
    font-size: 0.775rem;
  }
}
</style>
