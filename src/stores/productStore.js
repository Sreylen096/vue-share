import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false,
  }),
  actions: {
    async loadProducts() {
      this.isLoading = true
      this.error = null
      try {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products')
        this.products = res.data
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    }
  }
})
