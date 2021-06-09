import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import 'amfe-flexible'
import useVant from '@/plugins/vant'
const app = createApp(App)
// 注册vant组件
useVant(app)
app.use(store).use(router).mount('#app')
