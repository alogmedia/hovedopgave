<template>
  <div>
    <VideoOverlay />

    <Header />
    <AnimationBanner />
    <Welcome class="heading" title="Velkommen," subtitle="Anders!" />
    <!-- Loop through the heroBanners array -->
    <div v-for="(banner, idx) in heroBanners" :key="idx">
      <HeroBanner
        :imageSrc="banner.imageSrc"
        :title="banner.title"
        :headline="banner.headline"
        :buttonIcon="banner.buttonIcon"
        :buttonLabel="banner.buttonLabel"
        v-if="isBannerVisible(idx)"
      />
    </div>

    <BottomNav :homeIcon="homeImg" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import hero3 from "@/assets/images/hero3.png";
import hero4 from "@/assets/images/hero4.png";
import hero5 from "@/assets/images/hero5.png";

// Import other assets
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

// Lazy load logic
const loadedIndexes = ref([0, 1]); // Initially load the first two banners

const isBannerVisible = (idx) => {
  // Check if the index is already loaded
  return loadedIndexes.value.includes(idx);
};

// Lazy load banners as the user scrolls
const loadRemainingBanners = () => {
  loadedIndexes.value = heroBanners.map((_, index) => index); // Load all banners
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadRemainingBanners();
        }
      });
    },
    {
      root: null,
      threshold: 0.1, // Adjust to trigger loading earlier
    },
  );

  // Observe the last banner container
  const lastBanner = document.querySelector(".bottom-nav");
  if (lastBanner) {
    observer.observe(lastBanner);
  }
});
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
