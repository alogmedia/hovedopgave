<template>
    <div class="points-title">
      <Text :content="title" type="main" />
      <Icon name="ion:tennisball" class="tennisBall"></Icon>
      <Text :content="subtitle" type="subheading" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Text from '@/components/atoms/Text.vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped lang="scss">
  .points-title {
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-left: 20px;
    align-items: center;
    background-color: #FFF;
    width: 95%;
    height: 60px;
    text-transform: uppercase;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1); // Adds a modern shadow for depth

  
    
    .text.main {
      font-family: Muroslant;
      font-size: 2rem;
      color: #000; // Custom black color for normal text
      letter-spacing: 4%;
      padding-left: 20px;
    }

    .tennisBall {
      color: #E84B4A; // Custom red color for emphasis
      margin-left: auto;
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    .text.subheading {
      font-size: 2rem;
      color: #E84B4A; // Custom red color for emphasis
      letter-spacing: 2px;
      padding-right: 20px;
      padding-left: 5px;
      font-weight: 400;
      
    }
  }
  </style>
  