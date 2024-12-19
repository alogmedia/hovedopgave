<template>
  <div class="point-wrapper">
    <div class="points-title">
      <Text :content="title" type="main" />
      <div class="points">
        <Icon name="ion:tennisball" class="tennisBall"></Icon>
        <Text :content="subtitle" type="subheading" />
      </div>
    </div>
    <div class="guide">
      <p class="guideText">Padelpoints</p>
      <NuxtLink to="/guide" class="guideLink">Sådan virker det</NuxtLink>
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
.point-wrapper {
  margin: 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #fff;
  height: 100px;
  text-transform: uppercase;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
}
.points-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  .points {
    display: flex;
  }
  .text.main {
    font-family: $font-heading;
    font-size: 1.675rem;
    color: #000;
    letter-spacing: 4%;
    padding-left: 20px;
    font-weight: 100;
  }
  .tennisBall {
    color: $secondary-color;
    margin-left: auto;
    font-size: 1.5rem;
    margin-top: 5%;
  }
  .text.subheading {
    font-size: 2rem;
    color: $secondary-color;
    letter-spacing: 2px;
    padding-right: 20px;
    padding-left: 5px;
    font-weight: 100;
  }
}
.guide {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  padding-top: 10px;
  .guideText {
    font-size: 0.875rem;
    color: #000;
    font-family: $font-subheading;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: initial;
  }
  .guideLink {
    font-size: 0.675rem;
    color: $primary-color;
    font-family: $font-subheading;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: initial;
  }
}
</style>
