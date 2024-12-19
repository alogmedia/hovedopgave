<template>
  <div class="product-banner">
    <NuxtLink to="/points"
      ><Icon name="material-symbols:arrow-back-rounded" class="arrowIcon"
    /></NuxtLink>
    <Text content="INDKØBSKURV" class="heading" />
  </div>
</template>

<style scoped lang="scss">
.product-banner {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  gap: 10px;
  align-items: center;
}

.filterContent {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.arrowIcon {
  display: flex;
  font-size: 1rem;
  color: #000;
  margin-bottom: 5px;
}

.text.heading {
  font-family: $font-heading;
  letter-spacing: 1px;
  font-size: 26px !important;
  font-weight: 350;
}
</style>
