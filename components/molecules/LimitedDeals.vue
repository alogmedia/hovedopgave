<template>
  <div class="pointShop-banner">
    <Text content="Tidsbegrænset Deals!" class="heading" />
    <div class="filterContent">
      <Text content="Sorter efter" class="filter" type="sub" />
      <Icon name="material-symbols:add" class="filterIcon" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.pointShop-banner {
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  gap: 10px;
  margin-top: 20px;
  justify-content: space-between;
}

.filterContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.filterIcon {
  font-size: 1rem;
}

.filter {
  font-size: 0.875rem;
  font-weight: bold;
  font-family: Jakarta;
  width: 100%;
}

.text.heading {
  font-family: "Muroslant", sans-serif;
  letter-spacing: 1px;
  font-size: 26px !important;
  font-weight: 350;
}
</style>
