<script setup lang="ts">
import NetworkNode from '../ui/NetworkNode.vue'
import { networkData } from '../../data/networkNodes'
import logoCenter from '../../assets/logos/logo.svg'
// import logoPartner from "../../assets/logos/logo.svg"
</script>

<template>
  <section class="
    relative w-full min-h-[520px] flex items-center justify-center overflow-hidden

    rotate-90 origin-center scale-[0.75]
    sm:scale-[0.85]
    md:scale-[0.9]

    lg:rotate-0 lg:scale-100
  ">
    <!-- CENTER NODE -->
    <div
      class="relative z-20 w-[92px] h-[92px] rounded-full bg-[#111827] border border-[#262C3A] flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.85)]">
      <div
        class="w-[76px] h-[76px] rounded-full bg-gradient-to-br from-[#1A74FF] to-[#00C0E8] flex items-center justify-center">
        <div class="w-[60px] h-[60px] rounded-full bg-[#0F1217] flex items-center justify-center">
          <img :src="logoCenter" class="w-10 h-10 object-contain" />
        </div>
      </div>
    </div>

    <!-- ARCS -->
    <!-- (unchanged exact layout) -->
    <div class="absolute inset-0">
      <div
        class="absolute left-[33%] top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[#2D3443] border-r-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute left-[25%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#2D3443] border-r-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute left-[17%] top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#2D3443] border-r-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute left-[9%] top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-[#2D3443] border-r-transparent border-t-transparent border-b-transparent">
      </div>

      <div
        class="absolute right-[33%] top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[#2D3443] border-l-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute right-[25%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#2D3443] border-l-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute right-[17%] top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#2D3443] border-l-transparent border-t-transparent border-b-transparent">
      </div>
      <div
        class="absolute right-[9%] top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-[#2D3443] border-l-transparent border-t-transparent border-b-transparent">
      </div>
    </div>

    <!-- LEFT NODES -->
    <div class="absolute inset-0 z-10">
      <div class="absolute left-[12%] top-[12%]">
        <NetworkNode v-bind="networkData.left[0][0]" />
      </div>
      <div class="absolute left-[7.5%] top-[48%]">
        <NetworkNode v-bind="networkData.left[0][1]" />
      </div>
      <div class="absolute left-[12%] top-[80%]">
        <NetworkNode v-bind="networkData.left[0][2]" />
      </div>

      <div class="absolute left-[19%] top-[19%]">
        <NetworkNode v-bind="networkData.left[1][0]" />
      </div>
      <div class="absolute left-[15.5%] top-[48%]">
        <NetworkNode v-bind="networkData.left[1][1]" />
      </div>
      <div class="absolute left-[19%] top-[75%]">
        <NetworkNode v-bind="networkData.left[1][2]" />
      </div>

      <div class="absolute left-[26%] top-[26%]">
        <NetworkNode v-bind="networkData.left[2][0]" />
      </div>
      <div class="absolute left-[23.5%] top-[48%]">
        <NetworkNode v-bind="networkData.left[2][1]" />
      </div>
      <div class="absolute left-[26.5%] top-[69%]">
        <NetworkNode v-bind="networkData.left[2][2]" />
      </div>

      <div class="absolute left-[33%] top-[33%]">
        <NetworkNode v-bind="networkData.left[3][0]" />
      </div>
      <div class="absolute left-[31.5%] top-[48%]">
        <NetworkNode v-bind="networkData.left[3][1]" />
      </div>
      <div class="absolute left-[33.5%] top-[62%]">
        <NetworkNode v-bind="networkData.left[3][2]" />
      </div>
      <!-- RIGHT NODES -->
      <div class="absolute right-[12%] top-[12%]">
        <NetworkNode v-bind="networkData.right[0][0]" />
      </div>
      <div class="absolute right-[7.5%] top-[48%]">
        <NetworkNode v-bind="networkData.right[0][1]" />
      </div>
      <div class="absolute right-[12%] top-[80%]">
        <NetworkNode v-bind="networkData.right[0][2]" />
      </div>

      <div class="absolute right-[19%] top-[19%]">
        <NetworkNode v-bind="networkData.right[1][0]" />
      </div>
      <div class="absolute right-[15.5%] top-[48%]">
        <NetworkNode v-bind="networkData.right[1][1]" />
      </div>
      <div class="absolute right-[19%] top-[75%]">
        <NetworkNode v-bind="networkData.right[1][2]" />
      </div>

      <div class="absolute right-[26%] top-[26%]">
        <NetworkNode v-bind="networkData.right[2][0]" />
      </div>
      <div class="absolute right-[23.5%] top-[48%]">
        <NetworkNode v-bind="networkData.right[2][1]" />
      </div>
      <div class="absolute right-[26.5%] top-[69%]">
        <NetworkNode v-bind="networkData.right[2][2]" />
      </div>

      <div class="absolute right-[33%] top-[33%]">
        <NetworkNode v-bind="networkData.right[3][0]" />
      </div>
      <div class="absolute right-[31.5%] top-[48%]">
        <NetworkNode v-bind="networkData.right[3][1]" />
      </div>
      <div class="absolute right-[33.5%] top-[62%]">
        <NetworkNode v-bind="networkData.right[3][2]" />
      </div>
      <!-- the left dashed line -->
      <div
        class="absolute left-[16%] top-[3%] w-[290px] h-[20px] border border-dashed border-[#A9B4C5] border-b-transparent rotate-[25deg] origin-left">
        <span class="absolute w-2 h-2 -bottom-1 -left-1 bg-[#A9B4C5] rounded"></span>
        <span class="absolute w-2 h-2 -bottom-1 -right-1 bg-[#A9B4C5] rounded"></span>
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-[#050814]">شركاؤنا</span>
      </div>
      <!-- the right dashed line -->
      <div
        class="absolute right-[16%] top-[3%] w-[290px] h-[20px] border border-dashed border-[#A9B4C5] border-b-transparent -rotate-[25deg] origin-right">
        <span class="absolute w-2 h-2 -bottom-1 -left-1 bg-[#A9B4C5] rounded"></span>
        <span class="absolute w-2 h-2 -bottom-1 -right-1 bg-[#A9B4C5] rounded"></span>
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-[#050814]">عملاؤنا</span>
      </div>
      <div
        class="absolute top-1/2 left-1/2 w-[24rem] -z-10 h-px bg-[#2D3443] -translate-x-1/2  translate-y-3 -rotate-[25deg]">
      </div>
      <div
        class="absolute top-1/2 left-1/2 w-[24rem] -z-10 h-px bg-[#2D3443] -translate-x-1/2  translate-y-3 rotate-[25deg]">
      </div>
      <div class="absolute top-1/2 left-1/2 w-[24rem] -z-10 h-px bg-[#2D3443] -translate-x-1/2  translate-y-3"></div>
    </div>
  </section>
</template>

<!-- do linear graidant for the lines from this to this  -->
<!-- 0F1217  ---  BABABA  -->
