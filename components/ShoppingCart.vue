<template>
  <div>
    <div v-if="!cartStore.isEmpty" class="">
      <div v-for="item in cartStore.items" :key="item.uuid" class=" rounded-sm p-3 bg-gray-100 my-3 shadow-sm">
        <div class="flex flex-row justify-evenly">
          <img class="rounded-full h-[80px] w-[80px] object-cover" :src="item.photoURL" />
          <div class="flex flex-col max-w-[100px]">
            <h5 class="font-serif text-gray-600">{{item.name}}</h5>
            <p class="font-light text-xs">SKU {{item.uuid}}</p>
          </div>
          <div class="flex flex-col mt-2">
            <div class="flex flex-row m-0 ">
              <button @click="cartStore.increment(item)"
                class=" px-2 first-letter:border-2 m-0 border-r-0 border-gray-200 bg-white">+</button>
              <span class=" px-2 first-letter:border-2 m-0 border-r-0 border-gray-200 bg-white">{{item.amount}}</span>
              <button @click="cartStore.decrement(item)"
                class="-py-1 pr-3 pl-2 m-0  bg-white -tracking-[0.25em]">--</button>
            </div>
          </div>

          <div class="flex flex-col mt-2">
            <p class="">${{item.price * item.amount}}</p>
          </div>
          <div class="mt-2 ml-3 text-gray-400" @click="cartStore.clearItem(item.name)">
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
          <span class="font-bold">${{cartStore.total}}</span>
        </div>
      </div>

      <button @click="sidebarStore.setPage('checkout')"
        class="w-full rounded-sm bg-indigo-500 text-white hover:bg-indigo-600 px-3 py-4 my-10">Checkout</button>

    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
import { useSidebarStore } from '~~/store/sidebar';
const cartStore = useCartStore();
const sidebarStore = useSidebarStore();

</script>