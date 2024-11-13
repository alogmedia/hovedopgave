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
        Install Now
      </button>
    </div>
  </div>
</template>

<script setup>
import videoSource from "@/assets/videos/testvideo.mp4";

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

// Handle the install prompt
const promptInstall = async () => {
  if (deferredPrompt.value) {
    console.log("Prompting installation...");
    deferredPrompt.value.prompt(); // Show the install prompt
    const { outcome } = await deferredPrompt.value.userChoice; // Wait for user choice
    console.log(`User choice: ${outcome}`);
    if (outcome === "accepted") {
      console.log("User accepted the installation");
    } else {
      console.log("User dismissed the installation");
    }
    deferredPrompt.value = null; // Clear the deferred prompt
  } else {
    console.log("Deferred prompt is null. Cannot show install prompt.");
  }
};

onMounted(() => {
  console.log("Component mounted, adding event listeners...");

  // Listen for the beforeinstallprompt event
  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("beforeinstallprompt event fired");
    console.log("Current showInstallButton value:", showInstallButton.value);

    e.preventDefault(); // Prevent the default mini-infobar prompt
    deferredPrompt.value = e; // Save the event for triggering later
    showInstallButton.value = true; // Show the install button
    console.log("Updated showInstallButton to true");
  });

  // Optional: Handle appinstalled event to track successful installations
  window.addEventListener("appinstalled", () => {
    console.log("PWA was installed successfully!");
    showInstallButton.value = false; // Hide the install button
  });

  // Debug initial states
  console.log("Initial showInstallButton:", showInstallButton.value);
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
