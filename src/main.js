// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCiTmad4SGrM9dgqAOvDYWkTBHmWEPFiNk',
  authDomain: 'tossed-coin.firebaseapp.com',
  databaseURL: 'https://tossed-coin.firebaseio.com',
  projectId: 'tossed-coin',
  storageBucket: 'tossed-coin.appspot.com',
  messagingSenderId: '793933025733',
  appId: '1:793933025733:web:b377f219e10646621e3bac',
  measurementId: 'G-ZKSH0J2ZC4'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
