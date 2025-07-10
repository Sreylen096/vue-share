<template>
  <div id="app">
    <NavbarMenu />
    <RouterView />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import NavbarMenu from './components/layouts/NavbarMenu.vue';
import Footer from './components/layouts/Footer.vue';
import { RouterView } from 'vue-router';
</script>

