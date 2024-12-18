<template>
  <nav class="bottom-nav">
    <NuxtLink to="/" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="pad-icon:hjem" label="Hjem" />
    </NuxtLink>
    <NuxtLink to="/404" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="ic:baseline-grid-view" label="Menu" />
    </NuxtLink>
    <NuxtLink to="/points" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="ion:tennisball" label="Padelpoints" />
    </NuxtLink>
    <NuxtLink to="/kurv" class="BottomNavLinks" active-class="active">
      <BottomNavItem icon="material-symbols:shopping-cart" label="Kurv" />
      <div class="cart-count">{{ cartCount }}</div>
    </NuxtLink>
  </nav>
</template>

<script setup>
import BottomNavItem from "@/components/molecules/BottomNavItem.vue";

const cartCount = ref(3);
</script>

<style scoped lang="scss">
.bottom-nav {
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  background-color: #f6f8fa; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;

  .BottomNavLinks {
    text-decoration: none;
    color: #000;
    font-family: $font-subheading;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 100;

    &.active {
      color: #ff4d4d;
      font-weight: 100;
    }
  }
}

.cart-count {
  background-color: #ff4d4d;
  color: #fff; 
  border-radius: 50%; 
  padding: 2px 6px; 
  font-size: 12px;
  position: absolute;
  top: 3px;
  right: 20px;
  z-index: 1; 
}

</style>
