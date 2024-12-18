<template>
  <div class="page-title">
    <Text :content="title" type="subheading" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.page-title {
  margin-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;

  .text.subheading {
    font-size: 2rem;
    color: $secondary-color;
    font-weight: 100;

  }
}
</style>
