import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store/store'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'
import About from './views/About.vue'
import Account from './views/Myaccount.vue'
import Home from './views/Home.vue'
import ModuleShow from './views/ModuleShow.vue'
import Login from './components/LoginCard.vue'
import Dashboard from './components/Dashboard.vue'

// Components from Vue Mastery Turorials Videos
import OGtable from './VuetifyComponents/OGtable.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/OGtable',
      name: 'OGtable',
      component: OGtable
    },
    {
      path: '/VuetifyForm',
      name: 'VuetifyForm',
      component: () => import('./VuetifyComponents/VuetifyL6.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login-us',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/Myaccount',
      name: 'account',
      component: Account,
      props: true
    },
    {
      path: '/module/:id',
      name: 'module-show',
      component: ModuleShow,
      props: true,
      // eslint-disable-next-line space-before-function-paren
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('module/fetchModule', routeTo.params.id)
          .then(module => {
            routeTo.params.module = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              next({ name: '404', params: { reource: 'module' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
