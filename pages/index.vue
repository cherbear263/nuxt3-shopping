<template>
  <div class="px-2 mx-auto my-5 max-w-7xl sm:px-6 lg:px-8">
    <div class="inline-block w-full px-2 py-2 sm:w-1/2 lg:w-1/4 " v-for="(product, index) in products"
      :key="'product '+index">
      <img :src="product.photoURL" class="card-img-top" />
      <div class="my-3 ">
        <h5 class="font-serif text-lg font-semibold">
          {{product.name}}
        </h5>
        <p class="font-sans">
          {{product.description}}
        </p>

        <div class="d-grid">
          <button @click="cartStore.addItem( product)"
            class="w-full px-3 py-2 my-3 border-2 border-gray-800 rounded-sm shadow hover:bg-indigo-500 hover:text-white">Add
            to
            Cart</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { useProductStore } from '~~/store/products';
import { useCartStore } from '~~/store/cart';
const productStore = useProductStore();
const products = productStore.products;
const cartStore = useCartStore();


</script>
