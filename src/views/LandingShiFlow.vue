<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="main max-h-screen overflow-x-hidden w-screen">
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>
