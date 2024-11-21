<template>
  <div class="banner">
    <div class="banner-content">
      <TennisBallIcon />
      <Text :content="'KUN IDAG!'" type="paragraph" class="textleft" />
    </div>
    <div class="banner-right">
      <Text
        :content="'20 % PÅ ALLE BOLDE'"
        type="paragraph"
        class="textright"
      />
    </div>
  </div>
</template>

<script setup>
import TennisBallIcon from "@/components/atoms/TennisBallIcon.vue";
import Text from "@/components/atoms/Text.vue";
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px; /* Adjust height as needed */
  background-color: #ffffff; /* Grey background color */
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%; /* Adjust the width as needed */
  background-color: #ff4d4d; /* Red background color */
  clip-path: polygon(
    0 0,
    100% 0,
    90% 100%,
    0 100%
  ); /* Creates the diagonal cut */
  height: 100%;
}

.banner-right {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
}

.textleft {
  font-weight: bold;
  padding-left: 30%;
  font-family: Jakarta;
  color: #fff;
}

.textright {
  font-weight: bold;
  font-family: Jakarta;
}
</style>
