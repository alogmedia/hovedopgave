<template>
  <div class="top-nav">
    <Logo customClass="SubLogo" />
    <div class="topicons">
      <TopNavIcon name="material-symbols:search" class="pointIconHeart" />
      <TopNavIcon name="ic:twotone-favorite-border" class="pointIconHeart" />
      <TopNavIcon
        name="material-symbols:account-circle-outline"
        class="pointIconUser"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; // Ensure full width of the parent container
}

.topicons {
  display: flex;
  gap: 11px;
}
.pointIconHeart,
.pointIconUser {
  width: 25px;
}

.SubLogo {
  width: 70px;
}
</style>
