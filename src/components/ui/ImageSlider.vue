<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useI18n } from 'vue-i18n'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    // each item: { image: importedImage, title_en: string, title_ar: string, description_en: string, description_ar: string }
  },
  intervalTime: {
    type: Number,
    default: 3000
  }
});

const { locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')

const currentIndex = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length;
  }, props.intervalTime);
});

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <div class="relative w-full h-full rounded-2xl overflow-hidden" :dir="isArabic ? 'rtl' : 'ltr'">

    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0 bg-cover bg-center transition-all duration-700"
      :style="{ backgroundImage: `url(${props.slides[currentIndex].image})` }"></div>

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- TEXT CONTENT -->
    <div class="relative z-10 h-full flex flex-col justify-end items-center pb-12 px-6 text-center">

      <h3 class="text-white text-xl font-semibold mb-2">
        {{ isArabic ? props.slides[currentIndex].title_ar : props.slides[currentIndex].title_en }}
      </h3>

      <p class="text-white/70 text-sm max-w-md leading-relaxed">
        {{ isArabic ? props.slides[currentIndex].description_ar : props.slides[currentIndex].description_en }}
      </p>

      <!-- DOTS -->
      <div class="flex gap-2 mt-6">
        <span v-for="(_slide, index) in props.slides" :key="index"
          class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
          :class="index === currentIndex ? 'bg-blue-500' : 'bg-white/30'" @click="currentIndex = index"></span>
      </div>

    </div>
  </div>
</template>
