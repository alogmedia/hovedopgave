<template>
  <div class="text-block">
    <Text :content="title" type="subheading" />
    <Text :content="headline" type="heading" />
  </div>
</template>

<script setup>
import Text from "@/components/atoms/Text.vue";

const props = defineProps({
  title: String,
  headline: String,
});
</script>

<style scoped lang="scss">
.text-block {
  color: #000;
}
</style>
