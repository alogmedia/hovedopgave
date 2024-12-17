<template>
  <div class="productDescription-wrapper">
    <div class="description">
      <h2 class="descriptionTitle">{{ title }}</h2>
      <p class="descriptionText">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Text from "@/components/atoms/Text.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.productDescription-wrapper {
  display: flex;

  margin: 20px;
  background-color: #fff;
  height: 214px;
  text-transform: lowercase;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1); // Adds a modern shadow for depth
  margin-bottom: 100px;

  .description {
    margin-top: 20px;
    padding: 0px 20px;
  }
  .descriptionTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Jakarta;
    font-size: 1rem;
    font-weight: 800;
    text-transform: initial;
  }

  .descriptionText {
    font-family: Jakarta;
    font-size: 0.875rem;
    font-weight: 400;
  }
}
</style>
