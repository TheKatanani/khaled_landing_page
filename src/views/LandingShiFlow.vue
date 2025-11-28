<script setup>
/*eslint-disable*/
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();


</script>
<template>
  <div class="main max-h-screen overflow-x-hidden overflow-y-hidden w-screen hidescrollbar" style="direction:ltr;">

    <div class="">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
.hidescrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>