<template>
  <div class="pointShop-banner">
    <Text content="FASTE DEALS" class="heading" />
    <div class="filterContent">
      <NuxtLink to="/404"><Text content="Sorter efter" class="filter" type="sub" />
      </NuxtLink>
      <NuxtLink to="/404"><Icon name="material-symbols:add" class="filterIcon" /></NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.pointShop-banner {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  gap: 10px;
}

.filterContent {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0px;
  align-items: center;
  gap: 5px;
  a {
    text-decoration: none;
    color: #000;
  }
}
.filterIcon {
  font-size: 1rem;
  margin-top: 5px;
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
