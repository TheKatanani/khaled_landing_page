<script setup lang="ts">
import StatsGridCircle from './StatsGridCircle.vue';
</script>

<template>
  <div class="w-80 h-80 relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">

      <!-- Vertical Lines -->
      <div
        class="absolute left-[35%] top-0 w-px h-full bg-[linear-gradient(to_bottom,black,#A3A3A499,black)]"
      >
        <span class="spark" style="left:-3px; top:0; animation: sparkMoveVertical 2s linear infinite"></span>
      </div>

      <div
        class="absolute left-[50%] top-14 w-px h-[80%] bg-[linear-gradient(to_bottom,black,#A3A3A499,black)]"
      >
        <span class="spark" style="left:-3px; top:0; animation: sparkMoveVertical 2.3s linear infinite"></span>
      </div>

      <div
        class="absolute left-[65%] top-24 w-px h-[67%] bg-[linear-gradient(to_bottom,black,#A3A3A499,black)]"
      >
        <span class="spark" style="left:-3px; top:0; animation: sparkMoveVertical 2.6s linear infinite"></span>
      </div>

      <div
        class="absolute left-[80%] bottom-5 w-px h-[50%] bg-[linear-gradient(to_bottom,black,#A3A3A499,black)]"
      >
        <span class="spark" style="left:-3px; top:0; animation: sparkMoveVertical 2.9s linear infinite"></span>
      </div>


      <!-- Horizontal Lines -->
      <div
        class="absolute top-[20%] left-10 h-px w-[30%] bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      >
        <span class="spark" style="top:-3px; left:0; animation: sparkMoveHorizontal 2.1s linear infinite"></span>
      </div>

      <div
        class="absolute top-[35%] left-10 h-px w-[40%] bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      >
        <span class="spark" style="top:-3px; left:0; animation: sparkMoveHorizontal 2.4s linear infinite"></span>
      </div>

      <div
        class="absolute top-[50%] left-10 h-px w-[50%] bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      >
        <span class="spark" style="top:-3px; left:0; animation: sparkMoveHorizontal 2.7s linear infinite"></span>
      </div>

      <div
        class="absolute top-[65%] left-10 h-px w-[60%] bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      >
        <span class="spark" style="top:-3px; left:0; animation: sparkMoveHorizontal 3s linear infinite"></span>
      </div>

      <div
        class="absolute top-[80%] left-10 h-px w-[70%] bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      >
        <span class="spark" style="top:-3px; left:0; animation: sparkMoveHorizontal 3.2s linear infinite"></span>
      </div>


      <!-- Circles -->
      <StatsGridCircle x="50%" y="20%" />
      <StatsGridCircle x="35%" y="50%" />
      <StatsGridCircle x="65%" y="50%" />
      <StatsGridCircle x="50%" y="80%" />
      <StatsGridCircle x="80%" y="80%" />

    </div>
  </div>
</template>

<style scoped>
/* Spark animation */
@keyframes sparkMoveHorizontal {
  0% { left: 0%; opacity: 0; }
  20% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}

@keyframes sparkMoveVertical {
  0% { top: 0%; opacity: 0; }
  20% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.spark {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow:
    0 0 6px #60a5fa,
    0 0 12px #3b82f6;
}
</style>
