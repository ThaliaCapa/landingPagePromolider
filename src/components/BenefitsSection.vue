<template>
  <section class="benefits-section">
    <!-- Radial background glow -->
    <div class="benefits-bg" aria-hidden="true"></div>

    <h2 class="section-title fade-up">
      <em>Beneficios</em> Exclusivos
    </h2>

    <div class="benefits-grid">
      <div
        v-for="(benefit, i) in benefits"
        :key="benefit.id"
        class="benefit-card fade-up"
        :class="`d${i + 1}`"
      >
        <!-- Icon / Image slot -->
        <div class="benefit-icon">
          <!--
            ╔══════════════════════════════════════════╗
            ║  COLOCAR IMAGEN del ícono correspondiente ║
            ║  Reemplaza el div.icon-ph con:           ║
            ║  <img :src="benefit.icon"                ║
            ║       :alt="benefit.name"                ║
            ║       class="icon-img" />                ║
            ╚══════════════════════════════════════════╝
          -->
          <div class="icon-ph">
            <span class="icon-ph-emoji">{{ benefit.emoji }}</span>
            <p class="icon-ph-text">COLOCAR ÍCONO</p>
            <code>{{ benefit.iconFile }}</code>
          </div>
        </div>

        <h3 class="benefit-name">{{ benefit.name }}</h3>
        <p class="benefit-desc">{{ benefit.desc }}</p>
      </div>
    </div>

    <!-- Timeline dots -->
    <div class="timeline-dots" aria-hidden="true">
      <span v-for="n in 4" :key="n" class="t-dot"></span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Benefit {
  id: number
  name: string
  desc: string
  emoji: string
  iconFile: string
  icon: string
}

export default defineComponent({
  name: 'BenefitsSection',
  setup() {
    const benefits: Benefit[] = [
      {
        id: 1,
        name: 'IA Content Agent',
        desc: 'Tu aliado inteligente para estructurar y lanzar cursos irresistibles en minutos.',
        emoji: '📚',
        iconFile: 'src="/images/icon-ia-content.png"',
        icon: '/images/icon-ia-content.png',
      },
      {
        id: 2,
        name: 'Academia Mobile',
        desc: 'Gestiona tus ventas y comisiones exponenciales desde la palma de tu mano con nuestra App.',
        emoji: '📱',
        iconFile: 'src="/images/icon-academia.png"',
        icon: '/images/icon-academia.png',
      },
      {
        id: 3,
        name: 'App LeadBoost',
        desc: 'Deja de perseguir prospectos. Atrae clientes calificados mediante contenido magnético (libros, masterclasses) y conviértelos en socios de tu red.',
        emoji: '🧲',
        iconFile: 'src="/images/icon-leadboost.png"',
        icon: '/images/icon-leadboost.png',
      },
      {
        id: 4,
        name: 'Smart Funnels con IA',
        desc: 'Embudos de marketing automatizados que asesoran y cierran prospectos por ti.',
        emoji: '🔽',
        iconFile: 'src="/images/icon-funnels.png"',
        icon: '/images/icon-funnels.png',
      },
    ]

    return { benefits }
  },
})
</script>

<style scoped>
.benefits-section {
  position: relative;
  padding: 80px 40px 20px;
  overflow: hidden;
}

.benefits-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    rgba(0, 60, 15, 0.28) 0%,
    rgba(0, 0, 0, 0.55) 100%);
  pointer-events: none;
}

.section-title {
  position: relative;
  text-align: center;
  font-family: var(--font-main);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: var(--green);
  text-shadow: 0 0 40px rgba(0,255,68,0.4);
  margin-bottom: 52px;
  letter-spacing: 1px;
}

.section-title em { font-style: italic; }

/* ── Cards grid ── */
.benefits-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-card {
  background: var(--card-bg);
  border: 1.5px solid var(--green-border);
  border-radius: 20px;
  padding: 36px 18px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  overflow: hidden;
  position: relative;
}

.benefit-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%,
    rgba(0,255,68,0.07) 0%, transparent 65%);
  border-radius: 20px;
}

.benefit-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0,255,68,0.65);
  box-shadow: 0 0 40px rgba(0,255,68,0.20);
}

/* ── Icon / image area ── */
.benefit-icon {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Actual icon image (when replaced) */
.icon-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(0,255,68,0.5));
}

/* Placeholder shown until image is added */
.icon-ph {
  width: 90px;
  height: 90px;
  background: rgba(0,255,68,0.04);
  border: 1.5px dashed rgba(0,255,68,0.22);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 6px;
}

.icon-ph-emoji { font-size: 1.4rem; }

.icon-ph-text {
  font-size: 0.48rem;
  font-weight: 700;
  color: rgba(0,255,68,0.5);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.icon-ph code {
  font-size: 0.42rem;
  color: rgba(0,255,68,0.35);
  word-break: break-all;
  text-align: center;
}

/* ── Text ── */
.benefit-name {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: 0.3px;
  position: relative;
}

.benefit-desc {
  font-size: 0.72rem;
  color: var(--gray);
  line-height: 1.65;
  position: relative;
}

/* ── Timeline dots ── */
.timeline-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 52px 0 20px;
  position: relative;
}

.t-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 10px var(--green);
  flex-shrink: 0;
}

.t-dot:not(:last-child)::after {
  content: '';
  display: block;
  width: 120px;
  height: 2px;
  background: rgba(0,255,68,0.25);
  margin: 0 0 0 14px;
  position: relative;
  top: -7px;
  left: 14px;
}

/* Responsive */
@media (max-width: 900px) {
  .benefits-grid { grid-template-columns: repeat(2, 1fr); }
  .benefits-section { padding: 60px 20px 20px; }
}

@media (max-width: 500px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>