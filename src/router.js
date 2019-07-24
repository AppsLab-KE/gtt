import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFoundComponent from './views/errors/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
},
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: () => import('./views/About.vue') },
    { path: '/contact', name: 'contact', component: () => import('./views/Contact.vue') },
    // ? last route
    {
        path: 'index.html', // or '*' this is for PWA
        beforeEnter: (to, from, next) => {
          next('/')
        }
    },
    { path: '*', component: NotFoundComponent }
  ]
})
