<template>
  <div class="top-logo">
    <Logo />
  </div>
  <div class="error">
    <div class="error-content">
      <img :src="errorImage" alt="404" />
      <h1>404...</h1>
      <p>
        Denne side er ikke en del af konceptet<br />
        gå tilbage til forsiden
      </p>
      <NuxtLink :to="backLink" class="backButton">
        <CallToAction label="Tilbage" class="backButton" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import errorImage from "@/assets/images/error1.png";
import { useNuxtApp } from "#app";
import { computed } from "vue";

const { $previousRoute } = useNuxtApp();

const backLink = computed(() => $previousRoute?.value || "/");
</script>

<style lang="scss" scoped>
.top-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;

  .error-content {
    img {
      width: 300px;
    }
  }
}
h1 {
  color: $secondary-color;
  font-size: 3.5rem;
  padding-top: 20px;
  font-weight: 100;
}

p {
  font-family: $font-subheading;
  font-weight: 800;
  font-size: 1rem;
}

.backButton {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :deep(button) {
    padding: 0 60px;
  }
}
</style>
