<template>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="toggle" type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/"><img class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
              <img class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink to="/" class=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
                aria-current="page">Home
              </NuxtLink>

              <a @click="sidebarStore.toggleSidebar"
                class=" text-gray-300 hover:bg-indigo-500  px-3 py-2 rounded-md text-sm font-medium">Shopping
                Cart</a>

            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" @click="sidebarStore.toggleSidebar"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Shopping Cart</span>

            <!-- Heroicon name: shopping bag -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 z-50">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <div class="cart-count absolute -top-3 -right-2 w-6 h-6 rounded-full bg-indigo-500"><span
                class="text-xs text-white ">{{cartStore.count}}</span></div>

          </button>

          <!-- Profile dropdown -->
          <!-- <div class="relative ml-3">
            <div>
              <button type="button" @click="showProfile=!showProfile"
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
              </button>
            </div>

  
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <!-- <div v-if="showProfile"
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 active:ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

            <a href="#" class="block px-4 py-2 text-sm active:ring-black text-gray-700" role="menuitem" tabindex="-1"
              id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm active:ring-black text-gray-700" role="menuitem" tabindex="-1"
              id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm active:ring-black text-gray-700" role="menuitem" tabindex="-1"
              id="user-menu-item-2">Sign out</a>
          </div>
        </div> -->
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenu" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink to="/" href="#"
          class="active:bg-gray-900 bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Home</NuxtLink>

        <a href="#"
          class="text-gray-300 active:bg-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shopping
          Cart</a>


      </div>
    </div>

  </nav>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar.js'
import { useCartStore } from '~~/store/cart';
const showMenu = false;
const showProfile = false;
const sidebarStore = useSidebarStore();
const cartStore = useCartStore();
const count = cartStore.count

const toggle = () => {
  this.showMenu = !this.showMenu;
}

</script>

<style>

</style>