<template>
    <div class="search-bar">
      <SearchIcon class="search-icon" />
      <Input :placeholder="placeholder" v-model="searchQuery" />
      <SearchButton :label="buttonLabel" @click="onSearch" />
    </div>
  </template>
  
  <script>
  import Input from '@/components/atoms/Input.vue';
  import SearchButton from '@/components/atoms/SearchButton.vue';
  import SearchIcon from '@/components/atoms/SearchIcon.vue';
  
  export default {
    components: {
      Input,
      SearchButton,
      SearchIcon
    },
    props: {
      placeholder: {
        type: String,
        default: 'Søg...'
      },
      buttonLabel: {
        type: String,
        default: 'SØG'
      }
    },
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      onSearch() {
        // Emit search event with the query
        this.$emit('search', this.searchQuery);
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%; // Ensure it fills the container width
    border: 1px solid #ccc;
    box-sizing: border-box;
    background: #FFF;
    margin-top: 20px;
  }
  
  .search-icon {
    margin-left: 10px;
  }
  </style>
  