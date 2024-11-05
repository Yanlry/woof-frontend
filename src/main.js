import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assure-toi que le routeur est importé

const app = createApp(App);

app.use(router); // Assure-toi que le routeur est utilisé ici
app.mount('#app');
