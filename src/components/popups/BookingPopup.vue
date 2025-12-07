<script setup>
import { ref } from "vue";
import successImg from "../../assets/successImg.png";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const emit = defineEmits(["close"]);

const step = ref(1);

// form data object (all steps)
const form = ref({
    // Step 1
    date: "",
    time: "",

    // Step 2
    monthlyOrders: "",
    country: "",
    companyName: "",
    phone: "",
    email: "",
    website: "",
    about: "",

    // Step 3
    usage: "",
    workload: "",
    preferredTime: "",
    startDate: "",
    budget: "",
    notes: "",
});

// Navigation
const next = () => step.value++;
const back = () => step.value--;
</script>

<template>
    <!-- Dark overlay -->
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99999]">

        <!-- Popup Container -->
        <div
            class="w-[540px] max-h-[90vh] overflow-y-auto bg-[#0a0d1e] rounded-2xl p-6 text-white relative border border-white/10 shadow-2xl">

            <!-- Close Button -->
            <button @click="emit('close')"
                class="absolute left-4 top-4 text-white/60 hover:text-white text-xl transition-colors">
                ✕
            </button>

            <!-- Step 1 ------------------------------------------------------------->
            <template v-if="step === 1">
                <h2 class="text-center text-xl font-bold mb-6">{{ t('booking.step1.title') }}</h2>

                <!-- calendar & time inputs go here -->
                <div class="bg-[#1A1D2D] p-4 rounded-xl mb-4 border border-white/5">
                    <p class="text-white/60 mb-2 text-sm">{{ t('booking.step1.dateLabel') }}</p>
                    <input type="date" v-model="form.date"
                        class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                </div>

                <div class="bg-[#1A1D2D] p-4 rounded-xl mb-6 border border-white/5">
                    <p class="text-white/60 mb-2 text-sm">{{ t('booking.step1.timeLabel') }}</p>
                    <input type="time" v-model="form.time"
                        class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                </div>

                <button @click="next"
                    class="w-full bg-[#1A74FF] py-3 rounded-xl hover:bg-[#006DFF] transition-colors font-medium text-lg">
                    {{ t('booking.step1.next') }}
                </button>
            </template>

            <!-- Step 2 ------------------------------------------------------------->
            <template v-if="step === 2">
                <h2 class="text-center text-xl font-bold mb-6">{{ t('booking.step2.title') }}</h2>

                <div class="grid grid-cols-2 gap-4">

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.monthlyOrders') }}</label>
                        <input v-model="form.monthlyOrders"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.country') }}</label>
                        <input v-model="form.country"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.companyName') }}</label>
                        <input v-model="form.companyName"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.phone') }}</label>
                        <input v-model="form.phone"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.email') }}</label>
                        <input v-model="form.email"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step2.website') }}</label>
                        <input v-model="form.website"
                            class="w-full bg-[#161B22] p-3 rounded-lg outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>
                </div>

                <label class="text-xs text-white/60 mt-4 block mb-1">{{ t('booking.step2.about') }}</label>
                <textarea v-model="form.about"
                    class="w-full bg-[#161B22] p-3 rounded-lg outline-none h-24 text-white border border-white/10 focus:border-[#1A74FF] transition-colors resize-none"></textarea>

                <div class="flex gap-4 mt-6">
                    <button @click="back"
                        class="flex-1 bg-white/10 py-3 rounded-xl hover:bg-white/20 transition-colors">
                        {{ t('booking.step2.back') }}
                    </button>
                    <button @click="next"
                        class="flex-1 bg-[#1A74FF] py-3 rounded-xl hover:bg-[#006DFF] transition-colors font-medium">
                        {{ t('booking.step2.next') }}
                    </button>
                </div>
            </template>

            <!-- Step 3 ------------------------------------------------------------->
            <template v-if="step === 3">
                <h2 class="text-center text-xl font-bold mb-6">{{ t('booking.step3.title') }}</h2>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step3.usage') }}</label>
                        <input v-model="form.usage"
                            class="bg-[#161B22] p-3 rounded-lg w-full outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step3.workload') }}</label>
                        <input v-model="form.workload"
                            class="bg-[#161B22] p-3 rounded-lg w-full outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step3.preferredTime') }}</label>
                        <input v-model="form.preferredTime"
                            class="bg-[#161B22] p-3 rounded-lg w-full outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step3.startDate') }}</label>
                        <input v-model="form.startDate"
                            class="bg-[#161B22] p-3 rounded-lg w-full outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>

                    <div>
                        <label class="text-xs text-white/60 block mb-1">{{ t('booking.step3.budget') }}</label>
                        <input v-model="form.budget"
                            class="bg-[#161B22] p-3 rounded-lg w-full outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors">
                    </div>
                </div>

                <label class="text-xs text-white/60 mt-4 block mb-1">{{ t('booking.step3.notes') }}</label>
                <textarea v-model="form.notes"
                    class="w-full bg-[#161B22] p-3 rounded-lg h-24 outline-none text-white border border-white/10 focus:border-[#1A74FF] transition-colors resize-none"></textarea>

                <div class="flex gap-4 mt-6">
                    <button @click="back"
                        class="flex-1 bg-white/10 py-3 rounded-xl hover:bg-white/20 transition-colors">
                        {{ t('booking.step3.back') }}
                    </button>
                    <button @click="next"
                        class="flex-1 bg-[#1A74FF] py-3 rounded-xl hover:bg-[#006DFF] transition-colors font-medium">
                        {{ t('booking.step3.confirm') }}
                    </button>
                </div>
            </template>

            <!-- Step 4 ------------------------------------------------------------->
            <template v-if="step === 4">
                <div class="text-center w-[380px] bg-[#0F1217] rounded-2xl p-6">
                    <img :src="successImg" class="h-24 mx-auto mb-4" :alt="t('booking.step4.successTitle')" />

                    <h2 class="text-white font-bold text-xl mb-2">{{ t('booking.step4.successTitle') }}</h2>

                    <p class="text-white/70 text-sm leading-relaxed mb-6">
                        {{ t('booking.step4.successBody') }}
                    </p>

                    <button @click="$emit('close')"
                        class="w-full bg-[#1A74FF] hover:bg-[#006DFF] transition text-white py-3 rounded-xl">
                        {{ t('booking.step4.ok') }}
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>
