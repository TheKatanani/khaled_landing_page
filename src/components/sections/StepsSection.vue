<script setup>
import step3 from '../../assets/steps/step3.png'
import mouse from '../../assets/steps/mouse.svg'
import dashed from '../../assets/steps/dashed.svg'
</script>

<template>
  <section class="w-full py-24 bg-[#050814] relative">
    <!-- Title -->
    <h2 class="text-center text-white text-3xl font-bold mb-20" dir="rtl">
      بوليصة جاهزة في ثوانٍ، بذكاء اصطناعي يفهم بياناتك.
    </h2>

    <!-- Dashed Cross -->
    <!-- <div class="absolute left-1/2 top-[180px] -translate-x-1/2 z-0">
      <img :src="dashed" alt="dashed" class="w-full scale-[1.33]" />
    </div> -->
    <!-- Mobile vertical dashed line -->
    <div class="absolute left-1/2 top-[200px] -translate-x-1/2 z-0 md:hidden">
      <div class="w-px h-[1000px] border-l border-dashed border-[#6E7A8A]"></div>
    </div>
    <!-- Dashed Cross (Desktop only) -->
    <div class="absolute left-1/2 top-[180px] -translate-x-1/2 z-0 hidden md:block">
      <img :src="dashed" alt="dashed" class="w-full scale-[1.33]" />
    </div>

    <!-- Steps Wrapper -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 px-6 mt-48" dir="rtl">
      <!-- ========================================================= -->
      <!-- STEP 1 (No image — CSS mockup) -->
      <!-- ========================================================= -->
      <!-- STEP 1 -->
      <div class="relative flex flex-col items-center text-center group">
        <!-- Number -->
        <div class="absolute -top-10 z-10">
          <div class="w-20 h-20 rounded-full bg-[#0C121A] flex items-center justify-center">
            <div
              class="w-16 h-16 rounded-full bg-[#121922] text-white text-xl font-bold flex items-center justify-center"
            >
              01
            </div>
          </div>
        </div>

        <div
          class="bg-[#121922] border border-white/10 rounded-2xl w-full shadow-lg py-4 px-4 transition-all duration-300 group-hover:border-[#3B82F6]"
        >
          <!-- Your same box -->
          <div class="w-full h-44 rounded-xl bg-[#1D242C] mb-5 relative p-3">
            <!-- EXACT SAME STRUCTURE — only opacity added -->
            <div
              class="w-9/12 h-34 border-white/10 rounded-lg p-3 text-white/60 text-[0.7rem] text-right mr-auto"
            >
              <!-- ONLY THIS text fades in -->
              <div class="bg-[#0F1217] border border-[#6E7A8A] p-3 rounded-md">
                <div class="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p>الاسم العميل :</p>
                  <p>رقم الجوال :</p>
                  <p>مدينة العميل :</p>
                </div>
              </div>

              <!-- Your SAME BUTTONS — untouched -->
              <div class="flex gap-2 justify-end ml-auto mt-3 text-xs">
                <button class="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                  تحليل البيانات
                </button>
                <button class="bg-gray-500 text-white px-3 py-1 rounded-md text-sm">مسح</button>
              </div>
            </div>

            <!-- Your mouse — NO CLASSES added except animation -->
            <div
              class="absolute bottom-3 right-4 transition-all duration-500 group-hover:right-[55%] group-hover:bottom-[55%]"
            >
              <img :src="mouse" />
            </div>
          </div>

          <p class="text-white/70 text-sm leading-7">
            ارفع ملف الطلب أو أدخل بيانات بسيطة (الاسم العميل، المدينة، رقم الطلب)
          </p>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- STEP 2 (Cursor animation with no image) -->
      <!-- ========================================================= -->
      <!-- STEP 2 -->
      <div class="relative md:mt-20 flex flex-col items-center text-center group">
        <div class="absolute -top-10 z-10">
          <div class="w-20 h-20 rounded-full bg-[#0C121A] flex items-center justify-center">
            <div
              class="w-16 h-16 rounded-full bg-[#121922] text-white text-xl font-bold flex items-center justify-center"
            >
              02
            </div>
          </div>
        </div>

        <div
          class="bg-[#121922] border border-white/10 rounded-2xl w-full shadow-lg pt-4 pb-4 px-4 transition-all duration-300 group-hover:border-[#3B82F6]"
        >
          <!-- SAME structure as step 1 after hover -->
          <div class="w-full h-44 rounded-xl bg-[#1D242C] mb-5 relative p-3">
            <div
              class="w-9/12 h-34 border-white/10 rounded-lg p-3 text-white/60 text-[0.7rem] text-right mr-auto"
            >
              <div class="bg-[#0F1217] border border-[#6E7A8A] p-3 rounded-md">
                <p>الاسم :</p>
                <p>رقم الجوال :</p>
                <p>مدينة العميل :</p>
              </div>

              <div class="flex gap-2 justify-end ml-auto mt-3 text-xs">
                <button class="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                  تحليل البيانات
                </button>
                <button class="bg-gray-500 text-white px-3 py-1 rounded-md text-sm">مسح</button>
              </div>
            </div>

            <!-- Mouse moves ONLY -->
            <div
              class="absolute top-8 left-12 transition-all duration-500 group-hover:left-[40%] group-hover:top-[72%]"
            >
              <img :src="mouse" />
            </div>
          </div>

          <p class="text-white/70 text-sm leading-7">اضغط تحليل</p>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- STEP 3 (Original image remains) -->
      <!-- ========================================================= -->
      <div class="relative flex flex-col items-center text-center">
        <div class="absolute -top-10 z-10">
          <div class="w-20 h-20 rounded-full bg-[#0C121A] flex items-center justify-center">
            <div
              class="w-16 h-16 rounded-full bg-[#121922] text-white text-xl font-bold flex items-center justify-center"
            >
              03
            </div>
          </div>
        </div>

        <div
          class="bg-[#121922] border border-white/10 rounded-2xl w-full shadow-lg p-4 transition-all duration-300 hover:border-[#3B82F6]"
        >
          <div class="w-full h-44 rounded-xl overflow-hidden bg-black/20 mb-5 relative">
            <img :src="step3" class="absolute inset-0 w-full h-full object-cover opacity-90" />
          </div>

          <p class="text-white/70 text-sm leading-7 whitespace-pre-line">
            سيقوم النظام بملء كافة تفاصيل بوليصة الشحن لتكون جاهزة للطباعة أو الإرسال لشركة الشحن.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
