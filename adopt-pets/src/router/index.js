import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/pets/:id',
    name: 'Pet',
    component: Pet
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
