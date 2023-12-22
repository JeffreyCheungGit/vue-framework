export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]
