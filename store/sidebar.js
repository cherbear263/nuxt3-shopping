import { defineStore } from "pinia";


const state = () => ({
  sidebarOpen: true
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