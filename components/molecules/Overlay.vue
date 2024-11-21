<template>
  <div class="overlay">
    <TextBlock :title="title" :headline="headline" />
    <CallToAction :label="buttonLabel" :icon="buttonIcon" />
  </div>
</template>

<script setup>
import TextBlock from "@/components/molecules/TextBlock.vue";
import CallToAction from "@/components/molecules/CallToAction.vue";

const props = defineProps({
  title: String,
  headline: String,
  buttonLabel: String,
  buttonIcon: String,
});
</script>

<style scoped lang="scss">
.overlay {
  position: relative;
  top: -16rem;
  background: rgba(255, 255, 255, 1);
  min-width: 250px;
  max-width: min-content;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.5rem;
  z-index: 10;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); // Defines the diagonal cut
}
</style>
