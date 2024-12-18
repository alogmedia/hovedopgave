<!-- components/organisms/Header.vue -->
<template>
  <div class="header-container">
    <div class="header-inner">
      <TopNav />
      <SearchBar />
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  background-color: #ffffff;
}

.header-inner {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
}
</style>
