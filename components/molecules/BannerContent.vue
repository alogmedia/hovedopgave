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
  height: 50px; /* Adjust height as needed */
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
  padding-left: 10px; /* Padding for better alignment of tennis ball and text */
}

.banner-right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 50%;
  padding-left: 10px;
}

.textleft {
  font-weight: bold;
  color: #000; /* Black text color for "KUN IDAG!" */
  padding-left: 30%;
  font-family: Jakarta;
}

.textright {
  font-weight: bold;
  color: #000; /* Black text color for "20 % PÅ ALLE BOLDE" */
  font-family: Jakarta;
}
</style>
