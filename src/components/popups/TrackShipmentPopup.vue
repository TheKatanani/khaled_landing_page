<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(["back"]);
</script>

<template>
    <div dir="rtl" class="w-full bg-[#0F1217] rounded-2xl p-6 text-white shadow-lg border border-white/5">
        <h2 class="text-center text-xl font-semibold mb-6">
            بيانات الطلب
        </h2>

        <!-- Name -->
        <label class="text-white/60 text-sm block mb-2">اسم صاحب الطلب</label>
        <input :value="data.name" readonly
            class="w-full rounded-lg bg-[#161B22] px-4 py-3 mb-4 text-white border border-white/10" />

        <!-- Order Number -->
        <label class="text-white/60 text-sm block mb-2">رقم الشحنة</label>
        <input :value="data.orderNumber" readonly
            class="w-full rounded-lg bg-[#161B22] px-4 py-3 mb-4 text-white border border-white/10" />

        <!-- Status -->
        <label class="text-white/60 text-sm block mb-2">حالة الشحنة</label>

        <div class="w-full rounded-lg px-4 py-3 mb-6 flex items-center justify-between"
            :style="{ background: data.statusColor }">
            <span class="text-white font-medium">{{ data.status }}</span>

            <span class="w-3 h-3 rounded-full" :style="{ background: data.dotColor }"></span>
        </div>

        <button @click="emit('back')"
            class="w-full bg-[#1A74FF] hover:bg-[#006DFF] text-white py-3 rounded-xl text-lg transition-colors">
            حسناً
        </button>
    </div>
</template>
