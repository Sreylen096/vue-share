<template>
    <div class="bg-slate-700">
        <header class=" text-white px-[120px]">
            <div class="container mx-auto flex justify-between items-center p-4">
                <div class="text-lg !font-bold">
                    Vue
                </div>
                <nav class="space-x-12 flex items-center">
                    <RouterLink to="/" class="text-white font-semibold hover:text-gray-300">{{$t('navbar.home')}}</RouterLink>
                    <RouterLink to="/about" class="text-white font-semibold hover:text-gray-300">{{$t('navbar.about')}}</RouterLink>
                    <RouterLink to="/product" class="text-white font-semibold hover:text-gray-300">{{$t('navbar.cart')}}</RouterLink>
                    <CartIcon />
                    <select v-model="locale" @change="changeLang"
                        class="bg-slate-600 text-white border border-gray-500 px-2 py-1 rounded focus:outline-none focus:ring">
                        <option value="en">English</option>
                        <option value="km">ភាសាខ្មែរ</option>
                    </select>
                </nav>
            </div>
        </header>
    </div>
</template>

<script setup>
import CartIcon from '../pages/CartIcon.vue';
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { locale } = useI18n()
const selectedLang = ref(locale.value)

function changeLang() {
    locale.value = selectedLang.value
    localStorage.setItem('lang', selectedLang.value)
}
watch(locale, (val) => {
    selectedLang.value = val
})
</script>
