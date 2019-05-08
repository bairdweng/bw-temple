import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let i = 0



// let u += 1;
new Vue(
  {
  
    render: h => h(App),
}
).$mount('#app')
