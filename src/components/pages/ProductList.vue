<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
    <ProductCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const products = [
  {
    id: 1,
    name: 'Awesome T-shirt',
    price: 29.99,
    description: 'Comfortable cotton T-shirt with modern fit.',
    image: 'https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_-Summit_Blue-1.png?v=1707830032'
  },
  {
    id: 2,
    name: 'Stylish Hat',
    price: 19.99,
    description: 'Keep cool and stylish with this hat.',
    image: 'https://cdn.shopify.com/s/files/1/0083/6475/2943/files/SP942-IVORY_WEB_600x_80e90110-a66c-4ec6-ad0d-5e5c92d5b0a8.webp?v=1653538434'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 49.99,
    description: 'Lightweight and durable running shoes.',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09517.jpg?auto=webp&quality=75&width=1024'
  },
  {
    id: 4,
    name: 'Casual Jeans',
    price: 39.99,
    description: 'Comfortable denim jeans for everyday wear.',
    image: 'https://mpir.halarastatic.com/upload/online/pu/2025/5/6/17/58/096270736485-750x.jpg'
  },
  {
    id: 5,
    name: 'Elegant Dress',
    price: 59.99,
    description: 'Perfect for special occasions.',
    image: 'https://m.media-amazon.com/images/I/51RqQbkAgWL._AC_SL1500_.jpg'
  },
  {
    id: 6,
    name: 'Leather Belt',
    price: 14.99,
    description: 'High-quality leather belt.',
    image: 'https://assets.ajio.com/medias/sys_master/root/20230802/BT6E/64ca82c9eebac147fca20761/-473Wx593H-466411871-black-MODEL.jpg'
  }
]

</script>
