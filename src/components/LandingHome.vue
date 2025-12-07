<script setup>
import MainNavbar from '@/components/layout/MainNavbar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { ref, defineAsyncComponent } from 'vue'

// Async Components for LCP optimization
const PricingTable = defineAsyncComponent(() => import('./sections/PricingTable.vue'))
const StatsSection = defineAsyncComponent(() => import('./sections/StatsSection.vue'))
const PriceCalculatorSection = defineAsyncComponent(() => import('./sections/PriceCalculatorSection.vue'))
const WhySection = defineAsyncComponent(() => import('./sections/WhySection.vue'))
const StepsSection = defineAsyncComponent(() => import('./sections/StepsSection.vue'))
const TestimonialsSection = defineAsyncComponent(() => import('./sections/TestimonialsSection.vue'))
const FaqSection = defineAsyncComponent(() => import('./sections/FaqSection.vue'))
const Network = defineAsyncComponent(() => import('./sections/Network.vue'))

const showTrackModal = ref(false)

function openTrackModal() {
  showTrackModal.value = true
}

</script>

<template>
  <div class="bg-[#050814] min-h-screen text-white">
    <MainNavbar :onTrackClick="openTrackModal" />

    <main>
      <HeroSection />
      <section id="pricing" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <PricingTable />
      </section>
      <section id="stats" class="">
        <StatsSection />
      </section>
      <section id="tracking" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <PriceCalculatorSection />
      </section>
      <section id="Why" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <WhySection />
      </section>
      <section id="Steps" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <StepsSection />
      </section>
      <section id="Network" class="lg:py-24 lg:max-w-6xl lg:mx-auto lg:px-4">
        <Network />
      </section>
      <TestimonialsSection />

      <!-- سكشن الأسئلة الشائعة -->
      <section id="faq" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <FaqSection />
      </section>
    </main>
    <Footer />
  </div>
</template>
