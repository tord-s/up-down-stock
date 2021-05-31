import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from "vue-chartkick";

createApp(App).use(router).use(VueChartkick).mount('#app')
