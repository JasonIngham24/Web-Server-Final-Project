import {defineStore } from 'pinia';
import type { product } from '../types';
import { ref } from 'vue';


export const useProductsStore = defineStore('products',() => {
  const product = ref<product[]>([])
})
