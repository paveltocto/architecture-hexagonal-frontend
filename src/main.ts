import { createApp } from 'vue';
import './ui/styles/style.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import { globalPlugins } from '@/ui/plugins';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(globalPlugins);

app.mount('#app');
