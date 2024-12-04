<template>
  <div class="cart">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="cart-item-container"
    >
      <div class="cart-item">
        <div class="cart-item-left">
          <img
            :src="product.imageSrc"
            :alt="product.alt"
            class="product-image"
          />
        </div>

        <div class="cart-item-right">
          <p class="product-title">{{ product.title }}</p>
          <div class="product-details">
            <p class="product-stock">
              <Icon name="material-symbols:check-small" class="stock-icon" /> På
              lager
            </p>
            <p class="product-delivery">Levering 1 - 2 hverdage</p>
            <a href="#" class="product-info-link">Info</a>
          </div>
          <div class="product-info">
            <div class="quantity-selector">
              <select v-model="product.quantity" class="quantity-input">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <p class="product-price">
              {{ product.price }} kr.
              <span class="product-point-price">
                {{ product.price }}
                <Icon name="ion:tennisball" class="tennisIcon" />
              </span>
            </p>
          </div>
          <div class="extra-options">
            <p class="favorit">
              <Icon
                name="material-symbols:favorite-outline"
                class="stock-icon"
              />
              Gem som favorit
            </p>
            <button class="remove-button">Slet X</button>
          </div>
        </div>
      </div>
      <!-- Add <hr> only if it's not the last product -->
      <hr class="product-divider" />
    </div>
    <div class="cart-summary">
      <div class="cart-summary-right">
        <p class="cart-summary-title">Total</p>
        <p class="cart-summary-title">Levering</p>
        <p class="cart-summary-title">Fuldfør købet og optjen</p>
        <p class="cart-summary-title">Total inkl. levering</p>
      </div>
      <div class="cart-summary-left">
        <p class="cart-summary-price">{{ totalPrice }} kr.</p>
        <p class="cart-summary-price">0</p>
        <p class="cart-summary-price">
          {{ totalPrice }} <Icon name="ion:tennisball" class="tennisIcon" />
        </p>
        <p class="cart-summary-price">{{ totalPrice }} kr.</p>
      </div>
    </div>
    <NuxtLink to="/" class="checkout-button"
      ><CallToAction
        label="Gå til kassen"
        class="checkout-button"
        icon="material-symbols:arrow-forward-rounded"
    /></NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import boldeImage from "@/assets/images/bolde.png";

const products = ref([
  {
    imageSrc: boldeImage,
    alt: "Product Image",
    title: "Siux Ultra Pro",
    price: 2500,
    quantity: 1, // Default quantity
  },
  {
    imageSrc: boldeImage,
    alt: "Product Image 2",
    title: "Siux Pro Ultra Light",
    price: 2400,
    quantity: 1, // Default quantity
  },
  {
    imageSrc: boldeImage,
    alt: "Product Image 3",
    title: "Babolat Court Bolde",
    price: 79,
    quantity: 1, // Default quantity
  },
]);

const totalPrice = ref(
  products.value.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  ),
);
const quantity = ref(1);
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between cart items */
}

.cart-item {
  display: flex;
  gap: 10px;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;

  .cart-item-left {
    flex: 0 0 80px;
  }

  .product-image {
    display: flex;
    margin: 0 auto;
    width: 75%;
    height: auto;
    object-fit: cover;
    padding: 10px;
  }

  .cart-item-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-title {
    font-size: 1.1rem;
    font-weight: 800;
    color: #000;
    margin-bottom: 10px;
    font-family: Jakarta;
  }

  .product-info {
    display: flex;
    justify-content: space-between;
    gap: 15px; /* Add space between each element */
    margin-bottom: 10px;

    .product-price {
      display: flex;
      flex-direction: column;
      font-size: 0.875rem;
      color: #000;
      font-weight: 800;
      font-family: Jakarta;
    }
    .tennisIcon {
      font-size: 0.875rem;
      color: #ff4d4d;
      font-weight: 800;
      font-family: Jakarta;
    }

    .quantity-selector {
      display: flex;
      align-items: center;
      gap: 5px;

      .quantity-button {
        background: #fff;
        border: none;
        border-radius: 4px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
      }

      .quantity-input {
        width: 40px;
        height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        background-color: #fff;
      }
    }
  }
  .product-details {
    display: flex;
    flex-direction: row; /* Arrange items side by side */
    align-items: center; /* Vertically align items */
    gap: 15px; /* Add space between each element */
    margin-bottom: 10px;

    .product-stock {
      font-size: 0.675rem;
      color: #17a700;
      display: flex;
      align-items: center;

      .stock-icon {
        margin-right: 5px;
        font-size: 1rem;
      }
    }
    .product-delivery {
      font-size: 0.675rem;
      color: #666;
    }

    .product-info-link {
      font-size: 0.675rem;
      color: #007bff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .extra-options {
    display: flex;
    justify-content: space-between;
    gap: 15px; /* Add space between each element */
    margin-bottom: 10px;

    .remove-button {
      background: none;
      border: none;
      color: #000;
      display: flex;
      align-items: center;
      font-size: 0.675rem;
      cursor: pointer;
      font-family: Jakarta;
    }
    .product-stock {
      font-size: 0.675rem;
      color: #17a700;
      display: flex;
      align-items: center;

      .stock-icon {
        margin-right: 5px;
        font-size: 1rem;
      }
    }
    .favorit {
      font-size: 0.675rem;
      color: #000;
      display: flex;
      align-items: center;
      font-family: Jakarta;

      .stock-icon {
        margin-right: 5px;
        font-size: 1rem;
      }
    }
  }
}

.product-divider {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.2); /* Light gray line */
  margin: 15px 0; /* Add spacing around the line */
  width: 90%;
  margin: 0 auto;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  font-family: Jakarta;
  font-weight: 800;
  letter-spacing: 1px;

  .tennisIcon {
    font-size: 0.875rem;
    color: #ff4d4d;
  }
}

.checkout-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

:deep(button) {
  display: flex;
  flex-direction: row-reverse;
}
</style>
