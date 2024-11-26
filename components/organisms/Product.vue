<template>
    <div class="pointProduct-card">
      <div v-if="showExpire" class="expire">
        <p class="expire"><Icon name="material-symbols:alarm" class="expireclock"></Icon>UDLØBER OM 7 DAGE</p>
      </div>
      <PointProductTitle :title="title"/>
      <Image :src="imageSrc" :alt="alt" width="100%" height="100%" class="catImg"/>

      <div class="pointPrice">
       
            <div class="points-title">
            
                <Icon name="ion:tennisball" class="tennisBall"></Icon>
                <Text :content="price" type="price" />
            </div>  
        </div>
        
      </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Image from '@/components/atoms/Image.vue';
  
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Category Image'
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    showExpire: {
      type: Boolean,
      default: false // Default to false if not specified
  },
});
</script>

<style scoped lang="scss">
.pointProduct-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  height: 250px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; // Space between each product in the row

  .catImg {
    width: 125px;
    padding-bottom: 60px;
    padding-top: 20px;
  }
}

.pointPrice {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: #0071e3;
  z-index: 100;

  .points-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
  }

  .tennisBall {
    color: #fff;
    font-size: 1.5rem;
    margin-top: 3px;
  }
}

  .expire {
    .expireclock {
      position: absolute;
      left: 55%;
      bottom: 60px;
    }
  }
  </style>
  