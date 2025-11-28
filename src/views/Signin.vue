<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const router = useRouter()


</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-100 rtl">
    <div class="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
      <h2 class="text-center mb-5 text-gray-800 text-2xl font-semibold">تسجيل الدخول</h2>

      <form class="flex flex-col">
        <label class="mb-1 font-bold text-gray-600">البريد الإلكتروني</label>
        <input
          type="email"
          
          class="mb-4 p-3 border border-gray-300 rounded-md text-base"
        />

        <label class="mb-1 font-bold text-gray-600">كلمة المرور</label>
        <input
          type="password"
          
          class="mb-4 p-3 border border-gray-300 rounded-md text-base"
        />

        <button 
          type="submit" 
          class="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg"
          
        >
          <span >
            <div class="loader"></div>
          </span>
          <span >إرسال كود التحقق</span>
        </button>
      </form>

      <form  class="flex flex-col">
        <label class="mb-1 font-bold text-gray-600">أدخل كود التحقق</label>
        <input
          type="text"
          
          class="mb-4 p-3 border border-gray-300 rounded-md text-base"
        />

        <button 
          type="submit" 
          class="mt-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-lg"
          
        >
          <span >
            <div class="loader"></div>
          </span>
          <span >تأكيد الكود</span>
        </button>
      </form>

      <div  class="text-red-600 text-sm mt-4 text-center">
        <!-- {{ error }} -->
      </div>

      <div  class="mt-4 text-center">
        <button  class="text-blue-600 hover:underline">
          العودة إلى صفحة تسجيل الدخول
        </button>
      </div>

      <div class="mt-6 text-center text-gray-600 text-sm flex justify-center items-center space-x-1 rtl:space-x-reverse">
        <p>ليس لديك حساب؟</p>
        <div
          class="text-blue-600 cursor-pointer font-semibold hover:underline"
          
        >
          إنشاء حساب
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  border: 4px solid #ffffff40;
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
