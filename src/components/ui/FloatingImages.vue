<script setup>
const props = defineProps({
  img3: String,
  img4: String,
  img5: String,
  img6: String,
  svgPaths: Object
})
</script>

<template>
  <div class="relative w-full h-full pointer-events-none select-none">
    <!-- ────────────────────────────────────────── -->
    <!-- TOP RIGHT (big rotated images stack) -->
    <!-- ────────────────────────────────────────── -->
    <div class="absolute left-[689px] top-[62.82px]">
      <!-- Images stack -->
      <div class="absolute h-[150px] w-[139px] left-[689px] top-[69px] overflow-hidden">
        <!-- Layer 3 -->
        <div
          class="absolute left-[31px] top-[1px] w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img3" class="w-[95.59px] h-[136.557px] rounded-[12px] opacity-40" />
          </div>
        </div>

        <!-- Layer 2 -->
        <div
          class="absolute left-0 top-[27px] w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img3" class="w-[95.59px] h-[136.557px] rounded-[12px] opacity-40" />
          </div>
        </div>

        <!-- Layer 1 (highlighted) -->
        <div
          class="absolute left-[5px] top-0 w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg] relative">
            <img :src="props.img3" class="w-[95.59px] h-[136.557px] rounded-[12px]" />
            <div class="absolute inset-0 rounded-[12px] border border-[#3364ac]"></div>
          </div>
        </div>
      </div>

      <!-- Dark bar shape -->
      <div class="absolute left-[780.98px] top-[62.82px] h-[178.106px] w-[112.193px]">
        <svg viewBox="0 0 113 179" class="w-full h-full" fill="none">
          <rect
            x="65.47"
            y="7.981"
            width="11.46"
            height="163.667"
            transform="rotate(23.5796 65.47 7.981)"
            fill="#161B22"
          />
          <path :d="props.svgPaths.p2fa8b700" fill="#0F1217" />
        </svg>
      </div>
    </div>

    <!-- ────────────────────────────────────────── -->
    <!-- MIDDLE RIGHT (small images stack ×2) -->
    <!-- ────────────────────────────────────────── -->
    <div v-for="i in 2" :key="'right-small-' + i" class="absolute left-[692px] top-[260px]">
      <!-- Images -->
      <div class="absolute left-[692px] top-[260px] h-[102px] w-[66px] overflow-hidden">
        <!-- Layer 3 -->
        <div
          class="absolute left-[14.75px] top-[0.42px] w-[74.917px] h-[79.325px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img4" class="w-[45.49px] h-[64.99px] rounded-[5.7px] opacity-40" />
          </div>
        </div>

        <!-- Layer 2 -->
        <div
          class="absolute left-[-1.38px] top-[11.79px] w-[80.538px] h-[85.277px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img4" class="w-[48.90px] h-[69.869px] rounded-[5.7px] opacity-40" />
          </div>
        </div>

        <!-- Layer 1 -->
        <div
          class="absolute left-[0.6px] top-[-1.34px] w-[82.148px] h-[86.981px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg] relative">
            <img :src="props.img4" class="w-[49.885px] h-[71.265px] rounded-[5.7px]" />
            <div class="absolute inset-0 rounded-[5.7px] border border-[#3364ac]"></div>
          </div>
        </div>
      </div>

      <!-- Dark bar -->
      <div class="absolute left-[719.57px] top-[262.5px] h-[120.39px] w-[84.427px]">
        <svg viewBox="0 0 85 121" class="w-full h-full" fill="none">
          <path :d="props.svgPaths.p20dd3b00" fill="#161B22" />
          <path :d="props.svgPaths.p2989080" fill="#0F1217" />
        </svg>
      </div>
    </div>

    <!-- ────────────────────────────────────────── -->
    <!-- BOTTOM LEFT (small stack) -->
    <!-- ────────────────────────────────────────── -->
    <div class="absolute left-[52.9px] top-[255px]">
      <!-- Stack -->
      <div
        class="absolute left-[99px] top-[255px] w-[66px] h-[102px] overflow-hidden rotate-180 scale-y-[-1]"
      >
        <!-- Layer 3 -->
        <div
          class="absolute left-[14.75px] top-[0.42px] w-[74.917px] h-[79.325px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img5" class="w-[45.49px] h-[64.99px] rounded-[5.7px] opacity-40" />
          </div>
        </div>

        <!-- Layer 2 -->
        <div
          class="absolute left-[-1.38px] top-[11.79px] w-[80.538px] h-[85.277px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img5" class="w-[48.90px] h-[69.869px] rounded-[5.7px] opacity-40" />
          </div>
        </div>

        <!-- Layer 1 -->
        <div
          class="absolute left-[0.6px] top-[-1.34px] w-[82.148px] h-[86.981px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg] relative">
            <img :src="props.img5" class="w-[49.885px] h-[71.265px] rounded-[5.7px]" />
            <div class="absolute inset-0 border border-[#3364ac] rounded-[5.7px]"></div>
          </div>
        </div>
      </div>

      <!-- Dark bar -->
      <div
        class="absolute left-[52.9px] top-[256.82px] h-[118.64px] w-[84.69px] rotate-180 scale-y-[-1]"
      >
        <svg viewBox="0 0 85 119" class="w-full h-full" fill="none">
          <path :d="props.svgPaths.p38c59b80" fill="#161B22" />
          <path :d="props.svgPaths.p25ae6300" fill="#0F1217" />
        </svg>
      </div>
    </div>

    <!-- ────────────────────────────────────────── -->
    <!-- TOP LEFT -->
    <!-- ────────────────────────────────────────── -->
    <div class="absolute left-[-32px] top-[64px]">
      <!-- Stack -->
      <div
        class="absolute left-[33px] top-[70px] h-[150px] w-[139px] overflow-hidden rotate-180 scale-y-[-1]"
      >
        <!-- Layer 3 -->
        <div
          class="absolute left-[31px] top-[0px] w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img6" class="w-[95.59px] h-[136.557px] rounded-[12px] opacity-40" />
          </div>
        </div>

        <!-- Layer 2 -->
        <div
          class="absolute left-0 top-[27px] w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg]">
            <img :src="props.img6" class="w-[95.59px] h-[136.557px] rounded-[12px] opacity-40" />
          </div>
        </div>

        <!-- Layer 1 -->
        <div
          class="absolute left-[5px] top-0 w-[157.41px] h-[166.672px] flex items-center justify-center"
        >
          <div class="rotate-[324.199deg] relative">
            <img :src="props.img6" class="w-[95.59px] h-[136.557px] rounded-[12px]" />
            <div class="absolute inset-0 border border-[#3364ac] rounded-[12px]"></div>
          </div>
        </div>
      </div>

      <!-- Dark bar -->
      <div
        class="absolute left-[-32px] top-[64px] h-[178.106px] w-[112.193px] rotate-180 scale-y-[-1]"
      >
        <svg viewBox="0 0 113 179" class="w-full h-full" fill="none">
          <rect
            x="65.47"
            y="7.981"
            width="11.46"
            height="163.667"
            transform="rotate(23.5796 65.47 7.981)"
            fill="#161B22"
          />
          <path :d="props.svgPaths.p2fa8b700" fill="#0F1217" />
        </svg>
      </div>
    </div>
  </div>
</template>
