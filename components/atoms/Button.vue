<template>
  <button :class="['button', customClass]" :style="buttonStyle">
    <Icon v-if="icon" :name="icon" size="22px" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#0071e3", // Default blue color
  },
  customClass: {
    type: String,
    default: "",
  },
});

const buttonStyle = computed(() => ({
  backgroundColor: props.color,
}));
</script>

<style scoped lang="scss">
.button {
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 40px;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: "Jakarta", sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
}

.button--custom {
  @extend .button;
}
</style>
