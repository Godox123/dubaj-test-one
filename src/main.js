import { createApp } from 'vue';
import App from './App.vue';

// NORMALIZE
import 'normalize.css';

// MAIN STYLES
import '@/assets/scss/main.scss';

// ROUTER
import router from '@/routes';

const app = createApp(App);
app.use(router);
app.mount('#app');
