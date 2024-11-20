<template>
    <div class="top-nav">
        <Logo customClass="SubLogo" />
    <div class="topicons">
        <TopNavIcon name="ic:twotone-favorite-border" class="pointIconHeart"/>
        <TopNavIcon name="material-symbols:account-circle-outline" class="pointIconUser"/>
      </div>
    </div>
  </template>

  <script setup>
  </script>
  
  <style scoped lang="scss">
  .top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; // Ensure full width of the parent container
    padding: 0; // Removed padding, relying on header-container's padding
    box-sizing: border-box;
  }
  
  .topicons {
    display: flex;
    gap: 11px;
    margin-right: 20px;
  }
  .pointIconHeart,
  .pointIconUser {
    width: 25px;
  }

  .SubLogo {
    width:70px;
  }
  </style>
  