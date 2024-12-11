<template>
  <div class="welcome-title">
    <Text :content="title" type="heading" />
    <Text :content="subtitle" type="subheading" />
  </div>
</template>

<script setup>
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
.welcome-title {
  display: flex;
  gap: 10px;
  margin-left: 10px;
  padding-top: 20px;
  .text.heading {
    color: #000;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 100;

  }
  .text.subheading {
    color: #e84b4a;
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 100;

  }
}
</style>
