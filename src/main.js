import {
  createApp
} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import AOS from 'aos';
import "aos/dist/aos.css";

new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  router,
  render: h => h(App)
})