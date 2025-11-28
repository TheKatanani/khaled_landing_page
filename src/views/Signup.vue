<script setup>
/*eslint-disable*/
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'


const counterStore = useCounterStore()
const router = useRouter()

</script>

<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-xl shadow-md max-w-md w-full rtl">
            <h2 class="text-center mb-5 text-gray-800 text-2xl font-semibold">إنشاء حساب</h2>
            <form class="flex flex-col">
<div class="font-semibold text-gray-600">الاسم الكامل</div>
<label>
    <input 
        type="text" 
        
        class="
            w-full p-3 border rounded-md mt-1 text-base
            
        "
    />
</label>
<p  class="text-red-500 text-sm mt-1">
    <!--{{ errors.username[0] }}-->
</p>
                <div class="mt-2 font-semibold text-gray-600">رقم الجوال</div>
                <label>
                    <input type="text"
                        class="w-full p-3 border border-gray-300 rounded-md mt-1 text-base"
                        placeholder="مثل: 0501234567" />
                </label>
<div class="mt-2 font-semibold text-gray-600">البريد الإلكتروني</div>
<label>
    <input 
        type="email" 
        
        class="
            w-full p-3 border rounded-md mt-1 text-base',
            border-red-500' : 'border-gray-300'
        "
    />
</label>
<p  class="text-red-500 text-sm mt-1">
   <!--  {{ errors.email[0] }} -->
</p>
                <div class="mt-2 font-semibold text-gray-600">المدينة</div>
                 <input type="text"
                        class="w-full p-3 border border-gray-300 rounded-md mt-1 text-base">
                <div class="mt-2 font-semibold text-gray-600">الدولة</div>
                <select  class="w-full p-3 border border-gray-300 rounded-md mt-1 text-base">
                   <!-- <option v-for="item in counterStore.state.nation" :key="item.value" :value="item.value">
                        {{ item.label_ar }}
                    </option> -->
                </select>
                
                <div class="mt-2 font-semibold text-gray-600">كلمة المرور</div>
                <label>
                    <input type="password"
                        class="w-full p-3 border border-gray-300 rounded-md mt-1 text-base" />
                </label>

                <button type="submit"
                    class="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-lg cursor-pointer">
                    إنشاء
                </button>

                <div
                    class="mt-5 text-center text-gray-600 text-sm flex justify-center items-center space-x-1 rtl:space-x-reverse">
                    <p>لديك حساب؟</p>
                    <div class="text-blue-600 cursor-pointer font-semibold hover:underline"
                        >
                        تسجيل الدخول
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
