<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Card from "../ui/Card.vue"
import { testimonials } from "../../data/testimonialsData"

interface Testimonial {
  id: number
  name: string
  rating: number
  avatar: string
  text: string
}

const { t } = useI18n()

// Map testimonials data to include translated text
const testimonialsState = reactive({
  list: computed<Testimonial[]>(() => {
    return testimonials.map((item) => ({
      ...item,
      name: t('testimonials.sampleName'),
      text: t('testimonials.sampleText')
    }))
  }) as unknown as Testimonial[]
})
</script>

<template>
  <section class="py-24 bg-[#050814]">
    <h2 class="text-center text-white text-3xl font-bold mb-14">
      {{ t('testimonials.title') }}
    </h2>

    <!-- ROW 1 -->
    <div class="marquee">
      <div class="marquee-inner">
        <div class="marquee-track">
          <Card v-for="testimonial in testimonialsState.list" :key="'r1-' + testimonial.id" :item="testimonial" />
        </div>

        <div class="marquee-track">
          <Card v-for="testimonial in testimonialsState.list" :key="'r1c-' + testimonial.id" :item="testimonial" />
        </div>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="marquee reverse">
      <div class="marquee-inner">
        <div class="marquee-track">
          <Card v-for="testimonial in testimonialsState.list" :key="'r2-' + testimonial.id" :item="testimonial" />
        </div>

        <div class="marquee-track">
          <Card v-for="testimonial in testimonialsState.list" :key="'r2c-' + testimonial.id" :item="testimonial" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Wrapper */
.marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%);
  margin-bottom: 4rem;
}

/* The moving flex container */
.marquee-inner {
  display: flex;
  width: max-content;
  animation: scroll-left 42s linear infinite;
}

/* Reverse direction */
.reverse .marquee-inner {
  animation: scroll-right 32s linear infinite;
}

/* Pause on hover */
.marquee:hover .marquee-inner {
  animation-play-state: paused;
}

/* Track (one set of cards) */
.marquee-track {
  display: flex;
  gap: 1.5rem;
  padding-inline: 1rem;
  white-space: nowrap;
}

/* Animations */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
