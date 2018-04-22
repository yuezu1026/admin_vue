// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-responsive.min.css'
import './assets/css/font-awesome.css'
import './assets/css/style.css'


//import 'http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	components: {
		App
  },
  template: '<App/>'
})
