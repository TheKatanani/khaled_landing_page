<!-- StepThree.vue -->
<script setup lang="ts">
import Stepper from './Stepper.vue';

const props = defineProps<{ form: any }>();
const emit = defineEmits(["next", "back"]);
</script>

<template>
    <div class="w-full" dir="rtl">

        <!-- Title & Progress -->
        <div class="flex justify-start gap-4 items-center mb-8">
            <h2 class="text-white text-2xl font-semibold">احجز موعدك الآن</h2>

            <Stepper :currentStep="3" />

        </div>

        <!-- GRID -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-8">

            <!-- Store Name -->
            <div>
                <label class="label">اسم المتجر أو اسم المؤسسة</label>
                <input :value="props.form.shopName" readonly class="readonly-field" />
            </div>

            <!-- Shipments -->
            <div>
                <label class="label">عدد الشحنات الشهرية</label>
                <input :value="props.form.shipments" readonly class="readonly-field" />
            </div>

            <!-- Store Type -->
            <div>
                <label class="label">نوع المتجر</label>
                <input :value="props.form.shopType" readonly class="readonly-field" />
            </div>

            <!-- Email -->
            <div>
                <label class="label">البريد الإلكتروني</label>
                <input :value="props.form.email" readonly class="readonly-field" />
            </div>

            <!-- Phone -->
            <div>
                <label class="label">رقم الجوال</label>
                <input :value="props.form.phone" readonly class="readonly-field" />
            </div>

            <!-- Date & Time from Step 1 -->
            <div>
                <label class="label">توقيت الموعد</label>

                <input :value="`${props.form.selectedTime} ، ${props.form.selectedDate}`" readonly
                    class="readonly-field" />
            </div>
        </div>

        <!-- Question / Message -->
        <div class="mt-8">
            <label class="label">ما هي أهم أسئلتك</label>
            <textarea :value="props.form.question" readonly class="readonly-field h-36 resize-none"></textarea>
        </div>

        <!-- BUTTONS -->
        <div class="flex justify-start mt-10 gap-4">
            <button @click="emit('back')" class="btn-secondary">
                تعديل البيانات
            </button>

            <button @click="emit('next')" class="btn-primary">
                تأكيد وإرسال الموعد
            </button>
        </div>
    </div>
</template>

<style scoped>
.label {
    @apply text-start block text-white/60 text-sm mb-2;
}

.readonly-field {
    @apply w-full bg-[#161B22] text-white px-4 py-3 rounded-lg border border-white/10 outline-none cursor-not-allowed;
}

.btn-primary {
    @apply bg-[#1A74FF] hover:bg-[#006DFF] text-white py-3 px-10 rounded-xl font-semibold transition-colors;
}

.btn-secondary {
    @apply border border-white/40 text-white py-3 px-10 rounded-xl hover:bg-white/10 transition-colors;
}
</style>
