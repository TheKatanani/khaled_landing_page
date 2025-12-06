<!-- StepTwo.vue -->
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

            <Stepper :currentStep="2" />

        </div>

        <!-- Form Grid -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-8">

            <!-- اسم المتجر -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    اسم المتجر أو اسم المؤسسة
                </label>
                <input v-model="props.form.shopName" placeholder="اكتب اسم المتجر أو المؤسسة هنا" class="input-field" />
            </div>

            <!-- عدد الشحنات الشهرية -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    عدد الشحنات الشهرية
                </label>
                <input v-model="props.form.shipments" placeholder="مثال: 20" class="input-field" />
            </div>

            <!-- نوع المتجر -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    نوع المتجر
                </label>
                <input v-model="props.form.shopType" placeholder="رقم الطلب الخاص بك هنا" class="input-field" />
            </div>

            <!-- البريد -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    البريد الإلكتروني
                </label>
                <input v-model="props.form.email" placeholder="example@gmail.com" class="input-field" />
            </div>

            <!-- الجوال -->
            <div>
                <label class="text-start block text-white/60 text-sm mb-2">
                    رقم الجوال
                </label>
                <input v-model="props.form.phone" placeholder="اكتب رقم جوالك هنا" class="input-field" />
            </div>


        </div>
        <!-- الأسئلة -->
        <div>
            <label class="text-start block text-white/60 mt-8 text-sm mb-2">
                ما هي أهم أسئلتك
            </label>
            <textarea v-model="props.form.question" placeholder="اكتب هنا أهم الأسئلة المراد الاستفسار عنها"
                class="input-field h-36 resize-none"></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex justify-start mt-10 gap-4 ">
            <button @click="emit('back')" class="btn-secondary">
                السابق
            </button>

            <button @click="emit('next')" class="btn-primary">
                التالي
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
</style>
