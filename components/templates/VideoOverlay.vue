<template>
  <div v-if="isVisible" class="video-overlay" @click="closeOverlay">
    <video
      class="video-content"
      autoplay
      muted
      playsinline
      @ended="closeOverlay"
    >
      <source src="/assets/videos/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useVibrate } from '@vueuse/core'
// State to track visibility of the overlay
const isVisible = ref(false);

const closeOverlay = () => {
  isVisible.value = false; // Hide the overlay
  localStorage.setItem("hasSeenOverlay", "true"); // Mark the video as seen
};

onMounted(() => {
  const hasSeenOverlay = localStorage.getItem("hasSeenOverlay");
  if (!hasSeenOverlay) {
    isVisible.value = true; // Show the video overlay only if it hasn't been seen
    const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

    // Start the vibration, it will automatically stop when the pattern is complete:
    vibrate()
    console.log("Vibrating...");
    // But if you want to stop it, you can:
    stop()
  }
});
</script>


<style scoped>
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9); /* Black background with transparency */
  z-index: 9999; /* Ensure it stays on top */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Indicate that the overlay is clickable */
}

.video-content {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video fills the screen */
  pointer-events: none; /* Prevent the video itself from blocking the click event */
}
</style>
