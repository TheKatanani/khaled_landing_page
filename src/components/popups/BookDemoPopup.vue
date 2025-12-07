<script setup lang="ts">
import { ref } from "vue";
import StepOne from "./steps/StepOne.vue";
import StepTwo from "./steps/StepTwo.vue";
import StepThree from "./steps/StepThree.vue";
import StepSuccess from "./steps/StepSuccess.vue";

const emit = defineEmits(["close"]);

const step = ref(1);

/* 📌 FORM DATA STORED HERE — accessible to all steps */
const form = ref({
    shopName: "",
    shipments: "",
    shopType: "",
    email: "",
    phone: "",
    question: "",
    selectedDate: "",
    selectedTime: "",
});

function next() {
    if (step.value < 4) step.value++;
}

function back() {
    if (step.value > 1) step.value--;
}
</script>

<template>
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
        <div class="bg-[#0a0d1e] rounded-2xl max-w-5xl p-6 relative shadow-xl border border-white/10"
            :class="{ 'w-[95%]': step !== 4 }">

            <!-- Close -->
            <button class="absolute top-3 left-3 text-white/50 hover:text-white text-2xl transition-colors"
                @click="emit('close')">
                ×
            </button>

            <!-- STEP RENDERING -->
            <StepOne v-if="step === 1" :form="form" @next="next" />

            <StepTwo v-if="step === 2" :form="form" @next="next" @back="back" />

            <StepThree v-if="step === 3" :form="form" @next="next" @back="back" />

            <StepSuccess v-if="step === 4" @close="emit('close')" />
        </div>
    </div>
</template>
