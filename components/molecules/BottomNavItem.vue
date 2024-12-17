<template>
  <div class="bottom-nav-item" :class="{ active: isActive }">
    <IconButton :icon="icon" :label="label" class="NavIcon" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router"; // Import Nuxt's route hook
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

// Use the route hook to check if the current route matches
const route = useRoute();
const isActive = computed(() => route.path === props.to); // Compare route.path with the `to` prop
</script>

<style scoped lang="scss">
.bottom-nav-item {
  flex: 1; // Ensure each item takes up equal space in the bottom navigation
  text-align: center;
  font-family: "Muroslant"; // Use the Muroslant font
  font-weight: 100;
  letter-spacing: 1px;

  &.active {
    color: #ff4d4d; // Active state color
  }

}
</style>
