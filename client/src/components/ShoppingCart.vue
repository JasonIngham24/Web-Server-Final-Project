<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();
</script>

<template>
  <div>
    <h1 class="title is-1">Shopping Cart</h1>
    <p v-if="cart.items.length === 0">Your cart is empty.</p>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.product.id" class = "cart-item">
        <img :src="item.product.thumbnail" alt="Product Image" class="image is-64x64">
        {{ item.product.title }} - ${{ item.product.price }} x {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
