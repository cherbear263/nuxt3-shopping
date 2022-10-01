import { defineStore } from "pinia";


const state = () => ({
  items: [],
  shipping: 15
  
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
  isEmpty : (state) => state.count === 0,

  total() {
    let tot=0;
    if(this.items.length) {
      for (const item of this.items) {
        let subtot = item.amount * item.price
        tot = tot + subtot
    } return tot + this.shipping
  }
    else {
      return 0
    }
  }
  
}

const actions = {
  // this may not be the best approach if you need to add metadata to the item (e.g. size)
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
  },
  clearItem(itemName){
    this.items = this.items.filter(item => item.name != itemName)
  },
  increment(item){
    item.amount += 1;

  },
  decrement(item){
    if(item.amount >= 1){
      item.amount -=1
    } else {
      item.amount = 0;
    }
    

  }

}

export const useCartStore = defineStore('useCartStore', {
  state,
  getters,
  actions
})