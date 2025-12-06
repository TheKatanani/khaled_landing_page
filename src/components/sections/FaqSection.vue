<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'

const { t, tm, locale } = useI18n()

// FIXED: returns array, not string
const faqItems = computed(() => tm('landing.faq.items'))

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))

const openId = ref<number | null>(null)
function toggle(idx: number) {
  openId.value = openId.value === idx ? null : idx
}
</script>

<template>
  <section :dir="dir" class="py-20">
    <h2 class="text-center text-3xl font-bold text-white mb-10">
      {{ t('landing.faq.title') }}
    </h2>

    <div class="max-w-3xl mx-auto flex flex-col gap-4">
      <div
        v-for="(item, i) in faqItems"
        :key="i"
        class="bg-[#161b22] text-white p-5 rounded-xl cursor-pointer"
        @click="toggle(i)"
      >
        <div class="flex justify-between items-center">
          <p class="font-semibold">{{ item.q }}</p>
          <span class="text-xl flex items-center">
            <img
              src="../../assets/icons/x+.svg"
              alt="toggle"
              :class="openId === i ? '' : 'rotate-45'"
              class="w-5 h-5 transition-transform duration-200"
            />
          </span>
        </div>

        <transition>
          <p v-if="openId === i" class="mt-3 text-sm opacity-80 leading-6">
            {{ item.a }}
          </p>
        </transition>
      </div>
    </div>
  </section>
</template>
