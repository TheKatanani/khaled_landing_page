<script setup>
import successImg from "../../../assets/successImg.png";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(["close"]);
</script>

<template>
    <div class="text-center text-white max-w-[400px] mx-auto">
        <img :src="successImg" class="h-24 mx-auto mb-4" alt="Booking Successful" />

        <h2 class="text-xl font-bold mb-3">{{ t('booking.step4.successTitle') }}</h2>

        <p class="text-white/70 text-sm leading-relaxed mb-6">
            {{ t('booking.step4.successBody') }}
        </p>

        <button @click="emit('close')"
            class="w-full bg-[#1A74FF] hover:bg-[#006DFF] text-white py-3 rounded-xl transition">
            {{ t('booking.step4.ok') }}
        </button>
    </div>
</template>
