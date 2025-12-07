<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import imgImage1 from '../../assets/why/1.png'
import imgImage2 from '../../assets/why/2.png'
import imgImage3 from '../../assets/why/3.png'
import imgImage4 from '../../assets/why/4.png'
import imgImage5 from '../../assets/why/5.png'

const { t } = useI18n()

const items = computed(() => [
  {
    img: imgImage1,
    title: t('why.items.integration.title'),
    text: t('why.items.integration.desc')
  },
  {
    img: imgImage2,
    title: t('why.items.tracking.title'),
    text: t('why.items.tracking.desc')
  },
  {
    img: imgImage3,
    title: t('why.items.prices.title'),
    text: t('why.items.prices.desc')
  },
  {
    img: imgImage4,
    title: t('why.items.ai.title'),
    text: t('why.items.ai.desc')
  },
  {
    img: imgImage5,
    title: t('why.items.comparison.title'),
    text: t('why.items.comparison.desc')
  }
])
</script>

<template>
  <section class="w-full py-24 bg-[#050814]">
    <h2 class="text-center text-white text-3xl font-bold mb-16">
      {{ t('why.title') }}
    </h2>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-4">
      <div v-for="(item, index) in items" :key="index"
        class="group bg-[#0F1217] rounded-2xl px-2 pt-2 pb-4 flex flex-col items-center border border-white/5 transition-all duration-300">
        <!-- IMAGE STACK -->
        <div
          class="relative w-full flex justify-center mb-6 h-40 rounded-xl overflow-hidden transition-all duration-300 bg-[#161B22] group-hover:bg-[#1E3A8A]">
          <!-- LEFT shadow image -->
          <img :src="item.img" :alt="item.title"
            class="absolute top-[52px] left-6 w-[58%] h-full opacity-40 bottom-0 rounded-xl object-cover blur-[1px] transition-all duration-300 group-hover:top-[40px] group-hover:left-5 group-hover:rotate-[-6deg] group-hover:opacity-60"
            loading="lazy" />

          <!-- RIGHT shadow image -->
          <img :src="item.img" :alt="item.title"
            class="absolute top-[52px] right-6 w-[58%] h-full opacity-40 bottom-0 rounded-xl object-cover blur-[1px] transition-all duration-300 group-hover:top-[40px] group-hover:right-5 group-hover:rotate-[8deg] group-hover:opacity-60"
            loading="lazy" />

          <!-- MAIN image -->
          <img :src="item.img" :alt="item.title"
            class="relative top-[32px] w-[62%] rounded-xl object-cover shadow-xl transition-all duration-300 group-hover:top-[22px]"
            loading="lazy" />
        </div>

        <!-- TEXT -->
        <h3 class="text-white text-lg font-semibold text-center mb-2">
          {{ item.title }}
        </h3>

        <p class="text-white/60 text-sm text-center leading-6">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>
