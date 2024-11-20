<template>
    <div class="pointShop-banner">
        <Text content="FASTE DEALS!" class="heading"/>
        <div class="filterContent">
        <Text content="Filter" class="filter" type="sub"/>
        <Icon name="material-symbols:filter-alt-outline" class="filterIcon"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import BannerContent from "@/components/molecules/BannerContent.vue";
  </script>
  
  <style scoped lang="scss">
  .pointShop-banner {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    padding-bottom: 20px;
    margin-left: 20px;
    gap: 10px;
    width: 100%;
  }


  .filterContent {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 40px;
    align-items: center;
    gap: 5px;
  }
  .filterIcon {
    font-size: 1rem;
}

  .filter {
    font-size: .875rem;
    font-weight: bold;
    font-family: Jakarta;
    }
  </style>
  