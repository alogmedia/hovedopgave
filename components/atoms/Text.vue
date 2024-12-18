<template>
  <component :is="tag" :class="['text', type]">{{ content }}</component>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  content: {
    type: [String, Number], // Accept both String and Number
    required: false,
  },
  type: {
    type: String,
    default: "paragraph",
  },
});

const tag = computed(() => {
  switch (props.type) {
    case "heading":
      return "h2";
    case "subheading":
      return "h3";
    default:
      return "p";
  }
});
</script>

<style scoped lang="scss">

  .text.expire {
    font-size: .775rem;
    color: #000;
    font-family: $font-subheading;
    font-weight: 800;
  }
  

.text.subheading {
  font-size: 1.5rem;
  color: $secondary-color;
  letter-spacing: 4%;
  font-weight: 100;
}

.text.paragraph {
  font-size: 1rem;
}

.text.price {
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 1px;
  font-family: $font-subheading;
  font-weight: 800;
}

.text.expire {
  font-size: 0.875rem;
  color: #000;
  font-family: $font-subheading;
  font-weight: 800;
}
</style>
