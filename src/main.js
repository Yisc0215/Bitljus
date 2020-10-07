import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LanguageCommon from '@/assets/js/languageCommon';

Vue.prototype.$languageCom = LanguageCommon;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
