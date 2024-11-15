<template>
    <button class="search-button" @click="onClick">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'SØG'
      }
    },
    emits: ['click'],
    methods: {
      onClick() {
        this.$emit('click');
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .search-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  