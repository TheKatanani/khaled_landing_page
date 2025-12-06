<script setup lang="ts">
import { ref } from 'vue';
import TrackResult from './TrackResult.vue';

const showTrackResult = ref(false);
const orderNumber = ref('');

const trackData = ref({
    name: "هشام موسى",
    orderNumber: "",
    status: "مكتملة",
    statusColor: "#103C32",
    dotColor: "#22C55E"
});

function submitTracking() {
    if (!orderNumber.value.trim()) return;

    // Simulated API result
    trackData.value.orderNumber = orderNumber.value;

    showTrackResult.value = true;
}

function resetTracking() {
    showTrackResult.value = false;
    orderNumber.value = '';
}
</script>

<template>
    <div dir="rtl">
        <Transition name="fade" mode="out-in">

            <!-- FORM -->
            <div v-if="!showTrackResult" key="form">
                <img src="../../assets/popupimg.png" class="mx-auto h-32 mb-4" />

                <h2 class="text-center text-white font-semibold mb-2 text-xl">
                    تتبع حالة شحنتك بلحظة
                </h2>

                <p class="text-white/60 text-center text-sm mb-4">
                    أدخل رقم طلبك للتعرف على آخر تحديثات شحنتك.
                </p>

                <label class="text-white/70 text-sm block mb-1">
                    أدخل رقم الطلب
                </label>

                <input v-model="orderNumber" type="text" placeholder="رقم الطلب الخاص بك هنا" class="w-full mb-4 rounded-md bg-[#161B22] text-white px-3 py-2
                           border border-white/10 outline-none
                           focus:border-[#1A74FF] transition-colors" @keyup.enter="submitTracking" />

                <button @click="submitTracking"
                    class="w-full bg-[#1A74FF] hover:bg-[#006DFF] text-white py-2 rounded-lg transition-colors">
                    تتبع الآن
                </button>
            </div>

            <!-- RESULT -->
            <TrackResult v-else key="result" :data="trackData" @back="resetTracking" />

        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
