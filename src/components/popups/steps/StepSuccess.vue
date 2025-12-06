<script setup>
import successImg from "../../../assets/successImg.png";
const emit = defineEmits(["close"]);
</script>

<template>
    <div class="text-center text-white max-w-[400px] mx-auto">
        <img :src="successImg" class="h-24 mx-auto mb-4" />

        <h2 class="text-xl font-bold mb-3">تم حجز الموعد بنجاح!</h2>

        <p class="text-white/70 text-sm leading-relaxed mb-6">
            متحمسون للتواصل معك في الموعد المحدد للإجابة على كل أسئلتك.
            سنتواصل معك قريباً عبر الإيميل ورقم الهاتف الخاص بك.
        </p>

        <button @click="emit('close')"
            class="w-full bg-[#1A74FF] hover:bg-[#006DFF] text-white py-3 rounded-xl transition">
            حسناً
        </button>
    </div>
</template>
