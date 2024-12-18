<template>
  <div class="top-nav">
    <Logo />
    <div class="topicons">
      <TopNavIcon name="ic:twotone-favorite-border" />
      <TopNavIcon name="material-symbols:account-circle-outline" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.topicons {
  display: flex;
  gap: 11px;
}
</style>
