<script setup>
const props = defineProps({
  svgPaths: Object
});
</script>

<template>
  <div class="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-none">

    <!-- ──────────────────────────────────────────── -->
    <!-- BACKGROUNDS — Top Right -->
    <!-- ──────────────────────────────────────────── -->
    <div class="absolute h-[164px] w-[426px] ml-[435px] mt-0">
      <svg class="size-full" fill="none" viewBox="0 0 426 164">
        <path d="M0 0H426L356 164H0V0Z" fill="#161B22" />
        <path :d="props.svgPaths.p10890200" fill="#1F2631" />
      </svg>
    </div>

    <!-- Bottom Right -->
    <div class="absolute h-[164px] w-[349px] ml-[435px] mt-[181px]">
      <svg class="size-full" fill="none" viewBox="0 0 349 164">
        <path d="M0 0H349L278.5 164L0 164V0Z" fill="#161B22" />
        <path :d="props.svgPaths.p31b6dc00" fill="#1F2631" />
      </svg>
    </div>

    <!-- Bottom Left -->
    <div class="absolute h-[164px] w-[339px] ml-[76px] mt-[181px] flex items-center justify-center">
      <div class="rotate-180 scale-y-[-1]">
        <svg class="size-full" fill="none" viewBox="0 0 339 164">
          <path d="M0 0H339L268.5 164L0 164V0Z" fill="#161B22" />
          <path :d="props.svgPaths.p2f000c00" fill="#1F2631" />
        </svg>
      </div>
    </div>

    <!-- Top Left -->
    <div class="absolute h-[164px] w-[416px] ml-0 mt-0 flex items-center justify-center">
      <div class="rotate-180 scale-y-[-1]">
        <svg class="size-full" fill="none" viewBox="0 0 416 164">
          <path d="M0 0H416L346 164H0V0Z" fill="#161B22" />
          <path :d="props.svgPaths.p37b14b40" fill="#1F2631" />
        </svg>
      </div>
    </div>

    <!-- ──────────────────────────────────────────── -->
    <!-- TEXT / NUMBERS -->
    <!-- Positions match exact Figma coordinates -->
    <!-- ──────────────────────────────────────────── -->

    <!-- 98% -->
    <div class="absolute w-[222px] ml-[446px] mt-[33px] flex flex-col items-end text-right">
      <p class="text-[#00c0e8] text-[40px] font-bold">98٪</p>
      <p class="text-[#a9b4c5] text-[16px] leading-[32px]">
        نسبة تسليم في الوقت المحدد
      </p>
    </div>

    <!-- +1200 customers -->
    <div class="absolute w-[222px] ml-[540px] mt-[211px] flex flex-col items-end text-right">
      <p class="text-[#00c0e8] text-[40px] font-bold">+1200</p>
      <p class="text-[#a9b4c5] text-[16px] leading-[32px]">
        عميل نشط يوميًا
      </p>
    </div>

    <!-- +27% -->
    <div class="absolute w-[222px] ml-[263px] mt-[211px] flex flex-col items-end text-right">
      <p class="text-[#00c0e8] text-[40px] font-bold">+27٪</p>
      <p class="text-[#a9b4c5] text-[16px] leading-[32px] w-[178px]">
        متوسط توفير في التكلفة
      </p>
    </div>

    <!-- +1200 shipments -->
    <div class="absolute w-[222px] ml-[263px] mt-[33px] flex flex-col items-end text-right">
      <p class="text-[#00c0e8] text-[40px] font-bold">+1200</p>
      <p class="text-[#a9b4c5] text-[16px] leading-[32px] w-[186px]">
        شحنة تُدار شهريًا عبر المنصة
      </p>
    </div>
  </div>
</template>
