<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// assets
import smsaLogo from '../../assets/smsa_colors.svg'

const { t, locale } = useI18n()
const isArabic = computed(() => locale.value === 'ar')

const rows = ref([
  {
    id: 1,
    company: 'SMSA',
    logo: smsaLogo,
    rating: 4.5,
    service_ar: 'شحن مخازن',
    service_en: 'Warehouse Shipping',
    duration_ar: '1 – 3 أيام عمل',
    duration_en: '1–3 Business Days',
    pickup_ar: 'تسليم الشحن',
    pickup_en: 'Drop-off',
    delivery_ar: 'الاستلام للشحن',
    delivery_en: 'Pickup for Shipping',
    price: '15'
  },
  {
    id: 2,
    company: 'SMSA',
    logo: smsaLogo,
    rating: 4.5,
    service_ar: 'شحن سريع',
    service_en: 'Express Shipping',
    duration_ar: '1 – 3 أيام عمل',
    duration_en: '1–3 Business Days',
    pickup_ar: 'تسليم الشحن',
    pickup_en: 'Drop-off',
    delivery_ar: 'الاستلام للشحن',
    delivery_en: 'Pickup for Shipping',
    price: '15'
  },
  {
    id: 3,
    company: 'SMSA',
    logo: smsaLogo,
    rating: 4.5,
    service_ar: 'شحن مخازن',
    service_en: 'Warehouse Shipping',
    duration_ar: '1 – 3 أيام عمل',
    duration_en: '1–3 Business Days',
    pickup_ar: 'تسليم الشحن',
    pickup_en: 'Drop-off',
    delivery_ar: 'الاستلام للشحن',
    delivery_en: 'Pickup for Shipping',
    price: '15'
  },
  {
    id: 4,
    company: 'SMSA',
    logo: smsaLogo,
    rating: 4.5,
    service_ar: 'شحن مخازن',
    service_en: 'Warehouse Shipping',
    duration_ar: '1 – 3 أيام عمل',
    duration_en: '1–3 Business Days',
    pickup_ar: 'تسليم الشحن',
    pickup_en: 'Drop-off',
    delivery_ar: 'الاستلام للشحن',
    delivery_en: 'Pickup for Shipping',
    price: '15'
  }
])

const selectedId = ref(null)
function selectRow(id) {
  selectedId.value = id
}
</script>

<template>
  <section id="pricing" :class="isArabic ? 'rtl' : 'ltr'" class="py-20 px-4 text-white relative">

    <div
      class="relative z-10 max-w-7xl mx-auto bg-[#161B22] border border-white/5 rounded-3xl shadow-2xl p-6 backdrop-blur-xl">
      <!-- Background shadows -->
      <div
        class="absolute -bottom-[2rem] -left-[1rem] -right-[1rem] top-20 md:-bottom-16 md:-left-16 md:-right-16 md:top-40 rounded-[60px] bg-white opacity-[0.03]">
      </div>
      <div class="absolute -bottom-8 -left-8 -right-8 top-20 rounded-[40px] bg-white opacity-[0.04] hidden md:block">
      </div>

      <!-- FULL TABLE CONTAINER (Mobile scrollable) -->
      <div class="overflow-x-auto">

        <!-- TABLE HEADER -->
        <div class="min-w-[650px] md:min-w-0 grid grid-cols-6 
                 px-3 md:px-6 py-3 md:py-4 
                 rounded-full text-white/70 bg-[#0F1217] 
                 text-[10px] md:text-sm font-medium">
          <div>{{ t('landing.table.company') }}</div>
          <div>{{ t('landing.table.service') }}</div>
          <div>{{ t('landing.table.duration') }}</div>
          <div>{{ t('landing.table.pickup') }}</div>
          <div>{{ t('landing.table.price') }}</div>
          <div class="text-center">{{ t('landing.table.action') }}</div>
        </div>

        <!-- TABLE ROWS -->
        <div class="mt-4 space-y-4 min-w-[650px] md:min-w-0">

          <div v-for="row in rows" :key="row.id" @click="selectRow(row.id)" class="group grid grid-cols-6 items-center
                   px-3 md:px-6 py-3 md:py-4 
                   rounded-xl md:rounded-full cursor-pointer transition 
                   backdrop-blur-md border overflow-hidden 
                   text-[10px] md:text-sm
                   gap-2 md:gap-0" :class="row.id === selectedId
                    ? 'bg-[#161B22] border-[#1B5CFF]/40 shadow-[0_0_20px_rgba(0,102,255,0.35)]'
                    : 'bg-[#161B22]/40 border-white/5 hover:bg-[#161B22] hover:border-[#1B5CFF]/40 hover:shadow-[0_0_20px_rgba(0,102,255,0.35)]'
                    ">
            <!-- COMPANY -->
            <div class="flex items-center gap-2 md:gap-3">
              <img :src="row.logo" :alt="row.company + ' Logo'" class="w-8 md:w-12" />
              <div class="flex flex-col">
                <span class="font-semibold">{{ row.company }}</span>
                <span class="text-yellow-400 flex items-center gap-1">
                  ⭐ {{ row.rating }}/5.0
                </span>
              </div>
            </div>

            <!-- SERVICE -->
            <div>{{ isArabic ? row.service_ar : row.service_en }}</div>

            <!-- DURATION -->
            <div>{{ isArabic ? row.duration_ar : row.duration_en }}</div>

            <!-- PICKUP -->
            <div>{{ isArabic ? row.pickup_ar : row.pickup_en }}</div>

            <!-- PRICE -->
            <div class="font-bold flex items-center gap-1">
              <span class="opacity-70">{{ isArabic ? '﷼' : 'SAR' }}</span>
              {{ row.price }}
            </div>

            <!-- ACTION -->
            <div class="flex justify-center">
              <button class="px-3 md:px-5 py-1.5 md:py-2 rounded-full 
                       text-[9px] md:text-sm font-medium transition" :class="row.id === selectedId
                        ? 'bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white shadow-lg'
                        : 'border border-white/20 text-white/80 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#2D7DFF] group-hover:to-[#1B5CFF] group-hover:text-white group-hover:shadow-lg'
                        ">
                {{ t('landing.table.orderNow') }}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.rtl {
  direction: rtl;
  text-align: right;
}

.ltr {
  direction: ltr;
  text-align: left;
}
</style>
