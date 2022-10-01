<template>
  <div>
    <TheSidebar v-if="sidebarStore.sidebarOpen" />
    <TheNavbar />
    <NuxtPage />
  </div>
</template>
<script setup>
import { useProductStore } from './store/products';
import { useSidebarStore } from './store/sidebar';
const productStore = useProductStore();
productStore.fill();
const sidebarStore = useSidebarStore();

</script>
<style>

</style>
