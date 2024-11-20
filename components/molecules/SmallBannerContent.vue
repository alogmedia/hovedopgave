<template>
  <div class="banner">
    <div class="banner-content">
      <TennisBallIcon />
      <Text :content="'20 % PÅ ALLE BOLDE'" type="paragraph" class="textleft" />
    </div>
    <div class="banner-right">
      <Text
        :content="'KUN IDAG!'"
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
  height: 30px; /* Adjust height as needed */
  background-color: #F6F8FA; /* Grey background color */
}

.banner-content {
  display: flex;
  align-items: center;
  width: 70%; /* Adjust the width as needed */
  background-color: #F6F8FA; /* Red background color */
  height: 100%;
}

.banner-right {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  padding-left: 10px;
  background-color: #ff4d4d;
  clip-path: polygon(
    5% 0,
    100% 0,
    100% 100%,
    0 100%
  ); /* Creates the diagonal cut */
}

.textleft {
  font-weight: bold;
  padding-left: 30%;
  font-family: Jakarta;
}

.textright {
  font-weight: bold;
  color: #FFF;
  font-family: Jakarta;
}
</style>
