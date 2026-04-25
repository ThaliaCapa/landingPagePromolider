<template>
  <footer class="site-footer">
    <div class="footer-logo">
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <rect x="3" y="3" width="30" height="30" rx="6" fill="none"
              stroke="#00ff44" stroke-width="2"/>
        <path d="M10 12 L10 24 M10 12 Q18 12 18 18 Q18 24 10 24"
              stroke="#00ff44" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>
      <span>Promolíder</span>
    </div>

    <p class="footer-legal">
      Los resultados descritos son referencias de distribuidores independientes. No se garantizan ingresos específicos.<br>
      Los ingresos dependen del esfuerzo individual. © {{ year }} Promolíder. Todos los derechos reservados.
    </p>

    <div class="social-icons">
      <a v-for="s in socials" :key="s.label" :href="s.href" :title="s.label" target="_blank" rel="noopener">
        {{ s.icon }}
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const year = computed(() => new Date().getFullYear())
    const socials = [
      { label: 'Facebook',  href: '#', icon: 'f'  },
      { label: 'Instagram', href: '#', icon: 'in' },
      { label: 'LinkedIn',  href: '#', icon: 'Li' },
      { label: 'TikTok',    href: '#', icon: 'TK' },
      { label: 'YouTube',   href: '#', icon: '▶'  },
    ]
    return { year, socials }
  },
})
</script>

<style scoped>
.site-footer {
  border-top: 1px solid rgba(0,255,68,0.12);
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-alt);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
}

.footer-legal {
  font-size: 0.62rem;
  color: rgba(255,255,255,0.3);
  text-align: center;
  max-width: 480px;
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1.5px solid rgba(0,255,68,0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
  text-decoration: none;
  font-size: 0.68rem;
  font-weight: 700;
  transition: all 0.2s;
}

.social-icons a:hover {
  background: rgba(0,255,68,0.12);
  border-color: var(--green);
  box-shadow: 0 0 12px rgba(0,255,68,0.4);
}

@media (max-width: 700px) {
  .site-footer { flex-direction: column; text-align: center; }
}
</style>