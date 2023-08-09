import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Button from "primevue/button"
import Toast from 'primevue/toast';

const pinia = createPinia()
const app = createApp(App)

app.component('IconUI', Icon)
app.component('ButtonUI', Button)
app.component('ToastUI', Toast)

app.component(
  'HeaderMain',
  defineAsyncComponent(() => import('@/components/header/HeaderMain.vue'))
)

app.component(
  'HeaderMobile',
  defineAsyncComponent(() => import('@/components/header/HeaderMobile.vue'))
)

app.component(
  'HeaderToggle',
  defineAsyncComponent(() => import('@/components/header/HeaderToggle.vue'))
)

app.component(
  'FooterMain',
  defineAsyncComponent(() => import('@/components/FooterMain.vue'))
)

app.component(
  'LoaderApp',
  defineAsyncComponent(() => import('@/components/LoaderApp.vue'))
)

app.use(router)
app.use(pinia)
app.use(PrimeVue, { inputStyle: "filled" })
app.use(ToastService)

app.mount('#app')
