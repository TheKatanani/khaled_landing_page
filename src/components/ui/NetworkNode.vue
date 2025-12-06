<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const props = defineProps<{
  logo?: string | null
  labelAr?: string | null
  labelEn?: string | null
}>()

const { locale } = useI18n()
const isArabic = computed(() => locale.value === "ar")

const label = computed(() =>
  isArabic.value ? props.labelAr : props.labelEn
)
</script>

<template>
  <div class="relative group cursor-default">
    <div class="node-base transition-all duration-300">
      <template v-if="logo">
        <img :src="logo" class="w-6 h-6 object-contain" />
      </template>

      <template v-else>
        <div class="w-3.5 h-3.5 rounded-full bg-[#3A4250] relative">
          <span class="absolute inset-0 rounded-full border border-[#707782] opacity-70"></span>
        </div>
      </template>
    </div>

    <!-- Balloon Label -->
    <div
      v-if="label"
      class="label-balloon z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
    >
      {{ label }}
    </div>
  </div>
</template>

<style scoped>
.node-base {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #0f1217;
  border: 2px solid #3a4250;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.group:hover .node-base {
  background: #1a4fbf;
  border-color: #1a74ff;
  box-shadow: 0 0 30px rgba(26, 116, 255, 0.55);
}

.label-balloon {
  position: absolute;
  top: -46px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff912d;
  padding: 6px 12px;
  color: white;
  font-weight: bold;
  border-radius: 14px;
  white-space: nowrap;
}
</style>
