<template>
  <img class="tennis-ball" :src="ballSrc" alt="Tennis Ball" />
</template>

<script setup>
import ballSrc from "@/assets/images/tennisbold.png"; // Make sure the path is correct
</script>

<style scoped lang="scss">
.tennis-ball {
  position:absolute;
  width: 25px;  /* Adjust size as necessary */
  height: 25px; /* Maintain aspect ratio */
  margin-left: 20px;
  z-index: 1;

  /* Animation */
  animation: bounce 1s ease-in-out 3; /* 3 bounces with a duration of 1 second each */
}

/* Keyframes for the bouncing animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0); /* Start and end at the original position */
  }
  25% {
    transform: translateY(-20px); /* Move up */
  }
  50% {
    transform: translateY(0); /* Move back to original position */
  }
  75% {
    transform: translateY(-10px); /* Smaller bounce */
  }
}
</style>
