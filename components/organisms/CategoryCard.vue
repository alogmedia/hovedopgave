<template>
  <div class="category-card">
    <Image
      :src="imageSrc"
      :alt="alt"
      width="100%"
      height="100%"
      class="catImg"
    />
    <CategoryTitle :title="title" :subtitle="subtitle" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Image from "@/components/atoms/Image.vue";
import CategoryTitle from "@/components/molecules/CategoryTitle.vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    default: "Category Image",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.category-card {
  display: flex;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  width: 90%;
  height: 50%;
  border-radius: 8px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  .catImg {
    display: flex;
    margin: 0 auto;
    width: 150px;
    padding: 20px;
  }
}
</style>
