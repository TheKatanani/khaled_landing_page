<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(["back"])
</script>

<template>
    <div class="w-full max-w-[420px] rounded-2xl text-white shadow-lg">
        <!-- Title -->
        <h2 class="text-center text-2xl font-bold mb-8">
            {{ t('tracking.resultTitle') }}
        </h2>

        <!-- Full Name -->
        <label class="text-white/60 text-sm block mb-1">
            {{ t('tracking.ownerName') }}
        </label>

        <input :value="data.name" readonly class="w-full h-12 rounded-lg bg-[#161B22] px-4 text-white 
                   border border-white/10 outline-none mb-5
                   placeholder-white/30" />

        <!-- Order Number -->
        <label class="text-white/60 text-sm block mb-1">
            {{ t('tracking.shipmentNumber') }}
        </label>

        <input :value="data.orderNumber" readonly class="w-full h-12 rounded-lg bg-[#161B22] px-4 text-white 
                   border border-white/10 outline-none mb-5" />

        <!-- Status -->
        <label class="text-white/60 text-sm block mb-1">
            {{ t('tracking.status') }}
        </label>

        <div class="w-full h-12 rounded-lg px-4 flex items-center justify-between mb-8"
            :style="{ background: data.statusColor }">
            <span class="text-white font-medium">{{ data.status }}</span>

            <span class="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <!-- Button -->
        <button @click="emit('back')" class="w-full bg-[#1A74FF] hover:bg-[#006DFF] transition-colors 
                   text-white py-3 rounded-xl text-lg">
            {{ t('tracking.ok') }}
        </button>
    </div>
</template>
