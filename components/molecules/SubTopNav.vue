<template>
  <div class="top-nav">
    <Logo customClass="SubLogo" />
    <div class="topicons">
      <NuxtLink to="/404"
        ><TopNavIcon name="material-symbols:search" class="pointIconHeart"
      /></NuxtLink>
      <NuxtLink to="/404"
        ><TopNavIcon name="ic:twotone-favorite-border" class="pointIconHeart"
      /></NuxtLink>
      <NuxtLink to="/404"
        ><TopNavIcon
          name="material-symbols:account-circle"
          class="pointIconUser"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
