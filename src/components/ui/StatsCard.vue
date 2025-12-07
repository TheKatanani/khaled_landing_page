<script setup lang="ts">
const props = defineProps<{
  side: 'left' | 'right'        // which side has the angled panel
  value: string                 // e.g. "1200+"
  label: string                 // the Arabic text under the number
}>()
</script>

<template>
  <div
    class="relative bg-[#11151C] overflow-hidden min-h-[170px]
           flex items-center justify-center text-center px-10"
  >
    <!-- Angled panel LEFT -->
    <div
      v-if="side === 'left'"
      class="absolute inset-y-0 left-0 w-[160px] bg-[#1C222C]"
      style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);"
    ></div>

    <!-- Angled panel RIGHT -->
    <div
      v-else
      class="absolute inset-y-0 right-0 w-[160px] bg-[#1C222C]"
      style="clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="text-[#00C7DF] font-bold text-[34px] leading-none mb-3">
        {{ value }}
      </div>
      <div class="text-sm text-white/80 leading-relaxed">
        {{ label }}
      </div>
    </div>
  </div>
</template>
