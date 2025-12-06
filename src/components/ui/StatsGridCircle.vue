<template>
  <span class="circle" :style="{ left: x, top: y }"> </span>
</template>

<script setup lang="ts">
defineProps<{
  x: string // "50%"
  y: string // "20%"
}>()
</script>
<style scoped>
.circle {
  position: absolute;
  width: 3.5rem; /* w-14 */
  height: 3.5rem; /* h-14 */
  margin-left: -1.75rem; /* -ml-7 */
  margin-top: -1.75rem; /* -mt-7 */
  border-radius: 9999px;
  border: 1px solid #161b22;
  background: rgba(255, 255, 255, 0.2);
}
.circle::after {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  background: #161b22;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
