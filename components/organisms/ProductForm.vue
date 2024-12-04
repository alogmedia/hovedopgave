<template>
  <div class="productPrice-wrapper">
    <div class="row">
      <div class="column">
        <div class="productPrice"><Text :content="title" type="main" /></div>
      </div>
      <div class="column">
        <div class="productPrice">
          <Text :content="subtitle" type="subheading" />
          <Icon name="ion:tennisball" class="tennisBall"></Icon>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="productPoints">
        <p>
          Optjent point: 250
          <Icon name="ion:tennisball" class="pointTennisBall"></Icon>
        </p>
      </div>
    </div>
    <div class="AddToCart">
      <div class="amount">
        <Input placeholder="1"></Input>
      </div>
      <div class="addButton">
        <NuxtLink to="/kurv"><Button label="Læg i kurv" /></NuxtLink>
      </div>
    </div>
    <div class="favorit">
      <button label="Favorit" class="favoritButton">
        Favorit
        <Icon
          name="material-symbols:favorite-outline-rounded"
          class="favoritIcon"
        ></Icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Text from "@/components/atoms/Text.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.productPrice-wrapper {
  margin: 20px;
  background-color: #fff;
  height: 214px;
  text-transform: lowercase;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1); // Adds a modern shadow for depth

  .productPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .productPoints {
    padding: 5px 20px;
    text-transform: capitalize;
    font-family: Jakarta;
    font-size: 0.775rem;
    font-weight: 800;

    .pointTennisBall {
      color: #e84b4a; // Custom red color for emphasis
      font-size: 0.675rem;
    }
  }

  .AddToCart {
    display: flex;
    align-items: center;
    gap: 10px; // Add spacing between the input and button
    padding: 20px;

    .amount {
      flex: 0 0 50px; // Fixed width for the input field
      border: 1px solid #000;
      text-align: center; // Centers the text inside the input
      height: 40px; // Ensure consistent height with the button
      display: flex;
      align-items: center;
      justify-content: center;

      Input {
        font-weight: 800;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 1);
        border: none; // Remove inner input border
        width: 100%; // Take full width of container
        text-align: center; // Center the number in the input
      }
    }

    .addButton {
      flex: 1; // Allows the button to take the remaining space
      display: flex;
      border: 1px solid #007bff;

      a {
        text-decoration: none;
        width: 100%;
      }
      Button {
        width: 100%; // Ensures the button spans the full width
        height: 40px; // Matches input height
        background-color: #007bff; // Customize button color
        color: #fff; // White text for contrast
        font-weight: bold;
        text-align: center;
        border: none;
      }
    }
  }
  .favorit {
    display: flex;
    width: 100%;

    .favoritButton {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      height: 42px;
      width: 100%;
      margin-left: 20px;
      margin-right: 20px;
      border: none;
      font-family: Jakarta;
      font-weight: 800;
      font-size: 1.1rem;
    }
  }

  .text.main {
    font-family: Jakarta;
    font-size: 1.5rem;
    font-weight: 800;
    color: #17a700; // Custom green color for emphasis
  }

  .tennisBall {
    color: #e84b4a; // Custom red color for emphasis
    font-size: 0.875rem;
    margin-top: 3px;
  }

  .text.subheading {
    font-size: 0.875rem;
    color: #000;
    letter-spacing: 2px;
    font-weight: 800;
    font-family: Jakarta;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
}
</style>
