<script setup>
// Images
import imgImage3 from '../../assets/stats/stat1.png'
import imgImage4 from '../../assets/stats/stat2.png'
import imgImage5 from '../../assets/stats/stat3.png'
import imgImage6 from '../../assets/stats/stat4.png'

import LeftGrid from '../ui/LeftGrid.vue'
import RightGrid from '../ui/RightGrid.vue'
</script>

<template>
  <section
    class="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden"
  >
    <!-- LEFT GRID (hidden on mobile) -->
    <div class="absolute top-0 bottom-44 left-14 scale-125 hidden md:block">
      <LeftGrid />
    </div>

    <!-- RIGHT GRID (hidden on mobile) -->
    <div class="absolute top-0 bottom-44 right-14 scale-125 hidden md:block">
      <RightGrid />
    </div>

    <!-- CENTER (NO WRAPPING ON MOBILE) -->
    <div
      class="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 scale-[0.9] sm:scale-95 md:scale-100 relative z-20"
      dir="rtl"
    >
      <!-- TOP RIGHT BOX -->
      <div
        class="relative w-[430px] h-[165px] bg-[#161b22] m-1 [clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)]"
      >
        <div class="m-10 mr-auto w-fit">
          <p class="text-[#00C0E8] text-4xl font-bold">98٪</p>
          <p class="text-sm">نسبة تسليم في الوقت المحدد</p>
        </div>

        <div
          class="absolute top-2 bottom-2 right-4 w-[175px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,55%_100%,0%_100%)]"
        >
          <img :src="imgImage6" class="absolute inset-0 object-contain" />
        </div>
      </div>

      <!-- TOP LEFT BOX -->
      <div
        class="relative w-[430px] h-[165px] bg-[#161b22] m-1 [clip-path:polygon(0%_0%,100%_0%,100%_100%,20%_100%)]"
      >
        <div class="m-10 ml-auto w-fit">
          <p class="text-[#00C0E8] text-4xl font-bold">+1200</p>
          <p class="text-sm">شحنة تُدار شهريًا عبر المنصة</p>
        </div>

        <div
          class="absolute top-2 bottom-2 left-4 w-[175px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,100%_100%,45%_100%)]"
        >
          <img :src="imgImage4" class="absolute inset-0 object-contain" />
        </div>
      </div>

      <!-- BOTTOM RIGHT BOX -->
      <div
        class="relative w-[335px] h-[165px] bg-[#161b22] m-1 mr-auto [clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
      >
        <div class="m-10 ml-24 mr-auto w-fit">
          <p class="text-[#00C0E8] text-4xl font-bold">+1200</p>
          <p class="text-sm">عميل نشط يوميًا</p>
        </div>

        <div
          class="absolute top-2 bottom-2 right-4 w-[80px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,10%_100%,0%_100%)]"
        >
          <img :src="imgImage3" class="absolute inset-0 object-contain" />
        </div>
      </div>

      <!-- BOTTOM LEFT BOX -->
      <div
        class="relative w-[335px] h-[165px] bg-[#161b22] m-1 ml-auto [clip-path:polygon(0%_0%,100%_0%,100%_100%,25%_100%)]"
      >
        <div class="m-10 ml-auto w-fit">
          <p class="text-[#00C0E8] text-4xl font-bold">+27٪</p>
          <p class="text-sm">متوسط توفير في التكلفة</p>
        </div>

        <div
          class="absolute top-2 bottom-2 left-4 w-[80px] bg-[#1C222C] [clip-path:polygon(0_0,100%_0,100%_100%,90%_100%)]"
        >
          <img :src="imgImage5" class="absolute inset-0 object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>
