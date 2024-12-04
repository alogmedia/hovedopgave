<template>
  <div class="kurvbody">
    <SubHeader />
   <Cart />
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";
import homeImg from "/icon.png";
import { useVibrate } from '@vueuse/core'

// This vibrates the device for 300 ms
// then pauses for 100 ms before vibrating the device again for another 300 ms:
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

// Start the vibration, it will automatically stop when the pattern is complete:
vibrate()

// But if you want to stop it, you can:
stop()
</script>

<style scoped lang="scss">
@use "@/assets/global_vars.scss" as *;

.points {
  background-color: $background-color; // Apply specific styles for points page
}

.kurvbody {
 margin-bottom: 100px;
}
</style>
