import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import ECharts from 'vue-echarts';
import App from './App.vue';
import router from './router';
import 'echarts';

const app = createApp(App);
const pinia = createPinia();
pinia.use(
  createPersistedState({
    // 所有 Store 都开启持久化存储
    auto: true,
  }),
);
app.use(pinia);
app.use(router);
app.component('v-chart', ECharts);
app.mount('#app');
