<template>
  <div>
    <TheSidebar />
    <TheNavbar />
    <NuxtPage />
  </div>
</template>
<script setup>
import { useProductStore } from './store/products';
const productStore = useProductStore();
productStore.fill();


</script>
<style>

</style>
