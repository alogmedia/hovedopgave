<template>
  <img class="tennis-ball" :src="ballSrc" alt="Tennis Ball" />
</template>

<script setup>
import ballSrc from "@/assets/images/tennisbold.png"; // Ensure the path is correct
</script>

<style scoped lang="scss">
.tennis-ball {
  position: absolute;
  width: 25px; /* Adjust size as necessary */
  height: 25px; /* Maintain aspect ratio */
  margin-left: 20px;
  z-index: 1;

  /* Animation */
  animation: bounce 3s ease-in-out forwards; /* 4 seconds total animation time */
}

/* Keyframes for realistic bouncing */
@keyframes bounce {
  /* First Bounce (height = 100%) */
  0% {
    transform: translateY(0); /* Ground level */
  }
  10% {
    transform: translateY(-200px); /* Peak height */
  }
  20% {
    transform: translateY(0); /* Back to ground */

    /* Second Bounce (height = 70% of the first) */
  }
  30% {
    transform: translateY(-140px); /* Peak height */
  }
  40% {
    transform: translateY(0); /* Back to ground */

    /* Third Bounce (height = 70% of the second) */
  }
  47% {
    transform: translateY(-98px); /* Peak height */
  }
  53% {
    transform: translateY(0); /* Back to ground */

    /* Fourth Bounce (height = 70% of the third) */
  }
  57% {
    transform: translateY(-68.6px); /* Peak height */
  }
  63% {
    transform: translateY(0); /* Back to ground */

    /* Subsequent Bounces */
  }
  67% {
    transform: translateY(-48px); /* Peak height */
  }
  72% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-33.6px); /* Peak height */
  }
  80% {
    transform: translateY(0);
  }
  83% {
    transform: translateY(-23.5px); /* Peak height */
  }
  88% {
    transform: translateY(0);
  }
  91% {
    transform: translateY(-16.5px); /* Peak height */
  }
  95% {
    transform: translateY(0);
  }
  97% {
    transform: translateY(-11.5px); /* Peak height */
  }
  100% {
    transform: translateY(0); /* Resting position */
  }
}
</style>
