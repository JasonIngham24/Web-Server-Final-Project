<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
</script>

<template>
  <h1 class="title is-1"> Product List </h1>
  <div class="grid is-col-min-10">
    <div v-for="product in productsStore.products" :key="product.id" class="box">
      <img :src="product.thumbnail" alt="Product Image" class="image is-128x128">
      <h4 class="title is-4">{{ product.title }}</h4>
      <h6 class="subtitle is-6">{{ product.category }} / {{ product.brand }}</h6>
      {{ product.description }}
      <button class="button is-primary is-small add-button">Add to Cart</button>
      <div>
        <span class = "price">Price: ${{ product.price }}</span>
      </div>
    </div>
  </div>
  <SideBar :width="300">
    <h2 class="title is-2"> Shopping Cart </h2>
    <p>Your cart is currently empty.</p>
  </SideBar>
</template>

<style scoped>
.addbutton {
  float: right;
  margin-top: .5em;
}
</style>
