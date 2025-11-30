/*eslint-disable*/
/*eslint-disable*/

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import './assets/main.scss'

import { createI18nInstance } from './i18n'
import { useCounterStore } from './stores/counter'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const counterStore = useCounterStore(pinia)

// إنشاء i18n بناءً على اللغة المخزّنة
const i18n = createI18nInstance(counterStore.state.lang)
app.use(i18n)
app.use(router)

// تحديث اتجاه الصفحة ولغة الـ <html> عند تغيير اللغة
watch(
  () => counterStore.state.lang,
  (newLocale) => {
    i18n.global.locale.value = newLocale
    document.documentElement.setAttribute('lang', newLocale)
    document.documentElement.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr')
  },
  { immediate: true }
)

// تقدر تحذف هذا الديركتيف لو مش محتاجه
app.directive('ltr', {
  mounted(el) {
    el.setAttribute('dir', 'ltr')
  }
})

app.mount('#app')

/* 
// this is the old code

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'


import './assets/main.scss'


const app = createApp(App);


app.directive('ltr', {
  mounted(el) {
    el.setAttribute('dir', 'ltr');
  },
});


app.use(createPinia());
app.use(router);






app.mount('#app');
*/