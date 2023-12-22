import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/plug/router/routes.js'
import auth from '@/plug/router/auth.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(auth)

export default router
