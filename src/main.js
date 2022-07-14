import { createApp } from 'vue'
import App from './App.vue'
import VuePrlx from 'vue-prlx'

const app = createApp(App);
app.use(VuePrlx);

app.mount("#app");
