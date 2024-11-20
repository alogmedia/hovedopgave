<!-- components/organisms/Header.vue -->
<template>
    <div class="header-container">
      <div class="header-inner">
        <SubTopNav />
      </div>
    </div>
  </template>
  
  <script></script>
  
  <style scoped lang="scss">
  .header-container {
    width: 100%;
    box-sizing: border-box;
    padding-top: 10px;
    background-color: #F6F8FA;
  }
  
  .header-inner {
    display: flex;
    flex-direction: column;
    align-items: stretch; // Stretch to ensure children take full width
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  