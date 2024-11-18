<template>
  <div class="banner">
    <div class="banner-content">
      <TennisBallIcon />
      <Text :content="'KUN IDAG!'" type="paragraph" class="textleft"/>
    </div>
    <div class="banner-right">
      <Text :content="'20 % PÅ ALLE BOLDE'" type="paragraph" class="textright"/>
    </div>
  </div>
</template>

<script setup>
import TennisBallIcon from '@/components/atoms/TennisBallIcon.vue';
import Text from '@/components/atoms/Text.vue';
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  align-items: center;
  width:100%;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 10px; // Space between items
  width: 100%;
  background-color: #ff4d4d;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  height: 35px;
  position: relative; // Needed for positioning the ::after element

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 15%; // Adjust to control the size of the overlay triangle
    height: 100%;
    background-color: #F6F8FA; // Match the banner-right background color
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
  }
}

.banner-right {
  display: flex;
  background-color: #F6F8FA;
  height: 35px;
  width: 100%;
  align-items: center;
}

.textleft {
  font-weight: bold;
  padding-left: 35%;
}

.textright {
  font-weight: bold;
}
</style>
