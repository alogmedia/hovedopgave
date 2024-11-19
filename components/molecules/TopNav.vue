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
  width: 100%; // Ensure full width of the parent container
  padding: 0; // Removed padding, relying on header-container's padding
  box-sizing: border-box;
}

.topicons {
  display: flex;
  gap: 11px;
}
</style>
