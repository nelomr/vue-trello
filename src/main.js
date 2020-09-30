import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEdit,
  faTrashAlt,
  faPlus
)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
