import { defineStore } from "pinia";


const state = () => ({
  sidebarOpen: false,
  page: 'cart'
})

const getters = {
  getTitle(){
    if(this.page == 'cart'){
      return 'Items in your cart'
    } else if (this.page == 'checkout'){
      return 'Checkout'
    }
    }
  }
const actions = {
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  },
  setPage(page) {
    this.page= page
  }
}

export const useSidebarStore = defineStore('sidebarStore', {
  state,
  getters,
  actions
})