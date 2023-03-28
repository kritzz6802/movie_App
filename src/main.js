import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(fas);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');