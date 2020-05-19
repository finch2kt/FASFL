import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import router from './router'
import store from './store/store'
// import nprogress from 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'
import vuetify from './plugins/vuetify'

Vue.filter('date', DateFilter)

Vue.use(Vuelidate)

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
