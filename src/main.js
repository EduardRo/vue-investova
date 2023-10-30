import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import VeeValidatePlugin from './components/general/includes/validation'
library.add(faBars);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(VeeValidatePlugin);
app.mount('#app')
//createApp(App).mount('#app');
