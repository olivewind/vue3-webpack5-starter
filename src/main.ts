import { createApp } from 'vue';
import { installPlugins } from '@plugins';
import App from './app.vue';
import '@styles/global.less';

const app = createApp(App);

installPlugins(app);

app.mount('#app');
