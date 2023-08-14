import './style.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import pinia from './store';

const app = createApp(App);
app.use(router);
app.use(pinia).mount('#app');
