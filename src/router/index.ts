import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UploadView from '../views/UploadView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: UploadView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
