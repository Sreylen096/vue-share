<template>
  <div class="product-card rounded-2xl border !border-[var(--color-gray-200)] p-4 shadow text-center">
    <img :src="product.image" :alt="product.name" class="w-full h-[250px] mb-2 rounded object-cover" />
    <h3 class="font-semibold text-lg mb-1">{{ product.name }}</h3>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <p class="font-bold text-blue-600 mb-3">${{ product.price }}</p>
    <button 
      @click="cart.addItem(product)" 
      class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cardStore';
defineProps({
  product: Object
})
const cart = useCartStore()
</script>
