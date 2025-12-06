<script setup>
import imgImage1 from '../../assets/why/1.png'
import imgImage2 from '../../assets/why/2.png'
import imgImage3 from '../../assets/why/3.png'
import imgImage4 from '../../assets/why/4.png'
import imgImage5 from '../../assets/why/5.png'

const items = [
  {
    img: imgImage1,
    title: 'تكامل سلس مع منصات التجارة',
    text: 'مثل سلة، زد، شوبيفاي.'
  },
  {
    img: imgImage2,
    title: 'تتبع لحظي وتقارير دقيقة',
    text: 'راقب أداء شحنتك من أي جهاز.'
  },
  {
    img: imgImage3,
    title: 'أسعار تفضيلية',
    text: 'بفضل شراكاتنا احصل على أسعار أقل من السوق.'
  },
  {
    img: imgImage4,
    title: 'ذكاء اصطناعي لاستخراج البيانات',
    text: 'لا تضيع وقتك في تعبئة البيانات، النظام يتولى الأمر.'
  },
  {
    img: imgImage5,
    title: 'مقارنة فورية بين شركات الشحن',
    text: 'قارن الأسعار والوقت والخدمات في لحظة.'
  }
]
</script>

<template>
  <section class="w-full py-24 bg-[#050814]">
    <h2 class="text-center text-white text-3xl font-bold mb-16" dir="rtl">لماذا شيب فلو</h2>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="group bg-[#0F1217] rounded-2xl px-2 pt-2 pb-4 flex flex-col items-center border border-white/5 transition-all duration-300"
      >
        <!-- IMAGE STACK -->
        <div
          class="relative w-full flex justify-center mb-6 h-40 rounded-xl overflow-hidden transition-all duration-300 bg-[#161B22] group-hover:bg-[#1E3A8A]"
        >
          <!-- LEFT shadow image -->
          <img
            :src="item.img"
            class="absolute top-[52px] left-6 w-[58%] h-full opacity-40 bottom-0 rounded-xl object-cover blur-[1px] transition-all duration-300 group-hover:top-[40px] group-hover:left-5 group-hover:rotate-[-6deg] group-hover:opacity-60"
          />

          <!-- RIGHT shadow image -->
          <img
            :src="item.img"
            class="absolute top-[52px] right-6 w-[58%] h-full opacity-40 bottom-0 rounded-xl object-cover blur-[1px] transition-all duration-300 group-hover:top-[40px] group-hover:right-5 group-hover:rotate-[8deg] group-hover:opacity-60"
          />

          <!-- MAIN image -->
          <img
            :src="item.img"
            class="relative top-[32px] w-[62%] rounded-xl object-cover shadow-xl transition-all duration-300 group-hover:top-[22px]"
          />
        </div>

        <!-- TEXT -->
        <h3 class="text-white text-lg font-semibold text-center mb-2" dir="rtl">
          {{ item.title }}
        </h3>

        <p class="text-white/60 text-sm text-center leading-6" dir="rtl">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>
