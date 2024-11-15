<template>
    <input type="text" :placeholder="placeholder" class="search-input" />
  </template>
  
  <script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Søg...'
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .search-input {
    width: 100%;
    padding: 10px;
    border: none;
  }
  </style>
  