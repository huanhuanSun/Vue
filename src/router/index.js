import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history', // 路由中不带 #
    routes
})
export default  router

