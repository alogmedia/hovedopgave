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
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.category-title {
  text-transform: uppercase;
  .text.subheading {
    font-size: 1.2rem;
    color: #000; // Custom red color for emphasis
  }

  .text.undertitle {
    font-family: Muroslant;
    font-size: 2rem;
    color: #000; // Custom black color for normal text
    letter-spacing: 4%;
  }
}
</style>
