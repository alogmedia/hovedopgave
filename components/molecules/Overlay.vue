<template>
  <div class="overlay">
    <TextBlock :title="title" :headline="headline" />
    <CallToAction :label="buttonLabel" :icon="buttonIcon" />
  </div>
</template>

<script setup>
import TextBlock from '@/components/molecules/TextBlock.vue';
import CallToAction from '@/components/molecules/CallToAction.vue';

const props = defineProps({
  title: String,
  headline: String,
  buttonLabel: String,
  buttonIcon: String
});
</script>

<style scoped lang="scss">
.overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  width: 300px; // Adjust width as needed
  height: 200px; // Adjust height as needed
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); // Defines the diagonal cut
  box-sizing: border-box;
}
</style>
