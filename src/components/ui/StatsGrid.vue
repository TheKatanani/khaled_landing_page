<script setup lang="ts">
import { computed } from "vue"

// props: left || right
const props = defineProps<{
  side: "left" | "right"
}>()

// اختيار الاتجاه
const isLeft = computed(() => props.side === "left")

// تحكم في التوزيع (نفس النقاط التي عملتها)
const circles = [
  { x: "50%", y: "20%" },
  { x: "35%", y: "50%" },
  { x: "65%", y: "50%" },
  { x: "50%", y: "80%" },
]

// اليمين له نقطة إضافية مختلفة عن اليسار
if (props.side === "right") circles.push({ x: "20%", y: "80%" })
else circles.push({ x: "80%", y: "80%" })

</script>

<template>
  <div class="w-80 h-80 relative overflow-hidden pointer-events-none">

    <!-- Vertical Lines -->
    <div
      v-for="(offset, i) in [35, 50, 65, 80]"
      :key="'v'+i"
      class="absolute top-0 w-px bg-[linear-gradient(to_bottom,black,#A3A3A499,black)]"
      :class="isLeft ? 'left-['+offset+'%]' : 'right-['+offset+'%]'"
      :style="i === 0
        ? ''
        : i === 1
          ? 'height:80%; top:3.5rem'
          : i === 2
            ? 'height:67%; top:6rem'
            : 'height:50%; bottom:1.25rem'
      "
    ></div>

    <!-- Horizontal Lines -->
    <div
      v-for="(w, i) in ['30%','40%','50%','60%','70%']"
      :key="'h'+i"
      class="absolute h-px bg-[linear-gradient(to_left,black,#A3A3A499,black)]"
      :class="isLeft ? 'left-10' : 'right-10 bg-[linear-gradient(to_right,black,#A3A3A499,black)]'"
      :style="'top: calc('+(20 + i*15)+'%); width:'+w"
    ></div>

    <!-- Circles -->
    <span
      v-for="(c, i) in circles"
      :key="'c'+i"
      class="absolute w-14 h-14 border border-[#3A3A3A] rounded-full flex items-center justify-center"
      :style="`
        top: ${c.y};
        ${isLeft ? `left:${c.x}` : `right:${c.x}`};
        margin-left:-28px;
        margin-top:-28px;
      `"
    >
      <span class="absolute w-[80%] h-[80%] rounded-full bg-[#1a1d29]"></span>
    </span>

  </div>
</template>

<style scoped>
/* Same circle style for both sides */
</style>
