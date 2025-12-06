<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue' 
import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'
import iconX from '../../assets/icons/x.svg'
import iconTiktok from '../../assets/icons/tiktok.svg'
import iconGmail from '../../assets/icons/gmail.svg'
import FooterCta from '../ui/FooterCta.vue'

const { t, tm, locale } = useI18n()

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
const isArabic = computed(() => locale.value === 'ar')

// footer links array from i18n
const footerLinks = computed(() => tm('landing.footer.links'))

const socialLinks = [
  { id: 'facebook', icon: iconFacebook, href: '#' },
  { id: 'instagram', icon: iconInstagram, href: '#' },
  { id: 'x', icon: iconX, href: '#' },
  { id: 'tiktok', icon: iconTiktok, href: '#' },
  { id: 'gmail', icon: iconGmail, href: '#' }
]
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

 <template>
  <footer class="relative" :dir="dir">
    <!-- CTA Banner -->
    <FooterCta />

    <!-- Background Image -->
    <img
      src="../../assets/footer/footerBg.png"
      class="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
    />

    <!-- Main footer content -->
    <div class="relative z-10">
      <div
        class="
          max-w-6xl mx-auto 
          px-4 md:px-6 
          py-10 
          flex flex-col md:flex-row 
          gap-10 md:gap-16 
          items-start justify-between
        "
      >
        <!-- BRAND COLUMN -->
        <div
          class="space-y-3 max-w-sm"
          :class="isArabic ? 'md:text-right md:ml-auto' : 'md:text-left md:mr-auto'"
        >
          <div
            class="flex items-center cursor-pointer gap-2"
            :class="dir === 'rtl' ? 'ml-auto' : 'mr-auto'"
            @click="scrollToTop"
          >
            <img src="../../assets/logos/logo.svg" class="h-[32px]" />
            <img src="../../assets/logos/logo-text.svg" class="h-[32px]" />
          </div>

          <p class="text-xs md:text-sm text-white/70 leading-relaxed">
            {{ t('landing.footer.aboutText') }}
          </p>
        </div>

        <!-- QUICK LINKS -->
        <div class="space-y-4">
          <p class="text-sm font-semibold text-white/80">
            {{ t('landing.footer.quickLinks') }}
          </p>

          <!-- Mobile stacked – Desktop grid two columns -->
          <ul
            class="
              text-sm text-white/70 
              grid  
              gap-2 
              grid-cols-2 md:gap-x-6
            "
          >
            <li v-for="link in footerLinks" :key="link.key">
              <a href="#" class="hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- SOCIAL ICONS -->
        <div class="space-y-4">
          <p class="text-sm font-semibold text-white/80">
            {{ t('landing.footer.followUs') }}
          </p>

          <!-- Mobile: Icons in 3 columns | Desktop: same -->
          <div class="flex md:grid md:grid-cols-3 gap-3 ">
            <a
              v-for="item in socialLinks"
              :key="item.id"
              :href="item.href"
              class="
                w-11 h-11 
                rounded-xl 
                border border-white/15 
                bg-white/5 
                flex items-center justify-center
                hover:bg-white/10 hover:border-white/40 transition-colors
              "
            >
              <img :src="item.icon" :alt="item.id" class="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div class="border-t border-white/10">
        <div class="max-w-6xl mx-auto px-4 md:px-6 py-4">
          <p class="text-center text-[11px] md:text-xs text-white/40">
            {{ t('landing.footer.copyright') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
