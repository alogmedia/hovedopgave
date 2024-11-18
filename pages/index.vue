<template>
  <div class="video-wrapper" v-if="showVideo">
  <!--   <video
      ref="introVideo"
      class="video-content"
      :src="videoSource"
      autoplay
      playsinline
      @ended="onVideoEnd"
      @playing="onVideoPlaying"
      muted
    ></video> -->
  </div>

  <organismsHeader />
  <organismsHeroBanner :imageSrc="heroImage" title="Deals" headline="Vælg denne uges deal" buttonIcon="material-symbols:arrow-right-alt" buttonLabel="Find den her"/>
  <organismsPromoBanner />
  <OrganismsCategoryCard title="Padel" subtitle="Bat" :imageSrc="categoryImage"/>
  <OrganismsCategoryCard title="Padel" subtitle="Bat" :imageSrc="categoryImage"/>

</template>

<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";

/* import videoSource from "@/assets/videos/testvideo.mp4";

const showVideo = ref(true);
const backgroundColorClass = ref("");
const logoText = ref(null);
const showInstallButton = ref(false); // Make sure this is defined
const deferredPrompt = ref(null); // Store the install prompt event

const onVideoEnd = () => {
  showVideo.value = false;
  nextTick(() => {
    if (logoText.value) {
      setTimeout(() => {
        logoText.value.classList.add("animate-logo-top");
      }, 500);
    }
  });
};

const onVideoPlaying = () => {
  setTimeout(() => {
    const videoWrapper = document.querySelector(".video-wrapper");
    videoWrapper.style.transition = "background-color 1s ease";
    videoWrapper.style.backgroundColor = "#ffffff";
  }, 3600);
};
 */
</script>

<style lang="scss">
@use "@/assets/global_vars.scss" as *;

body {
  background-color: $background-color;
}

.hero-banner {
  margin-top: 20px;
}

.text.heading {
  font-family: 'Muroslant', sans-serif;
  letter-spacing: 2px;
  font-size: 25px !important;
  padding-top: 5px;
 }


.video-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $accent-color;
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
