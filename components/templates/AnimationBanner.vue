<template>
  <div class="animation-banner">
    <video
      class="banner-video"
      autoplay
      muted
      playsinline
      webkit-playsinline
      loading="lazy"
    >
      <source :src="randomVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import vid1 from "@/assets/videos/animationvideo1.mp4";
import vid2 from "@/assets/videos/animationvideo2.mp4";
import vid3 from "@/assets/videos/animationvideo3.mp4";
import vid4 from "@/assets/videos/animationvideo4.mp4";
import vid5 from "@/assets/videos/animationvideo5.mp4";

const videos = [vid1, vid2, vid3, vid4, vid5];

const getRandomVideo = () => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
};

const randomVideo = ref(getRandomVideo());
</script>

<style scoped lang="scss">
.animation-banner {
  display: flex;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
}

.banner-video {
  width: 100%;
  height: auto; 
  object-fit: cover;
}
</style>
