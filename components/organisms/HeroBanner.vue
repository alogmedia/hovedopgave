<template>
  <div class="hero-banner">
    <Image :src="imageSrc" alt="Hero Image" />
    <Overlay
      :title="title"
      :headline="headline"
      :buttonLabel="buttonLabel"
      :buttonIcon="buttonIcon"
    />
  </div>
</template>

<script setup>
import Image from "@/components/atoms/Image.vue";
import Overlay from "@/components/molecules/Overlay.vue";

const props = defineProps({
  imageSrc: String,
  title: String,
  headline: String,
  buttonLabel: String,
  buttonIcon: String,
});
</script>

<style scoped lang="scss">
.hero-banner {
  position: relative;
  width: 100%;
  height: 515px;
}

.hero-banner img {
  width: 100%;
  height: 100%;
}
</style>
