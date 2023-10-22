import { createApp } from 'vue';
import router from '@/router';
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia';
import 'element-plus/dist/index.css'
import '@/style.less';
import '@/assets/style/theme.less';


import App from './App.vue'
const pinia = createPinia();
const app = createApp(App);

app.use(router).use(ElementPlus).use(pinia).mount('#app');
