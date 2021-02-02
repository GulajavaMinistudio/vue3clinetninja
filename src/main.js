import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Global CSS rule agar dipakai di setiap komponen
import './assets/styles.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
