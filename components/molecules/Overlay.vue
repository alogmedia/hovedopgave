<template>
  <div class="overlay">
    <TextBlock :title="title" :headline="headline" />
    <NuxtLink to="/points">
    <CallToAction :label="buttonLabel" :icon="buttonIcon" /></NuxtLink>
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
  top: -28rem;
  background: rgba(255, 255, 255, 1);
  min-width: 155px;
  max-width: fit-content;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.5rem;
  z-index: 10;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}

a {
  text-decoration: none;

}
</style>
