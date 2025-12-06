<script setup lang="ts">
import { computed, ref } from 'vue';
import Stepper from './Stepper.vue';

const props = defineProps<{ form: any }>();
const emit = defineEmits(["next"]);

// local selections
const selectedDay = ref(7);
const selectedMonth = ref("نوفمبر");
const selectedYear = ref(2025);
const hour = ref("10");
const minute = ref("30");
const period = ref("صباحاً");

// build preview
const preview = computed(() => {
    return `${hour.value}:${minute.value} ${period.value} ، ${selectedDay.value} ${selectedMonth.value} ${selectedYear.value}`;
});

function submitStep() {
    props.form.selectedDate = `${selectedDay.value} ${selectedMonth.value} ${selectedYear.value}`;
    props.form.selectedTime = `${hour.value}:${minute.value} ${period.value}`;
    emit("next");
}
</script>

<template>
    <div class="w-full text-white" dir="rtl">

        <!-- HEADER -->
        <div class="flex flex-wrap gap-4 items-center mb-8">
            <h2 class="text-xl sm:text-2xl font-semibold">احجز موعدك الآن</h2>
            <Stepper :currentStep="1" />
        </div>

        <!-- RESPONSIVE GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <!-- CALENDAR SIDE -->
            <div>

                <!-- Month & Year -->
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <!-- Month -->
                    <div class="flex-1">
                        <label class="text-sm text-white/60">الشهر</label>
                        <select v-model="selectedMonth"
                            class="w-full px-3 py-2 rounded-md mt-1 bg-[#161B22] text-white border border-white/10">
                            <option>يناير</option>
                            <option>فبراير</option>
                            <option>مارس</option>
                            <option>أبريل</option>
                            <option>مايو</option>
                            <option>يونيو</option>
                            <option>يوليو</option>
                            <option>أغسطس</option>
                            <option>سبتمبر</option>
                            <option>أكتوبر</option>
                            <option>نوفمبر</option>
                            <option>ديسمبر</option>
                        </select>
                    </div>

                    <!-- Year -->
                    <div class="flex-1">
                        <label class="text-sm text-white/60">العام</label>
                        <select v-model="selectedYear"
                            class="w-full px-3 py-2 rounded-md mt-1 bg-[#161B22] text-white border border-white/10">
                            <option v-for="y in [2024, 2025, 2026]" :key="y">{{ y }}</option>
                        </select>
                    </div>
                </div>

                <!-- Calendar -->
                <div class="grid grid-cols-7 gap-1 sm:gap-2 text-center">

                    <div class="text-white/50 text-xs sm:text-sm"
                        v-for="d in ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']"
                        :key="d">
                        {{ d }}
                    </div>

                    <div v-for="day in 30" :key="day"
                        @click="selectedDay = day"
                        class="py-2 sm:py-3 rounded-lg cursor-pointer border border-transparent text-xs sm:text-sm"
                        :class="selectedDay === day
                            ? 'bg-[#1A74FF] text-white'
                            : 'bg-[#161B22] text-white/70 hover:bg-[#1D2230]'">
                        {{ day }}
                    </div>

                </div>

            </div>

            <!-- DATE PICKER SIDE -->
            <div>

                <!-- Time Selectors -->
                <div class="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-6">

                    <!-- Period -->
                    <div class="flex-1 min-w-[120px]">
                        <label class="block text-sm text-white/60 mb-1">الحالة</label>
                        <select v-model="period"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10">
                            <option>صباحاً</option>
                            <option>مساءً</option>
                        </select>
                    </div>

                    <!-- Minute -->
                    <div class="flex-1 min-w-[120px]">
                        <label class="block text-sm text-white/60 mb-1">الدقيقة</label>
                        <select v-model="minute"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10">
                            <option>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                        </select>
                    </div>

                    <!-- Hour -->
                    <div class="flex-1 min-w-[120px]">
                        <label class="block text-sm text-white/60 mb-1">الساعة</label>
                        <select v-model="hour"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10">
                            <option v-for="n in 12" :key="n">{{ n }}</option>
                        </select>
                    </div>

                </div>

                <!-- Preview -->
                <p class="text-white/70 text-sm mb-2">التوقيت المحدد</p>

                <div class="bg-[#161B22] rounded-xl px-4 sm:px-6 py-4 sm:py-5 
                            text-base sm:text-lg font-medium mb-6">
                    {{ preview }}
                </div>

                <!-- Next Button -->
                <button @click="submitStep"
                    class="w-full py-3 bg-[#1A74FF] hover:bg-[#006DFF] rounded-xl
                           text-center text-white text-base sm:text-lg font-medium">
                    تأكيد ومتابعة
                </button>

            </div>

        </div>

    </div>
</template>
