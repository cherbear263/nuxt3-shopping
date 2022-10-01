import { defineStore } from "pinia";


const state = () => ({
  products: []
})

const getters = {
  getProducts: state => state.products,
}

const actions = {
  async fill(){
    this.products = (await import("@/data/products.json")).default
  }
}

export const useProductStore = defineStore('productStore', {
  state,
  getters,
  actions
})