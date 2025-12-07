<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <section class="relative w-full py-10 bg-[#050814]">
        <!-- LEFT BLUE RING -->
        <img src="../../assets/effects/blue-ring.png" alt="left blue ring"
            class="ringPulse pointer-events-none select-none absolute -left-[750px] top-1/2 -translate-y-1/2 w-[900px] opacity-90" />

        <!-- RIGHT BLUE RING -->
        <img src="../../assets/effects/blue-ring.png" alt="right blue ring"
            class="ringPulse pointer-events-none select-none absolute -right-[750px] top-1/2 -translate-y-1/2 w-[900px] opacity-90" />

        <!-- TITLE -->
        <h2 class="text-center text-white text-3xl font-bold mb-12">
            {{ t('calculator.title') }}
        </h2>

        <!-- MAIN FORM CARD -->
        <div class="relative mx-auto w-full md:w-[473px] border border-white/10 rounded-2xl shadow-xl">
            <div class="bg-[#0E121A] rounded-xl m-3 px-8 py-10">
                <!-- Company -->
                <div class="mb-6">
                    <label class="block text-white mb-2 text-sm"> {{ t('calculator.companyLabel') }} </label>
                    <div class="relative">
                        <select class="w-full bg-[#1A1F27] text-white px-4 py-3 rounded-lg appearance-none"
                            :aria-label="t('calculator.companyLabel')">
                            <option>{{ t('calculator.selectCompany') }}</option>
                        </select>
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">⌄</span>
                    </div>
                </div>

                <!-- From City -->
                <div class="mb-6">
                    <label class="block text-white mb-2 text-sm"> {{ t('calculator.fromLabel') }} </label>
                    <div class="relative">
                        <select class="w-full bg-[#1A1F27] text-white px-4 py-3 rounded-lg appearance-none"
                            :aria-label="t('calculator.fromLabel')">
                            <option>{{ t('calculator.selectFrom') }}</option>
                        </select>
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">⌄</span>
                    </div>
                </div>

                <!-- To City -->
                <div class="mb-6">
                    <label class="block text-white mb-2 text-sm"> {{ t('calculator.toLabel') }} </label>
                    <div class="relative">
                        <select class="w-full bg-[#1A1F27] text-white px-4 py-3 rounded-lg appearance-none"
                            :aria-label="t('calculator.toLabel')">
                            <option>{{ t('calculator.selectTo') }}</option>
                        </select>
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">⌄</span>
                    </div>
                </div>

                <!-- Service -->
                <div class="mb-6">
                    <label class="block text-white mb-2 text-sm"> {{ t('calculator.serviceLabel') }} </label>
                    <div class="relative">
                        <select class="w-full bg-[#1A1F27] text-white px-4 py-3 rounded-lg appearance-none"
                            :aria-label="t('calculator.serviceLabel')">
                            <option>{{ t('calculator.economic') }}</option>
                        </select>
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">⌄</span>
                    </div>
                </div>

                <!-- Weight -->
                <div class="mb-6">
                    <label class="block text-white mb-2 text-sm"> {{ t('calculator.weightLabel') }} </label>
                    <input type="number" placeholder="0" class="w-full bg-[#1A1F27] text-white px-4 py-3 rounded-lg" />
                </div>

                <!-- Submit -->
                <button
                    class="w-full rounded-full bg-[#2C6DF4] text-white py-4 mt-4 text-center font-semibold hover:bg-[#3478ff] transition">
                    {{ t('calculator.calculate') }}
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadePulse {

    0%,
    100% {
        opacity: 0.4;
    }

    50% {
        opacity: 0.9;
    }
}

.ringPulse {
    animation: fadePulse 4s ease-in-out infinite;
}
</style>
