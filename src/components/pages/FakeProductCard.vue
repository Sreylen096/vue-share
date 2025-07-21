<template>
  <div class="product-card rounded-2xl border !border-[var(--color-gray-200)] p-4 shadow text-center">
    <img
      :src="product.images[0]"
      :alt="product.title"
      class="w-full h-[250px] mb-2 rounded object-cover"
    />
    <p class="font-bold text-blue-600 mb-3">${{ product.price }}</p>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <h3 class="font-semibold text-lg mb-1">{{ product.title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
