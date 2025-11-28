<script setup>
/*eslint-disable*/

import { useCounterStore } from '@/stores/counter';
import { ref, computed, onMounted } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const counterStore = useCounterStore()

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center p-8 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6">Welcome to Our App</h1>
      <p class="mb-6 text-gray-600">Please sign in or create an account to continue.</p>
      <div class="flex justify-center gap-4">
        <button
          @click="router.push({name: 'Signin'})"
          class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Sign In
        </button>
        <button
           @click="router.push({name: 'Signup'})"
          class="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>
