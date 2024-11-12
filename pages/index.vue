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
      <button @click="promptInstall" class="installButton">Install App</button>
    </div>
    <div v-show="$pwa.needRefresh">
      <span> New content available, click on reload button to update. </span>

      <button @click="$pwa.updateServiceWorker()">Reload</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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

import { onMounted, nextTick } from "vue";

const showInstallButton = ref(false); // Controls the visibility of the install button
let deferredPrompt = null; // Stores the `beforeinstallprompt` event

onMounted(() => {
  window.addEventListener("beforeinstallprompt", async (e) => {
    console.log("beforeinstallprompt event fired");
    e.preventDefault(); // Prevent the automatic prompt
    deferredPrompt = e; // Save the event for later

    // Helper function to detect desktop
    function isDesktop() {
      return window.innerWidth > 1024;
    }

    // Use nextTick to ensure the DOM updates reactively
    await nextTick();

    // Only show the install button if it's a mobile device
    if (deferredPrompt && !isDesktop()) {
      showInstallButton.value = true; // Show the install button
    }
  });
});

function promptInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the install prompt
    deferredPrompt.userChoice.then((choiceResult) => {
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

// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const toast = useToast();

onMounted(() => {
  if ($pwa.offlineReady) toast.success("App ready to work offline");
});
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
