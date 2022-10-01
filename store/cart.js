import { defineStore } from "pinia";


const state = () => ({
  items: []
  
})

const getters = {
  count(){
    let count = 0;
    if (this.items.length){
      for(const item of this.items){
        count = count + item.amount
      }
      }
    return count;

  },
  isEmpty : (state) => state.count === 0
  
}

const actions = {
  addItem(item){
    let exists = false;
    for (const cartItem of this.items) {
      if (cartItem.uuid === item.uuid) {
        cartItem.amount = cartItem.amount + 1;
        exists = true;
        break
      }
    }
    if (!exists) {
      this.items.push({
         ...item,
        amount: 1,
      })
    }
  }

}

export const useCartStore = defineStore('useCartStore', {
  state,
  getters,
  actions
})