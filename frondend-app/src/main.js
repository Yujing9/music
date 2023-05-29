import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getVantPlugins } from './plugins/index'
import axios from "axios";
var app = createApp(App)
app.use(store)
getVantPlugins(app)

app.use(router).mount('#app')
