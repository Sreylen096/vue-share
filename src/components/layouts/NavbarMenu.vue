<template>
    <div class="bg-slate-700">
        <header class=" text-white px-[120px]">
            <div class="container mx-auto flex justify-between items-center p-4">
                <div class="text-lg !font-bold">
                    Vue
                </div>
                <nav class="space-x-12 flex items-center">
                    <RouterLink to="/" class="text-white font-semibold hover:text-gray-300">Home</RouterLink>
                    <RouterLink to="/about" class="text-white font-semibold hover:text-gray-300">About</RouterLink>
                    <RouterLink to="/product" class="text-white font-semibold hover:text-gray-300">Product</RouterLink>
                    <CartIcon />
                </nav>

            </div>
        </header>
    </div>
</template>

<script setup>
import CartIcon from '../pages/CartIcon.vue';
</script>
