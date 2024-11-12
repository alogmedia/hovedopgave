<template>
  <div class="video-wrapper" v-if="showVideo">
    <video
      ref="introVideo"
      class="video-content"
      :src="videoSource"
      autoplay
      playsinline
      @ended="onVideoEnd"
      @playing="onVideoPlaying"
      muted
    ></video>
  </div>
  <div v-else :class="['logo-container', backgroundColorClass]">
    <h1 ref="logoText" class="logo-text">
      <img src="/assets/images/padelshoppen-logo.svg" class="logo" />
    </h1>
    <div>
      <button
        v-if="showInstallButton"
        @click="promptInstall"
        class="installButton"
      >
        Install App
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, watch } from "vue";
import videoSource from "@/assets/videos/testvideo.mp4";
const showVideo = ref(true);
const backgroundColorClass = ref("");
const logoText = ref(null);

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

const installPrompt = inject("installPrompt");
const showInstallButton = ref(false);

// Watch the reactive installPrompt for changes
watch(installPrompt, (newPrompt) => {
  console.log("installPrompt changed:", newPrompt); // Check if installPrompt updates
  if (newPrompt) {
    showInstallButton.value = true;
  }
});

function promptInstall() {
  if (installPrompt && installPrompt.value) {
    console.log("Prompting install"); // Confirm promptInstall is called
    installPrompt.value.prompt();
    installPrompt.value.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null; // Reset the deferred prompt
      showInstallButton.value = false; // Hide the button after action
    });
  }
}
</script>

<style scoped>
.video-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #e84b4a;
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

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
}

.logo-text {
  font-size: 2.5rem;
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 1s ease, transform 1s ease;
}

.animate-logo-top {
  top: 10%;
  transform: translate(-50%, 0);
}

.logo {
  width: 300px;
  max-width: 100%;
  transition: transform 1.5s ease;
}

.installButton {
  padding: 10px 20px;
  background-color: #e84b4a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
}
</style>
