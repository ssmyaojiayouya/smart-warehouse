import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../../views/login.vue')
    },
    {
      path: '/threeD',
      name: 'threeD',
      component: () => import('../../views/3D-scene/threeD.vue')
    },
  ]
})
