import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] 
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  },
  actions: {
    addItem(product) {
      const existing_item = this.items.find(item => item.id === product.id)
      if (existing_item) {
        existing_item.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    }
  }
})
