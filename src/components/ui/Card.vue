<script setup lang="ts">
defineProps<{
  item: {
    id: number
    name: string
    text: string
    rating: number
    avatar: string
  }
}>()
</script>

<template>
  <div class="bg-[#161b22] rounded-2xl p-5 w-[320px] flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-1 opacity-80">
        <p class="text-white text-lg font-bold leading-none">{{ item.rating }}</p>
        <img src="../../assets/testimonials/star.svg" class="w-5 h-5" alt="start" />
      </div>

      <div class="flex items-center gap-2">
        <span class="text-white font-bold text-lg">{{ item.name }}</span>
        <img :src="item.avatar" :alt="item.name" class="w-8 h-8 rounded-full" />
      </div>
    </div>

    <p class="text-white/80 leading-7 text-sm text-wrap">{{ item.text }}</p>
  </div>
</template>
