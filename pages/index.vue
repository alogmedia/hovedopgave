<template>
  <div>
    <Header />
    <AnimationBanner />
    <Welcome class="heading" title="Velkommen," subtitle="Anders!" />
    <!-- Loop through the heroBanners array -->
    <div v-for="(banner, index) in heroBanners" :key="index">
      <HeroBanner
        :imageSrc="banner.imageSrc"
        :title="banner.title"
        :headline="banner.headline"
        :buttonIcon="banner.buttonIcon"
        :buttonLabel="banner.buttonLabel"
      />
    </div>

    <BottomNav :homeIcon="homeImg" />
  </div>
</template>


<script setup>
import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import hero3 from "@/assets/images/hero3.png";
import hero4 from "@/assets/images/hero4.png";
import hero5 from "@/assets/images/hero5.png";

import categoryImage from "@/assets/images/padelbat.png";
import homeImg from "/icon.png";

// Array of banner data
const heroBanners = [
  {
    imageSrc: hero1,
    title: "Deals",
    headline: "Se denne uges deal",
    buttonIcon: "material-symbols:arrow-right-alt",
    buttonLabel: "Find den her",
  },
  {
    imageSrc: hero2,
    title: "Padel Bat",
    headline: "Specifikt til dig",
    buttonIcon: "material-symbols:arrow-right-alt",
    buttonLabel: "Se mere",
  },
  {
    imageSrc: hero3,
    title: "Bolde",
    headline: "Ad libitum",
    buttonIcon: "material-symbols:arrow-right-alt",
    buttonLabel: "Se mere",
  },
  {
    imageSrc: hero4,
    title: "Udstyr",
    headline: "i højeste kvalitet",
    buttonIcon: "material-symbols:arrow-right-alt",
    buttonLabel: "Se mere",
  },
  {
    imageSrc: hero5,
    title: "Tilbud",
    headline: "til skarpe priser",
    buttonIcon: "material-symbols:arrow-right-alt",
    buttonLabel: "Shop nu",
  },
];
</script>

<style lang="scss">
@use "@/assets/global_vars.scss" as *;

body {
  background-color: $background-color;
}

.hero-banner {
  margin-top: 20px;
}

.video-wrapper {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease;
}

.video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
