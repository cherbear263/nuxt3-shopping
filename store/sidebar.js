import { defineStore } from "pinia";


const state = () => ({
  sidebarOpen: false
})

const getters = {
}

const actions = {
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }
}

export const useSidebarStore = defineStore('sidebarStore', {
  state,
  getters,
  actions
})