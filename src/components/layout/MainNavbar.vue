<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { popupStore } from '../../stores/popup'

const router = useRouter()
const { locale, t } = useI18n()

const mobileOpen = ref(false)
const closingMenu = ref(false)
const activeId = ref('home')

const isArabic = computed(() => locale.value === 'ar')

const navItems = computed(() => [
  { id: 'home', label: t('landing.nav.home') },
  { id: 'why', label: t('landing.nav.why') },
  { id: 'pricing', label: t('landing.nav.pricing') },
  { id: 'tracking', label: t('landing.nav.tracking') },
  { id: 'faq', label: t('landing.nav.faq') }
])

function scrollToSection(item) {
  if (item.id === 'tracking') {
    popupStore.open()
    return
  }
  activeId.value = item.id
  const el = document.getElementById(item.id)

  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 350)
  }
}

function handleClick(item) {
  scrollToSection(item)
  closeMenu()
}

function toggleLang() {
  locale.value = isArabic.value ? 'en' : 'ar'
}

function goToSignin() {
  router.push({ name: 'Signin' })
}

function goToSignup() {
  router.push({ name: 'Signup' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openMenu() {
  closingMenu.value = false
  mobileOpen.value = true
}

function closeMenu() {
  closingMenu.value = true
  setTimeout(() => {
    mobileOpen.value = false
    closingMenu.value = false
  }, 300)
}
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-[100] bg-[#050814]/80 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-5 py-3"
      :class="{ 'flex-row-reverse': isArabic }">
      <!-- MOBILE SECTION -->
      <div class="flex items-center gap-3 lg:hidden" :class="{ 'flex-row-reverse': isArabic }">
        <!-- MENU ICON (Always on the left in LTR, right in RTL) -->
        <button @click="openMenu" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <img src="../../assets/icons/menu.svg" class="w-6 h-6 opacity-90" alt="Menu" />
        </button>

        <!-- PRIMARY CTA -->
        <button @click="goToSignup"
          class="px-5 h-10 rounded-full bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white text-sm font-semibold whitespace-nowrap shadow-lg">
          {{ t('landing.nav.startFree') }}
        </button>

        <!-- LANGUAGE SWITCH -->
        <button @click="toggleLang">
          <img v-if="isArabic" src="../../assets/flags/gb.svg"
            class="w-9 h-9 rounded-full border border-white/10 shadow" alt="Switch to English" />
          <img v-else src="../../assets/flags/sa.svg" class="w-9 h-9 rounded-full border border-white/10 shadow"
            alt="Switch to Arabic" />
        </button>
      </div>

      <!-- MOBILE LOGO (Always on the opposite side) -->
      <div class="lg:hidden flex items-center">
        <img src="../../assets/logos/logo.svg" class="h-[32px]" alt="Ship Flow Logo" />
      </div>

      <!-- DESKTOP NAV -->
      <div class="hidden lg:flex items-center justify-between w-full" :class="{ 'flex-row-reverse': isArabic }">
        <!-- LOGO (Left in LTR, Right in RTL) -->
        <div class="flex items-center cursor-pointer gap-2" @click="scrollToTop">
          <img src="../../assets/logos/logo.svg" class="h-[32px]" alt="Ship Flow Logo" />
          <img src="../../assets/logos/logo-text.svg" class="h-[32px]" alt="Ship Flow Text" />
        </div>

        <!-- NAV LINKS -->
        <nav class="flex items-center bg-[#131A25]/60 border border-white/10 py-3 px-2 rounded-full shadow-lg"
          :class="{ 'flex-row-reverse': isArabic }">
          <button v-for="item in navItems" :key="item.id" @click="scrollToSection(item)"
            class=" lg:px-2 lg:py-1 xl:py-2 xl:px-3 rounded-full text-[15px] font-medium transition whitespace-nowrap lg:mx-1 xl:mx-3"
            :class="activeId === item.id
              ? 'bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white'
              : 'text-white/80 hover:text-white'
              ">
            {{ item.label }}
          </button>
        </nav>

        <!-- ACTION BUTTONS (Right in LTR, Left in RTL) -->
        <div class="flex items-center gap-3" :class="{ 'flex-row-reverse': isArabic }">
          <!-- FLAG -->
          <button @click="toggleLang">
            <img v-if="isArabic" src="../../assets/flags/gb.svg"
              class="w-10 h-10 rounded-full border border-white/10 shadow-lg" alt="Switch to English" />
            <img v-else src="../../assets/flags/sa.svg" class="w-10 h-10 rounded-full border border-white/10 shadow-lg"
              alt="Switch to Arabic" />
          </button>

          <!-- SIGN IN -->
          <button @click="goToSignin"
            class="h-[45px] lg:px-4 xl:px-8 rounded-full border border-white/30 text-white/90 hover:text-white transition">
            {{ t('landing.nav.signin') }}
          </button>

          <!-- START FREE -->
          <button @click="goToSignup"
            class="h-[45px] lg:px-6 xl:px-8  rounded-full bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white font-semibold hover:opacity-90 transition">
            {{ t('landing.nav.startFree') }}
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- MOBILE MENU OVERLAY - OUTSIDE HEADER -->
  <Teleport to="body">
    <div v-if="mobileOpen" class="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm">
      <!-- CLICK OUTSIDE TO CLOSE -->
      <div class="absolute inset-0" @click="closeMenu"></div>

      <!-- SLIDING PANEL (Left in LTR, Right in RTL) -->
      <div class="absolute top-0 bottom-0 w-[85%] max-w-sm overflow-y-auto" :class="[
        isArabic ? 'right-0' : 'left-0',
        isArabic
          ? closingMenu
            ? 'slide-out-right'
            : 'slide-in-right'
          : closingMenu
            ? 'slide-out-left'
            : 'slide-in-left'
      ]" @click.stop>
        <!-- Background with gradient -->
        <div class="min-h-full bg-gradient-to-b from-[#0B111A] via-[#0F1420] to-[#050814] relative">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-[0.07]"
            style="background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px);">
          </div>

          <!-- Content -->
          <div class="relative px-6 py-6 text-white">
            <!-- CLOSE BUTTON (Right in LTR, Left in RTL) -->
            <div class="flex mb-8" :class="isArabic ? 'justify-start' : 'justify-end'">
              <button @click="closeMenu"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition text-white text-2xl">
                ×
              </button>
            </div>

            <!-- NAV LINKS -->
            <nav class="flex flex-col gap-1" :class="isArabic ? 'text-right' : 'text-left'">
              <button v-for="item in navItems" :key="item.id" @click="handleClick(item)"
                class="py-4 px-4 rounded-lg text-lg font-medium transition border-b border-white/5 hover:bg-white/5"
                :class="activeId === item.id
                  ? 'text-white bg-white/10'
                  : 'text-white/80'
                  ">
                {{ item.label }}
              </button>
            </nav>

            <!-- CTA BUTTONS -->
            <div class="mt-8 flex flex-col gap-3">
              <button @click="() => { goToSignup(); closeMenu(); }"
                class="w-full h-[50px] rounded-full bg-gradient-to-r from-[#2D7DFF] to-[#1B5CFF] text-white font-semibold shadow-lg hover:opacity-90 transition">
                {{ t('landing.nav.startFree') }}
              </button>

              <button @click="() => { goToSignin(); closeMenu(); }"
                class="w-full h-[50px] rounded-full border border-white/30 text-white hover:bg-white/5 transition">
                {{ t('landing.nav.signin') }}
              </button>
            </div>

            <!-- LANGUAGE SWITCH -->
            <div class="mt-10 pt-6 border-t border-white/10">
              <button @click="toggleLang"
                class="flex items-center gap-3 w-full py-3 px-4 rounded-lg hover:bg-white/5 transition"
                :class="isArabic ? 'flex-row-reverse text-right' : 'text-left'">
                <img v-if="isArabic" src="../../assets/flags/gb.svg" class="w-8 h-8 rounded-full border border-white/20"
                  alt="English Flag" />
                <img v-else src="../../assets/flags/sa.svg" class="w-8 h-8 rounded-full border border-white/20"
                  alt="Arabic Flag" />
                <span class="text-white/80 text-sm font-medium">
                  {{ isArabic ? 'Switch to English' : 'التبديل إلى العربية' }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Slide animations */
.slide-in-left {
  animation: slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.slide-out-left {
  animation: slideOutLeft 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.slide-out-right {
  animation: slideOutRight 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}
</style>