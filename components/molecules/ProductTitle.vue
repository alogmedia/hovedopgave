<template>
  <div class="product-banner">
    <NuxtLink to="/points"
      ><Icon name="material-symbols:arrow-back-rounded" class="arrowIcon"
    /></NuxtLink>
    <Text content="SIUX ULTRA PRO" class="heading" />
  </div>
</template>

<style scoped lang="scss">
.product-banner {
  display: flex;
  flex-direction: row;
  position: relative;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  gap: 10px;
}

.filterContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.arrowIcon {
  display: flex;
  font-size: 1.2rem;
  color: #000;
}

.filter {
  font-size: 0.875rem;
  font-weight: bold;
  font-family: $font-subheading;
}

.text.heading {
  font-family: $font-heading;
  letter-spacing: 1px;
  font-size: 26px !important;
  font-weight: 350;
}
</style>
