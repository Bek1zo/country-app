import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import router from './router/router.js'

import OpenLayersMap from "vue3-openlayers";

const app = createApp(App)


app.use(router)

app.use(OpenLayersMap);

app.mount('#app')