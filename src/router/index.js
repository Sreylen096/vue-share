import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import("@/views/HomeView.vue")
const AboutView = () => import("@/views/pages/AboutView.vue")
const ProductListView = () => import("@/views/pages/ProductListView.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
     {
      path: '/product',
      name: 'product',
      component: ProductListView
    }
  ]
})

export default router
