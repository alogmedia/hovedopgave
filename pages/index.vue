<template>
  <div>
    <Header />
    <HeroBanner
      :imageSrc="heroImage"
      title="Deals"
      headline="Vælg denne uges deal"
      buttonIcon="material-symbols:arrow-right-alt"
      buttonLabel="Find den her"
    />
    <PromoBanner />
    <CategoryCard title="Padel" subtitle="Bat" :imageSrc="categoryImage" />
    <CategoryCard title="Padel" subtitle="Bat" :imageSrc="categoryImage" />
    <LazyCategoryCard title="Padel" subtitle="Bat" :imageSrc="categoryImage" />
    <BottomNav :homeIcon="homeImg" />
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/hero.png";
import categoryImage from "@/assets/images/padelbat.png";
import homeImg from "/icon.png";
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
  font-family: "Muroslant", sans-serif;
  letter-spacing: 4%;
  font-size: 30px !important;
  padding-top: 5px;
  font-weight: 350;
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
