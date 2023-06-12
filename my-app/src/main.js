import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVants from './plugins'




const app = createApp(App)
getVants(app)
app.use(store).use(router).mount('#app')
