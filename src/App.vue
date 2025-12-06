<script setup>
/*eslint-disable*/
import { RouterView } from 'vue-router'
import AppPopup from "@/components/ui/AppPopup.vue";
import TrackOrder from "@/components/popups/TrackOrder.vue";
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <RouterView />
    <AppPopup>
      <TrackOrder />
    </AppPopup>
  </div>
</template>
