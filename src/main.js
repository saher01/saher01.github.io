import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App),
  components: {
    
  }
});


