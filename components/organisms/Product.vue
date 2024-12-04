<template>
  <div class="pointProduct-card">
    <div v-if="showExpire" class="expire">
      <p class="expire">
        <Icon name="material-symbols:alarm" class="expireclock"></Icon>UDLØBER
        OM 7 DAGE
      </p>
    </div>
    <PointProductTitle :title="title" />
    <Image
      :src="imageSrc"
      :alt="alt"
      width="100%"
      height="100%"
      class="catImg"
    />

    <div class="pointPrice">
      <div class="points-title">
        <Icon name="ion:tennisball" class="tennisBall"></Icon>
        <Text :content="price" type="price" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Image from "@/components/atoms/Image.vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    default: "Category Image",
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
  showExpire: {
    type: Boolean,
    default: false, // Default to false if not specified
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
    margin-top: 10px;
    gap: 5px;
    align-items: center;
  }

  .tennisBall {
    color: #fff;
    font-size: 20px;
  }
}

.expire {
  display: flex;
  position: absolute;
  right: -30px;
  bottom: 30px;
  width: 200px;
  font-size: 10px;
  font-family: Jakarta;
  font-weight: 800;
  letter-spacing: 0.875px;
  z-index: 10;
}
@media only screen and (max-width: 390px) {
  .expire {
    font-size: 10px;
    right: -30px;
  }
}
</style>
