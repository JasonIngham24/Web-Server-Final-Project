<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import { useProductsStore } from '@/stores/products';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cart';

const productsStore = useProductsStore();
const cart = useCartStore();
function addToCart(productId: number) {
  cart.addToCart(productId);
}
</script>

<template>
  <h1 class="title is-1"> Product List </h1>
  <div class="grid is-col-min-10">
    <div v-for="product in productsStore.products" :key="product.id" class="box">
      <img :src="product.thumbnail" alt="Product Image" class="image is-128x128">
      <h4 class="title is-4">{{ product.title }}</h4>
      <h6 class="subtitle is-6">{{ product.category }} / {{ product.brand }}</h6>
      {{ product.description }}
      <button class="button is-primary is-small add-button" @click="() => addToCart(product.id)">Add to Cart</button>
      <div>
        <span class = "price">Price: ${{ product.price }}</span>
      </div>
    </div>
  </div>
  <SideBar :width="300">
    <ShoppingCart />
  </SideBar>
</template>

<style scoped>
.addbutton {
  float: right;
  margin-top: .5em;
}
</style>
