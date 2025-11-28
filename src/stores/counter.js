/*eslint-disable*/
import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'
import { cities } from '../data/cities'
import axios from 'axios'
import { computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const state = reactive({
    lang: localStorage.getItem('lang') || 'en',
      })

  function initLang() {
    const saved = localStorage.getItem('lang')
    if (saved) {
      state.lang = saved
    }
  }

  function toggleLang() {
    state.lang = state.lang === 'en' ? 'ar' : 'en'
    localStorage.setItem('lang', state.lang)
  }

  function setLang(lang) {
    state.lang = lang
    localStorage.setItem('lang', lang)
  }

  
  return {
    state,
    toggleLang,
    initLang,
    
  }
})
