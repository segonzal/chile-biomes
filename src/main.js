import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import Visualization from '@/views/Visualization.vue'

import 'material-design-lite/material.min.js'
import 'material-design-lite/material.min.css'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: App,
        main: Home
      }
    },
    {
      path: '/v/:id',
      name: 'visualization',
      components: {
        default: App,
        main: Visualization
      }
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h (App),
  data: {
    page_title: 'Biomes of Chile',
    pages: [
      {name: 'Average Temperatres', id: 'tesavg'},
      {name: 'Extreme Temperatres', id: 'tesext'},
      {name: 'Precipitations', id: 'precipitations'},
      {name: 'Stations', id: 'stations'},
    ]
  }
})
