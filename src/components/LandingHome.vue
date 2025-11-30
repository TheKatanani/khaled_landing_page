<script setup>
import MainNavbar from '@/components/layout/MainNavbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { ref } from 'vue'

const showTrackModal = ref(false)

function openTrackModal() {
  showTrackModal.value = true
}

// لاحقاً نعمل المودال الحقيقي
</script>

<template>
  <div class="bg-[#050814] min-h-screen text-white">
    <MainNavbar :onTrackClick="openTrackModal" />

    <main>
      <HeroSection />

      <!-- سكشن لماذا شيب فلو -->
      <section id="why" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <!-- TODO: نبني هذا السيكشن لاحقاً -->
        <div class="h-40 border border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
          WHY SECTION (placeholder)
        </div>
      </section>

      <!-- سكشن حاسبة الأسعار -->
      <section id="pricing" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <div class="h-40 border border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
          PRICING CALCULATOR SECTION (placeholder)
        </div>
      </section>

      <!-- سكشن تتبع الشحنة -->
      <section id="tracking" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <div class="h-40 border border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
          TRACKING SECTION (placeholder) — will be replaced by multi-step form
        </div>
      </section>

      <!-- سكشن الأسئلة الشائعة -->
      <section id="faq" class="py-24 max-w-6xl mx-auto px-4 lg:px-0">
        <div class="h-40 border border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
          FAQ SECTION (placeholder)
        </div>
      </section>
    </main>

    <!-- مودال تتبع الشحنة لاحقاً -->
    <!--
    <TrackShipmentModal v-if="showTrackModal" @close="showTrackModal = false" />
    -->
  </div>
</template>
