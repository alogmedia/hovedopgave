<template>
  <div class="category-title">
    <Text :content="title" type="subheading" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Text from "@/components/atoms/Text.vue";

const props = defineProps({
  title: {
    type: [String, Number], 
    required: true,
  },
});
</script>

<style scoped lang="scss">
.category-title {
  text-transform: Capitalize;
  .text.subheading {
    font-size: .875rem;
    color: #000;
    font-weight: 800;
    text-align: center;
    font-family: $font-subheading;

  }

  .text.undertitle {
    font-family: $font-heading;
    font-size: 2rem;
    color: #000;
    letter-spacing: 4%;
    font-weight: 100;

  }
}
</style>
