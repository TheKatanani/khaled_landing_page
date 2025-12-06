<script setup lang="ts">
import Card from "../ui/Card.vue"
import { testimonials } from "../../data/testimonialsData"
</script>

<template>
  <section class="py-24 bg-[#050814]">
    <h2 class="text-center text-white text-3xl font-bold mb-14">
      Our Clients Speak About Us
    </h2>

    <!-- ROW 1 -->
    <div class="marquee">
      <div class="marquee-inner">
        <div class="marquee-track">
          <Card v-for="t in testimonials" :key="'r1-'+t.id" :item="t" />
        </div>

        <div class="marquee-track">
          <Card v-for="t in testimonials" :key="'r1c-'+t.id" :item="t" />
        </div>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="marquee reverse">
      <div class="marquee-inner">
        <div class="marquee-track">
          <Card v-for="t in testimonials" :key="'r2-'+t.id" :item="t" />
        </div>

        <div class="marquee-track">
          <Card v-for="t in testimonials" :key="'r2c-'+t.id" :item="t" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Wrapper */
.marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  margin-bottom: 4rem;
}

/* The moving flex container */
.marquee-inner {
  display: flex;
  width: max-content;
  animation: scroll-left 42s linear infinite;
}

/* Reverse direction */
.reverse .marquee-inner {
  animation: scroll-right 32s linear infinite;
}

/* Pause on hover */
.marquee:hover .marquee-inner {
  animation-play-state: paused;
}

/* Track (one set of cards) */
.marquee-track {
  display: flex;
  gap: 1.5rem;
  padding-inline: 1rem;
  white-space: nowrap;
}

/* Animations */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
