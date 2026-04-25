<template>
  <section class="features-section">
    <div
      v-for="(feature, i) in features"
      :key="feature.id"
      class="feature-row fade-up"
      :class="{ reverse: i % 2 !== 0 }"
    >
      <!-- Image side -->
      <div class="feature-img-side">
        <div class="feature-img-box">
          <!--
            ╔════════════════════════════════════════════════╗
            ║  COLOCAR IMAGEN de la feature correspondiente  ║
            ║  Reemplaza el div.feat-ph con:                 ║
            ║  <img :src="feature.image"                     ║
            ║       :alt="feature.name"                      ║
            ║       class="feat-img" />                      ║
            ╚════════════════════════════════════════════════╝
          -->
          <div class="feat-ph">
            <span class="feat-ph-emoji">{{ feature.emoji }}</span>
            <p class="feat-ph-title">COLOCAR IMAGEN</p>
            <p class="feat-ph-name">{{ feature.name }}</p>
            <code>{{ feature.imageFile }}</code>
          </div>
        </div>
      </div>

      <!-- Text side -->
      <div class="feature-text-side">
        <div class="feature-tag">
          <span class="tag-dot"></span>
          <span class="tag-label">{{ feature.name }}</span>
        </div>
        <p class="feature-body">{{ feature.body }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Feature {
  id: number
  name: string
  body: string
  emoji: string
  imageFile: string
  image: string
}

export default defineComponent({
  name: 'FeaturesSection',
  setup() {
    const features: Feature[] = [
      {
        id: 1,
        name: 'IA Content Agent',
        body: 'Es tu aliado inteligente para estructurar y lanzar cursos irresistibles. Con nuestra App, nuestra inteligencia artificial genera el temario, lluvia de ideas, estructura y contenido y te proporciona el conocimiento para enseñarlo en minutos.',
        emoji: '🤖',
        imageFile: 'src="/images/feat-ia-content.png"',
        image: '/images/feat-ia-content.png',
      },
      {
        id: 2,
        name: 'Academia Mobile',
        body: 'Gestiona tus ventas y comisiones exponenciales desde la palma de tu mano con nuestra App. Accede a tu academia, tus estudiantes y tus ganancias en tiempo real, desde cualquier lugar del mundo.',
        emoji: '📱',
        imageFile: 'src="/images/feat-academia.png"',
        image: '/images/feat-academia.png',
      },
      {
        id: 3,
        name: 'App LeadBoost',
        body: 'Olvídate de los métodos de contacto fríos, los rechazos agresivos y la frustración del rechazo. Con nuestra App LeadBoost, atrae clientes calificados mediante contenido magnético y conviértelos en la comunidad que tanto buscas. Al utilizar esta metodología, obtienes clientes calificados deseando tu negocio, masterclasses y más.',
        emoji: '🧲',
        imageFile: 'src="/images/feat-leadboost.png"',
        image: '/images/feat-leadboost.png',
      },
      {
        id: 4,
        name: 'Smart Funnels con IA',
        body: 'No dejes dinero sobre la mesa por falta de tiempo para dar seguimiento. Con los Smart Funnels con IA, tienes siempre un asesor experto trabajando para ti los 365 días. Son embudos de marketing automatizados que asesoran y cierran prospectos de forma personalizada y los guía automáticamente hasta la compra.',
        emoji: '🔽',
        imageFile: 'src="/images/feat-funnels.png"',
        image: '/images/feat-funnels.png',
      },
    ]

    return { features }
  },
})
</script>

<style scoped>
.features-section {
  padding: 60px 40px 80px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

/* ── Each row ── */
.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.feature-row.reverse {
  direction: rtl;
}
.feature-row.reverse > * {
  direction: ltr;
}

/* ── Image box ── */
.feature-img-box {
  background: rgba(0, 10, 0, 0.65);
  border: 1.5px solid var(--green-border);
  border-radius: 18px;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-shadow: 0 0 30px rgba(0,255,68,0.06);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.feature-img-box:hover {
  border-color: rgba(0,255,68,0.5);
  box-shadow: 0 0 40px rgba(0,255,68,0.12);
}

/* Real image */
.feat-img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 0 14px rgba(0,255,68,0.4));
}

/* Placeholder */
.feat-ph {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.feat-ph-emoji { font-size: 2.2rem; }

.feat-ph-title {
  font-size: 0.62rem;
  font-weight: 700;
  color: rgba(0,255,68,0.55);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.feat-ph-name {
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
}

.feat-ph code {
  font-size: 0.6rem;
  color: rgba(0,255,68,0.35);
  background: rgba(0,255,68,0.04);
  padding: 3px 8px;
  border-radius: 4px;
}

/* ── Text side ── */
.feature-tag {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.tag-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 10px var(--green);
  flex-shrink: 0;
  animation: pulse-glow 2.5s infinite;
}

.tag-label {
  font-family: var(--font-main);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--green);
  text-shadow: 0 0 15px rgba(0,255,68,0.4);
}

.feature-body {
  font-size: 0.82rem;
  color: var(--gray);
  line-height: 1.85;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  .feature-row,
  .feature-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .features-section {
    padding: 40px 20px 60px;
    gap: 48px;
  }
}
</style>