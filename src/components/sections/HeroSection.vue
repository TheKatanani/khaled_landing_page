<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section
    id="home"
    class="pt-[130px] pb-[70px] md:pt-[160px] md:pb-[100px] bg-gradient-to-b from-[#0A0F17] via-[#0B0F18] to-[#0E121A] text-white text-center"
  >
    <div class="max-w-4xl mx-auto px-4">
      <!-- TITLE -->
      <h1
        class="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-bold leading-[1.4] mb-4 tracking-[-0.3px]"
      >
        {{ t('landing.hero.title') }}
      </h1>

      <!-- SUBTITLE -->
      <p
        class="text-[#C8CBD0] text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[28px] md:leading-[30px] max-w-2xl mx-auto mb-8 px-2"
      >
        {{ t('landing.hero.subtitle') }}
      </p>

      <!-- CTA BUTTONS -->
      <div class="flex items-center justify-center gap-3 mt-6 mb-12">
        <button
          class="px-7 sm:px-8 h-[44px] sm:h-[46px] rounded-full bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white text-sm sm:text-[15px] font-semibold shadow-md hover:opacity-90 transition"
        >
          {{ t('landing.hero.primaryCta') }}
        </button>

        <button
          class="px-7 sm:px-8 h-[44px] sm:h-[46px] rounded-full border border-white/20 text-white/90 text-sm sm:text-[15px] hover:bg-white/10 transition"
        >
          {{ t('landing.hero.secondaryCta') }}
        </button>
      </div>

      <!-- PARTNERS MARQUEE -->
      <div class="relative overflow-hidden py-4 sm:py-6 partners-slider">
        <div class="fade-left"></div>
        <div class="fade-right"></div>

        <div class="slider-track">
          <div class="slide-group">
            <img src="../../assets/partners/smsa.svg" class="logo" />
            <img src="../../assets/partners/woo.svg" class="logo" />
            <img src="../../assets/partners/zd.svg" class="logo" />
            <img src="../../assets/partners/aramex.svg" class="logo" />
            <img src="../../assets/partners/salla.svg" class="logo" />
          </div>

          <div class="slide-group">
            <img src="../../assets/partners/smsa.svg" class="logo" />
            <img src="../../assets/partners/woo.svg" class="logo" />
            <img src="../../assets/partners/zd.svg" class="logo" />
            <img src="../../assets/partners/aramex.svg" class="logo" />
            <img src="../../assets/partners/salla.svg" class="logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
