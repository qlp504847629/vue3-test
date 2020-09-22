import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import { Button, Input, Menu, Layout, notification } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'


const app = createApp(App)
app.use(router)
.use(Menu)
.use(Layout)
.use(notification)
.use(Button)
.use(Input)
.mount('#app')
