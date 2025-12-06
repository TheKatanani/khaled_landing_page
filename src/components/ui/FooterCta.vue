<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
</script>

<template>
  <section
    :dir="dir"
    class="relative w-full py-8 flex flex-col items-center text-center text-white overflow-hidden"
  >
    <!-- BACKGROUND SHAPE (PNG from Figma) -->
    <img
      src="../../assets/footer/footer-bg.png"
      class="absolute inset-0 w-full h-full z-10 object-cover pointer-events-none opacity-90"
    />

    <!-- CONTENT WRAPPER -->
    <div class="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
      <h2 class="text-2xl md:text-3xl font-bold">
        {{ t('landing.footer.footerCta.title') }}
      </h2>

      <p class="text-sm md:text-base opacity-80 leading-relaxed">
        {{ t('landing.footer.footerCta.subtitle') }}
      </p>

      <button
        class="mt-4 bg-[#3E68FF] hover:bg-[#2f52c7] transition text-white font-semibold px-8 py-3 rounded-full"
      >
        {{ t('landing.footer.footerCta.cta') }}
      </button>
    </div>
  </section>
</template>
