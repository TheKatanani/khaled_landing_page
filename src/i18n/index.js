/* eslint-disable */
import { createI18n } from 'vue-i18n'
import ar from './ar.json'
import en from './en.json'

export function createI18nInstance(initialLocale = 'ar') {
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: initialLocale,
    fallbackLocale: 'en',
    messages: {
      ar,
      en
    }
  })
}
