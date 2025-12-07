<!-- StepTwo.vue -->
<script setup lang="ts">
import Stepper from './Stepper.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{ form: any }>();
const emit = defineEmits(["next", "back"]);
</script>

<template>
    <div class="w-full">

        <!-- Title & Progress -->
        <div class="flex justify-start gap-4 items-center mb-8">
            <h2 class="text-white text-2xl font-semibold">{{ t('booking.step2.title') }}</h2>

            <Stepper :currentStep="2" />

        </div>

        <!-- Form Grid -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-8">

            <!-- اسم المتجر -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    {{ t('booking.step2.companyName') }}
                </label>
                <input v-model="props.form.shopName" :placeholder="t('booking.step2.companyName')"
                    class="input-field" />
            </div>

            <!-- عدد الشحنات الشهرية -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    {{ t('booking.step2.monthlyOrders') }}
                </label>
                <select v-model="props.form.shipments" class="input-field appearance-none">
                    <option value="" disabled selected>Select range</option>
                    <option value="1-20">1-20</option>
                    <option value="20-50">20-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-300">100-300</option>
                    <option value="300-700">300-700</option>
                    <option value="700-1500">700-1500</option>
                    <option value="1500+">1500+</option>
                </select>
            </div>

            <!-- نوع المتجر -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    {{ t('booking.step2.shopType') }}
                </label>
                <input v-model="props.form.shopType" :placeholder="t('booking.step2.shopType')" class="input-field" />
            </div>

            <!-- البريد -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    {{ t('booking.step2.email') }}
                </label>
                <input v-model="props.form.email" placeholder="example@gmail.com" class="input-field" />
            </div>

            <!-- الجوال -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    {{ t('booking.step2.phone') }}
                </label>
                <input v-model="props.form.phone" :placeholder="t('booking.step2.phone')" class="input-field" />
            </div>
            <!-- Date & Time from Step 1 -->
            <div>
                <label class="label">{{ t('booking.step3.selectedTimeLabel') }}</label>

                <input :value="`${props.form.selectedTime} ، ${props.form.selectedDate}`" readonly
                    class="readonly-field" />
            </div>

        </div>
        <!-- الأسئلة -->
        <div>
            <label class="text-start block text-white/60 mt-8 text-sm mb-2">
                {{ t('booking.step2.questions') }}
            </label>
            <textarea v-model="props.form.question" :placeholder="t('booking.step2.questions')"
                class="input-field h-36 resize-none"></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex justify-start mt-10 gap-4 ">
            <button @click="emit('back')" class="btn-secondary">
                {{ t('booking.step2.back') }}
            </button>

            <button @click="emit('next')" class="btn-primary">
                {{ t('booking.step2.next') }}
            </button>
        </div>

    </div>
</template>

<style scoped>
.input-field {
    @apply w-full bg-[#161B22] text-white placeholder-white/40 px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#1A74FF] transition-all;
}

.btn-primary {
    @apply bg-[#1A74FF] hover:bg-[#006DFF] text-white py-3 px-10 rounded-xl font-semibold transition-colors;
}

.btn-secondary {
    @apply border border-white/40 text-white py-3 px-10 rounded-xl hover:bg-white/10 transition-colors;
}

.label {
    @apply text-start block text-white/60 text-sm mb-2;
}

.readonly-field {
    @apply w-full bg-[#161B22] text-white px-4 py-3 rounded-lg border border-white/10 outline-none cursor-not-allowed;
}
</style>
