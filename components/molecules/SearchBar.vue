<template>
  <div
    :class="['search-bar', { 'search-bar--focused': isFocused }]"
    @focusin="handleFocus"
    @focusout="handleBlur"
  >
    <transition name="fade">
      <Icon
        v-if="!isFocused"
        :name="iconName"
        :size="iconSize"
        class="search-icon"
      />
    </transition>
    <input
      v-model="searchQuery"
      :placeholder="placeholder"
      @focus="isFocused = true"
      @blur="isFocused = false"
      class="search-input"
    />
    <button class="search-button" @click="$emit('search', searchQuery)">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Søg...",
  },
  iconName: {
    type: String,
    default: "ph-magnifying-glass",
  },
  iconSize: {
    type: String,
    default: "24px",
  },
  buttonLabel: {
    type: String,
    default: "Søg",
  },
});

const searchQuery = ref("");
const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<style scoped lang="scss">
.search-bar {
  margin: 0 20px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &--focused {
    border-color: #007bff;
  }

  .search-icon {
    margin-left: 8px;
  }

  .search-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 4px;
    font-size: 1rem;
  }

  .search-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 11px;
    cursor: pointer;
    margin-left: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
