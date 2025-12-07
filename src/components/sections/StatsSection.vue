<script setup>
// Images
import imgImage3 from '../../assets/stats/stat1.png'
import imgImage4 from '../../assets/stats/stat2.png'
import imgImage5 from '../../assets/stats/stat3.png'
import imgImage6 from '../../assets/stats/stat4.png'

import LeftGrid from '../ui/LeftGrid.vue'
import RightGrid from '../ui/RightGrid.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden">
    <!-- LEFT GRID (hidden on mobile) -->
    <div class="absolute top-0 bottom-44 left-14 scale-125 hidden lg:block">
      <LeftGrid />
    </div>

    <!-- RIGHT GRID (hidden on mobile) -->
    <div class="absolute top-0 bottom-44 right-14 scale-125 hidden lg:block">
      <RightGrid />
    </div>

    <!-- CENTER (STATIC SHAPE SCALED) -->
    <div class="max-w-5xl mx-auto grid grid-cols-2 gap-2 relative z-20 origin-center">

      <!-- TOP LEFT BOX -->
      <div
        class="relative w-[180px] h-[70px] md:w-[400px] md:h-[150px] lg:w-[430px] lg:h-[165px] bg-[#161b22] m-1 [clip-path:polygon(0%_0%,100%_0%,100%_100%,20%_100%)]">
        <div class="m-2 md:m-10 md:ml-auto ml-auto w-[60px] md:w-[150px]">
          <p class="text-[#00C0E8] text-lg md:text-4xl font-bold">{{ t('landing.stats.shipmentsValue') }}</p>
          <p class="text-xs md:text-sm font-light text-white/80">{{ t('landing.stats.shipmentsLabel') }}</p>
        </div>

        <div
          class="absolute top-2 bottom-2 left-4 w-[62px] md:w-[175px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,100%_100%,45%_100%)]">
          <img :src="imgImage4" alt="Shipments Stat Icon" class="absolute inset-0 object-contain" loading="lazy" />
        </div>
      </div>
      <!-- TOP RIGHT BOX -->
      <div
        class="relative w-[180px] h-[70px] md:w-[400px] md:h-[150px] lg:w-[430px] lg:h-[165px] bg-[#161b22] m-1 [clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)]">
        <div class="m-2 md:m-10 mr-auto w-[60px] md:w-[150px]">
          <p class="text-[#00C0E8] text-lg md:text-4xl font-bold">{{ t('landing.stats.ontimeValue') }}</p>
          <p class="text-xs md:text-sm font-light text-white/80">{{ t('landing.stats.ontimeLabel') }}</p>
        </div>

        <div
          class="absolute top-2 bottom-2 right-4 w-[62px] md:w-[175px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,55%_100%,0%_100%)]">
          <img :src="imgImage6" alt="On Time Stat Icon" class="absolute inset-0 object-contain" loading="lazy" />
        </div>
      </div>

      <!-- BOTTOM LEFT BOX -->
      <div
        class="relative w-[146px] h-[70px] md:w-[335px] md:h-[165px] bg-[#161b22] m-1 ml-auto [clip-path:polygon(0%_0%,100%_0%,100%_100%,25%_100%)]">
        <div class="m-2 md:m-10 md:ml-auto ml-auto w-[60px] md:w-[150px]">
          <p class="text-[#00C0E8] text-lg md:text-4xl font-bold">{{ t('landing.stats.savingValue') }}</p>
          <p class="text-xs md:text-sm font-light text-white/80">{{ t('landing.stats.savingLabel') }}</p>
        </div>

        <div
          class="absolute top-2 bottom-2 left-4 w-[32px] md:w-[80px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,100%_100%,90%_100%)]">
          <img :src="imgImage5" alt="Savings Stat Icon" class="absolute inset-0 object-contain" loading="lazy" />
        </div>
      </div>
      <!-- BOTTOM RIGHT BOX -->
      <div
        class="relative w-[146px] h-[70px] md:w-[335px] md:h-[165px] bg-[#161b22] m-1 mr-auto [clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]">
        <div class="m-2 md:m-10 mr-auto w-[60px] md:w-[150px]">
          <p class="text-[#00C0E8] text-lg md:text-4xl font-bold">{{ t('landing.stats.clientsValue') }}</p>
          <p class="text-xs md:text-sm font-light text-white/80">{{ t('landing.stats.clientsLabel') }}</p>
        </div>

        <div
          class="absolute top-2 bottom-2 right-4 w-[32px] md:w-[80px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,10%_100%,0%_100%)]">
          <img :src="imgImage3" alt="Clients Stat Icon" class="absolute inset-0 object-contain" loading="lazy" />
        </div>
      </div>


    </div>
  </section>
</template>
