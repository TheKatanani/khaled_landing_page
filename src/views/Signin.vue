<script setup>
import ImageSlider from '@/components/ui/ImageSlider.vue'
import { slides } from '@/data/sliderData'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

function handleSubmit(e) {
  e.preventDefault()
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 900)
}
</script>

<template>
  <div class="min-h-screen bg-[#0C0F16] flex items-center justify-center px-6">
    <div class="w-full max-w-5xl bg-[#11141C] rounded-2xl overflow-hidden flex shadow-2xl"
      style="box-shadow: 0 0 50px rgba(0, 0, 0, 0.4)">
      <!-- LEFT FORM -->
      <div class="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center text-white">
        <!-- LOGO -->
        <div class="flex justify-center mb-6">
          <img src="../assets/logos/logo.svg" alt="logo" class="w-20 opacity-95" />
        </div>

        <!-- TITLE -->
        <h2 class="text-center text-2xl font-semibold mb-3">
          {{ $t('auth.loginTitle') }}
        </h2>

        <!-- TEXT + SIGNUP -->
        <p class="text-center text-sm text-gray-400 mb-8">
          {{ $t('auth.noAccountQuestion') }}
          <button @click="router.push({ name: 'Signup' })" class="text-blue-400 hover:underline ml-1">
            {{ $t('auth.signup') }}
          </button>
        </p>

        <!-- GOOGLE BUTTON -->
        <button
          class="w-full h-[52px] rounded-full bg-[#1A1D26] hover:bg-[#1F222D] border border-[#2C2F36] transition flex items-center justify-center gap-3 text-base font-medium mb-3">
          <img src="../assets/icons/google.svg" class="w-5" />
          {{ $t('auth.signinGoogle') }}
        </button>

        <!-- APPLE BUTTON -->
        <button
          class="w-full h-[52px] rounded-full bg-[#1A1D26] hover:bg-[#1F222D] border border-[#2C2F36] transition flex items-center justify-center gap-3 text-base font-medium">
          <img src="../assets/icons/apple.svg" class="w-5" />
          {{ $t('auth.signinApple') }}
        </button>

        <!-- OR DIVIDER -->
        <div class="flex items-center gap-3 my-8">
          <div class="flex-1 h-[1px] bg-[#2C2F36]"></div>
          <span class="text-gray-500 text-sm">{{ $t('auth.or') }}</span>
          <div class="flex-1 h-[1px] bg-[#2C2F36]"></div>
        </div>

        <!-- FORM -->
        <form class="space-y-6" @submit="handleSubmit">
          <!-- EMAIL -->
          <div>
            <label class="block mb-1 text-xs font-medium text-gray-300 uppercase tracking-wide">
              {{ $t('auth.email') }} <span class="text-green-500">*</span>
            </label>

            <input v-model="email" type="email"
              class="w-full h-[52px] px-4 rounded-xl bg-transparent border border-[#2C2F36] focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none transition text-sm"
              :placeholder="$t('auth.emailPlaceholder')" />
          </div>

          <!-- PASSWORD -->
          <div>
            <label class="block mb-1 text-xs font-medium text-gray-300 uppercase tracking-wide">
              {{ $t('auth.password') }}
            </label>

            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" v-model="password"
                class="w-full h-[52px] px-4 pr-12 rounded-xl bg-transparent border border-[#2C2F36] focus:border-blue-500 focus:ring-2 focus:ring-blue-600 outline-none transition text-sm"
                :placeholder="$t('auth.passwordPlaceholder')" />

              <img src="../assets/icons/eye.svg"
                class="w-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100"
                @click="showPassword = !showPassword" />
            </div>

            <button class="text-right w-full text-xs text-red-500 mt-1 hover:underline">
              {{ $t('auth.forgotPassword') }}
            </button>
          </div>

          <!-- SUBMIT -->
          <button type="submit"
            class="w-full h-[52px] rounded-full bg-gradient-to-r from-[#2d7dff] to-[#1b5cff] hover:opacity-90 transition flex justify-center items-center gap-2 text-base font-semibold mt-2">
            <div v-if="loading" class="loader"></div>
            <span>{{ $t('auth.signinButton') }}</span>
          </button>
        </form>
      </div>

      <!-- RIGHT ILLUSTRATION -->
      <div class="hidden lg:block w-1/2">
        <ImageSlider :slides="slides" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.loader {
  border: 3px solid #ffffff40;
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
