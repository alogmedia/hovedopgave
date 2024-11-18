<template>
  <div :class="['logo-container', customClass]">
    <img :src="src" :alt="alt" class="logo" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Logo from "@/assets/images/padelshoppen-logo.svg";
const props = defineProps({
  src: {
    type: String,
    default: Logo,
  },
  alt: {
    type: String,
    default: "Padelshoppen Logo",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.logo-container {
  position: relative;
  top: 3%;
  left: 13px;
}

.logo {
  width: 160px;
  max-width: 100%;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}
</style>
