<template>
  <div class="points-title">
    <Text :content="title" type="main" />
    <div class="points">
      <Icon name="ion:tennisball" class="tennisBall"></Icon>
      <Text :content="subtitle" type="subheading" />
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
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.points-title {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  background-color: #fff;
  height: 60px;
  text-transform: uppercase;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1); // Adds a modern shadow for depth

  .points {
    display: flex;
    align-items: center;
  }
  .text.main {
    font-family: Muroslant;
    font-size: 2rem;
    color: #000; // Custom black color for normal text
    letter-spacing: 4%;
    padding-left: 20px;
  }

  .tennisBall {
    color: #e84b4a; // Custom red color for emphasis
    margin-left: auto;
    font-size: 1.5rem;
  }
  .text.subheading {
    font-size: 2rem;
    color: #e84b4a; // Custom red color for emphasis
    letter-spacing: 2px;
    padding-right: 20px;
    padding-left: 5px;
    font-weight: 400;
  }
}
</style>
