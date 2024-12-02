<template>
  <div class="product-banner">
    <Icon name="material-symbols:arrow-back-rounded" class="arrowIcon" />
    <Text content="SIUX PRODUKT LIGHT" class="heading" />
  </div>
</template>

<style scoped lang="scss">
.product-banner {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
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
  font-size: 1rem;
}

.filter {
  font-size: 0.875rem;
  font-weight: bold;
  font-family: Jakarta;
}
</style>
