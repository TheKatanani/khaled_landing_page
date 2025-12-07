<script setup lang="ts">
import { computed, ref } from 'vue';
import Stepper from './Stepper.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{ form: any }>();
const emit = defineEmits(["next"]);

// local selections
const now = new Date();
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const selectedDay = ref(now.getDate());
const selectedMonth = ref(months[now.getMonth()]);
const selectedYear = ref(now.getFullYear());
const hour = ref("5");
const minute = ref("30");
const period = ref("PM");

// build preview
const preview = computed(() => {
    return `${hour.value}:${minute.value} ${period.value} ، ${selectedDay.value} ${selectedMonth.value} ${selectedYear.value}`;
});

function selectDay(day: number) {
    if (isFriday(day)) return;
    selectedDay.value = day;
}

function isFriday(day: number) {
    // Note: This simple check assumes the month is current or static. 
    // Ideally use real date objects. optimizing for current requirement.
    const monthIndex = months.indexOf(selectedMonth.value);
    const year = selectedYear.value;
    const date = new Date(year, monthIndex, day);
    return date.getDay() === 5; // 5 is Friday
}

function isDaySelected(day: number) {
    return selectedDay.value === day;
}

function submitStep() {
    props.form.selectedDate = `${selectedDay.value} ${selectedMonth.value} ${selectedYear.value}`;
    props.form.selectedTime = `${hour.value}:${minute.value} ${period.value}`;
    emit("next");
}
</script>

<template>
    <div class="w-full text-white">

        <!-- HEADER -->
        <div class="flex flex-wrap gap-4 items-center mb-8 mx-5">
            <h2 class="text-xl sm:text-2xl font-semibold">{{ t('booking.step1.title') }}</h2>
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
                        <label class="text-sm text-white/60">{{ t('booking.step1.monthLabel') }}</label>
                        <select v-model="selectedMonth" :aria-label="t('booking.step1.monthLabel')"
                            class="w-full px-3 py-2 rounded-md mt-1 bg-[#161B22] text-white border border-white/10">
                            <option value="January">{{ t('booking.step1.months.jan') }}</option>
                            <option value="February">{{ t('booking.step1.months.feb') }}</option>
                            <option value="March">{{ t('booking.step1.months.mar') }}</option>
                            <option value="April">{{ t('booking.step1.months.apr') }}</option>
                            <option value="May">{{ t('booking.step1.months.may') }}</option>
                            <option value="June">{{ t('booking.step1.months.jun') }}</option>
                            <option value="July">{{ t('booking.step1.months.jul') }}</option>
                            <option value="August">{{ t('booking.step1.months.aug') }}</option>
                            <option value="September">{{ t('booking.step1.months.sep') }}</option>
                            <option value="October">{{ t('booking.step1.months.oct') }}</option>
                            <option value="November">{{ t('booking.step1.months.nov') }}</option>
                            <option value="December">{{ t('booking.step1.months.dec') }}</option>
                        </select>
                    </div>

                    <!-- Year -->
                    <div class="flex-1">
                        <label class="text-sm text-white/60">{{ t('booking.step1.yearLabel') }}</label>
                        <select v-model="selectedYear" :aria-label="t('booking.step1.yearLabel')"
                            class="w-full px-3 py-2 rounded-md mt-1 bg-[#161B22] text-white border border-white/10">
                            <option v-for="y in [2024, 2025, 2026]" :key="y">{{ y }}</option>
                        </select>
                    </div>
                </div>

                <!-- Calendar -->
                <div class="grid grid-cols-7 gap-1 sm:gap-2 text-center">

                    <div class="text-white/50 text-xs sm:text-sm"
                        v-for="d in ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']" :key="d">
                        {{ d }}
                    </div>

                    <div v-for="day in 30" :key="day" @click="selectDay(day)"
                        class="py-2 sm:py-3 rounded-lg border border-transparent text-xs sm:text-sm" :class="[
                            isDaySelected(day) ? 'bg-[#1A74FF] text-white' : 'bg-[#161B22] text-white/70',
                            isFriday(day) ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:bg-[#1D2230]'
                        ]">
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
                        <label class="block text-sm text-white/60 mb-1">{{ t('booking.step1.periodLabel') }}</label>
                        <input type="text" :value="t('booking.step1.pm')" readonly
                            :aria-label="t('booking.step1.periodLabel')"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10" />
                    </div>

                    <!-- Minute -->
                    <div class="flex-1 min-w-[120px]">
                        <label class="block text-sm text-white/60 mb-1">{{ t('booking.step1.minuteLabel') }}</label>
                        <select v-model="minute" :aria-label="t('booking.step1.minuteLabel')"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10">
                            <option>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                        </select>
                    </div>

                    <!-- Hour -->
                    <div class="flex-1 min-w-[120px]">
                        <label class="block text-sm text-white/60 mb-1">{{ t('booking.step1.hourLabel') }}</label>

                        <select v-model="hour" :aria-label="t('booking.step1.hourLabel')"
                            class="w-full px-3 py-2 rounded-md bg-[#161B22] text-white border border-white/10">
                            <option selected value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>


                </div>

                <!-- Preview -->
                <p class="text-white/70 text-sm mb-2">{{ t('booking.step1.selectedTime') }}</p>

                <div class="bg-[#161B22] rounded-xl px-4 sm:px-6 py-4 sm:py-5 
                            text-base sm:text-lg font-medium mb-6">
                    {{ preview }}
                </div>

                <!-- Next Button -->
                <button @click="submitStep" class="w-full py-3 bg-[#1A74FF] hover:bg-[#006DFF] rounded-xl
                           text-center text-white text-base sm:text-lg font-medium">
                    {{ t('booking.step1.confirmAndContinue') }}
                </button>

            </div>

        </div>

    </div>
</template>
