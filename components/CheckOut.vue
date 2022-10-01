<template>
  <div>
    <div v-if="!cartStore.isEmpty" class="">

      <div>
        Billing info
      </div>
      <div>
        Shipping
      </div>
      <div>
        Card Details
      </div>

      <button class="w-full rounded-sm bg-indigo-500 text-white hover:bg-indigo-600 px-3 py-4 my-10">Pay
        ${{cartStore.total}}</button>

    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
<script setup>
import { useCartStore } from '~~/store/cart';
const cartStore = useCartStore();

</script>