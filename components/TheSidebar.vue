<template>
  <aside v-if="sidebarStore.sidebarOpen">
    <div @click="sidebarStore.toggleSidebar" class="absolute transition ease inset-0 h-full w-full z-0 bg-black/40 ">
    </div>
    <div :class="sidebarStore.sidebarOpen ? 'right-0' : '-right-96'"
      class="transition-transform top-0 bottom-0 w-96 z-10 offcanvas offcanvas-end fixed flex flex-col max-w-full bg-white  bg-clip-padding shadow-sm outline-none duration-500 ease-in-out text-gray-700 border-none"
      tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header flex items-center justify-between p-4">
        <h5 class="offcanvas-title text-indigo-500 mb-0 leading-normal text-xl font-bold" id="offcanvasRightLabel">
          Items
          in your Cart</h5>
        <button type="button" @click="sidebarStore.toggleSidebar"
          class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 z-50 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas" aria-label="Close">X</button>
      </div>
      <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
        <ShoppingCart />
      </div>
    </div>
  </aside>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar.js'
const sidebarStore = useSidebarStore();

</script>