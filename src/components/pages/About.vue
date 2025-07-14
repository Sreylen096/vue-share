<template>
    <div class="grid grid-cols-2 gap-8 max-w-6xl mx-auto p-4 bg-white pt-[100px]">
        <div>
            <img :src="product.image" alt="" class="rounded-xl object-cover w-full h-[500px]" />
        </div>
        <div class="flex flex-col justify-between">
            <div>
                <h2 class="text-4xl font-semibold mb-2">{{ product.title }}</h2>
                <div class="flex items-center mb-2">
                    <span v-for="n in product.rating" :key="n" class="text-yellow-400 text-xl">★</span>
                    <span class="ml-2 text-gray-500">({{ product.reviews }})</span>
                </div>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <div class="flex justify-between items-center border-t border-dashed border-b py-4 mb-4">
                    <div>
                        <p class="text-gray-500">PRICE</p>
                        <p class="text-2xl font-semibold text-red-600">${{ product.price }}</p>
                    </div>
                    <div>
                        <p class="text-gray-500 mb-2">QUANTITY</p>
                        <div class="flex items-center">
                            <span class="px-3 py-1 border rounded">{{ quantity }}</span>
                            <button @click="addOne"
                                class="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
                        </div>
                    </div>
                </div>
                <p class="font-medium">Total: ${{ total }}</p>
            </div>
            <div class="flex gap-4 mt-4">
                <button class="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">BUY NOW</button>
                <button class="flex-1 border border-green-600 text-green-600 py-2 rounded hover:bg-green-50">ADD TO
                    CART</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const product = ref({
    title: 'Airpods Max',
    description: 'The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.',
    price: 459,
    rating: 5,
    reviews: 230,
    image: 'https://incredideals.co/cdn/shop/files/71igLteUzyL-1__AC_SL1500_jpg.webp?v=1733295643'
})

const quantity = ref(1)
const total = computed(() => product.value.price * quantity.value)
function addOne() {
    quantity.value++
}
</script>
