<template>
  <div class="p-2">
    <div v-if="!cartStore.isEmpty" class="">
      <div class=" rounded-sm p-3 bg-gray-100 my-3 shadow-sm">
        <div class="flex flex-row">
          <div class="w-1/4">
            <img
              src="https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              class="w-full" />
          </div>
          <div class="flex flex-col ml-2">
            <h5 class="font-serif font-semibold text-gray-600">Product Name</h5>
            <p class="font-light text-xs">Product ID</p>
            <p>$20</p>
          </div>
          <div class="p-2 flex flex-row">
            <div class=" px-2 pt-3 border-gray-200 align-middle">1</div>
            <div class="flex flex-col">
              <button class="px-1 border-2 border-b-0 border-gray-200 bg-white">+</button>
              <button class="px-1 border-2 border-gray-200 bg-white">-</button>
            </div>

          </div>
          <div class="mt-4 ml-3 text-gray-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </div>

        </div>
      </div>
      <div class=" rounded-sm p-3 bg-gray-100 my-3 shadow-sm">
        <div class="flex flex-row">
          <div class="w-1/4">
            <img
              src="https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              class="w-full" />
          </div>
          <div class="flex flex-col ml-2">
            <h5 class="font-serif font-bold text-gray-600">Product Name</h5>
            <p class="font-light text-xs">Product ID</p>
            <p>$20</p>
          </div>
          <div class="p-2 flex flex-row">
            <div class=" px-2 pt-3 border-gray-200 align-middle">1</div>
            <div class="flex flex-col">
              <button class="px-1 border-2 border-b-0 border-gray-200">+</button>
              <button class="px-1 border-2 border-gray-200">-</button>
            </div>

          </div>
          <div class="mt-4 ml-3 text-gray-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </div>



        </div>
      </div>
      <div class="flex flex-col ml-5 mt-5 pt-5 border-t-2 border-gray-200">
        <div class="flex flex-row justify-between">
          <p>Subtotal</p>
          <span>$40</span>
        </div>
        <div class="flex flex-row justify-between">
          <p>Flat-rate shipping</p>
          <span>$15</span>
        </div>
        <div class="flex flex-row justify-between">
          <p class="font-bold">Total</p>
          <span class="font-bold">$55</span>
        </div>
      </div>

      <button class="w-full rounded-sm bg-indigo-500 text-white hover:bg-indigo-600 px-3 py-4 my-10">Checkout</button>

    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
const cartStore = useCartStore();

</script>