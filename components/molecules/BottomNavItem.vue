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

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>

<style scoped lang="scss">
.bottom-nav-item {
  flex: 1;
  text-align: center;
  font-family: $font-heading;
  font-weight: 100;
  letter-spacing: 1px;

  &.active {
    color: #ff4d4d;
  }
}
</style>
