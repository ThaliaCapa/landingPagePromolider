<template>
  <section class="hero-section">
    <!-- Background radial glow -->
    <div class="hero-bg-glow" aria-hidden="true"></div>

    <div class="hero-inner">
      <!-- ── LEFT: Network diagram ── -->
      <div class="hero-diagram fade-up">
        <div class="nd-wrapper">
          <!-- Row 1: Patrocinador -->
          <div class="nd-row">
            <NodeAvatar color="blue" label="PATROCINADOR" />
          </div>

          <!-- Connector lines -->
          <div class="nd-lines">
            <div class="nd-v-line"></div>
            <div class="nd-h-line"></div>
            <div class="nd-v-left"></div>
            <div class="nd-v-right"></div>
          </div>

          <!-- Row 2: Disponible + blue -->
          <div class="nd-row nd-row-2">
            <NodeAvatar color="red" label="DISPONIBLE" />
            <NodeAvatar color="blue" />
          </div>

          <!-- Connector lines row 2 -->
          <div class="nd-lines-2">
            <div class="nd-v2"></div>
          </div>

          <!-- Row 3: 3 reds -->
          <div class="nd-row nd-row-3">
            <NodeAvatar color="red" size="sm" />
            <NodeAvatar color="red" size="sm" />
            <NodeAvatar color="red" size="sm" />
          </div>
        </div>
      </div>

      <!-- ── CENTER: Hero image ── -->
      <div class="hero-image-wrap fade-up d2">
        <!--
          ╔══════════════════════════════════════════╗
          ║  COLOCAR IMAGEN: Mujer con tablet        ║
          ║  Reemplaza el div.img-placeholder con:   ║
          ║  <img src="/images/hero-woman.png"       ║
          ║       alt="Promolider"                   ║
          ║       class="hero-img" />                ║
          ╚══════════════════════════════════════════╝
        -->
        <div class="img-placeholder">
          <span class="img-placeholder-icon">📸</span>
          <p>COLOCAR IMAGEN</p>
          <p class="img-placeholder-hint">Mujer con tablet / dashboard</p>
          <code>&lt;img src="/images/hero-woman.png"&gt;</code>
        </div>
      </div>

      <!-- ── RIGHT: Form ── -->
      <div class="hero-form-wrap fade-up d3">
        <div class="form-box">
          <p class="form-pre">Reserva tu posición ahora</p>
          <p class="form-title">Gratis solo por 7 días</p>

          <div class="form-fields">
            <div class="form-row">
              <label>Nombres:</label>
              <input v-model="form.nombres" type="text" placeholder="" />
            </div>
            <div class="form-row">
              <label>Apellidos:</label>
              <input v-model="form.apellidos" type="text" placeholder="" />
            </div>
            <div class="form-row">
              <label>Correo:</label>
              <input v-model="form.correo" type="email" placeholder="" />
            </div>
            <div class="form-row">
              <label>Whatsapp:</label>
              <input v-model="form.whatsapp" type="tel" placeholder="" />
            </div>
          </div>

          <button class="btn-cta" @click="handleSubmit">RESERVA MI POSICIÓN</button>

          <!-- Promolider logo watermark -->
          <div class="form-logo-mark">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="none"
                    stroke="#00ff44" stroke-width="1.5"/>
              <path d="M7 8 L7 16 M7 8 Q12 8 12 12 Q12 16 7 16"
                    stroke="#00ff44" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import NodeAvatar from './NodeAvatar.vue'

interface FormData {
  nombres: string
  apellidos: string
  correo: string
  whatsapp: string
}

export default defineComponent({
  name: 'HeroSection',
  components: { NodeAvatar },
  setup() {
    const form = reactive<FormData>({
      nombres: '',
      apellidos: '',
      correo: '',
      whatsapp: '',
    })

    function handleSubmit(): void {
      console.log('Form submitted:', form)
      // Integrate your backend / API here
    }

    return { form, handleSubmit }
  },
})
</script>

<style scoped>
/* ── Section ── */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 0 0 10px;
}

.hero-bg-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 90% 60% at 50% 0%,  rgba(0,180,50,0.18) 0%, transparent 65%),
    radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,140,40,0.10) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  align-items: center;
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 32px 40px;
}

/* ── Headline block (above grid on mobile) ── */
/* The headline is placed in App.vue above this component */

/* ── Network diagram ── */
.hero-diagram {
  display: flex;
  justify-content: center;
}

.nd-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  background: rgba(0,10,0,0.55);
  border: 1.5px solid rgba(0,255,68,0.22);
  border-radius: 22px;
  padding: 32px 24px 28px;
  box-shadow: 0 0 40px rgba(0,255,68,0.07);
  min-width: 200px;
}

.nd-row {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.nd-row-2 { gap: 64px; }

.nd-row-3 { gap: 24px; }

/* Connectors */
.nd-lines {
  position: relative;
  width: 100%;
  height: 30px;
  margin: 2px 0;
}
.nd-v-line {
  position: absolute;
  left: 50%; top: 0;
  width: 2px; height: 15px;
  background: rgba(255,255,255,0.35);
  transform: translateX(-50%);
}
.nd-h-line {
  position: absolute;
  left: 25%; top: 15px;
  width: 50%; height: 2px;
  background: rgba(255,255,255,0.35);
}
.nd-v-left {
  position: absolute;
  left: 25%; top: 15px;
  width: 2px; height: 15px;
  background: rgba(255,255,255,0.35);
}
.nd-v-right {
  position: absolute;
  right: 25%; top: 15px;
  width: 2px; height: 15px;
  background: rgba(255,255,255,0.35);
}
.nd-lines-2 {
  width: 100%; height: 24px;
  position: relative;
  margin: 2px 0;
}
.nd-v2 {
  position: absolute;
  left: 29%; top: 0;
  width: 2px; height: 24px;
  background: rgba(255,255,255,0.35);
}

/* ── Hero image ── */
.hero-image-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 420px;
}

.hero-img {
  max-width: 100%;
  max-height: 480px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(0,255,68,0.25));
}

/* Placeholder when no image is provided */
.img-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 380px;
  width: 100%;
  background: rgba(0,20,5,0.4);
  border: 2px dashed rgba(0,255,68,0.25);
  border-radius: 18px;
  text-align: center;
  padding: 24px;
}

.img-placeholder-icon { font-size: 2.5rem; }

.img-placeholder p {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(0,255,68,0.6);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.img-placeholder-hint {
  font-size: 0.7rem !important;
  color: rgba(255,255,255,0.35) !important;
  font-weight: 400 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.img-placeholder code {
  font-size: 0.65rem;
  color: rgba(0,255,68,0.4);
  background: rgba(0,255,68,0.05);
  padding: 4px 10px;
  border-radius: 4px;
  margin-top: 4px;
}

/* ── Form ── */
.form-box {
  background: rgba(0,15,5,0.88);
  border: 1.5px solid rgba(0,255,68,0.35);
  border-radius: 16px;
  padding: 26px 20px 22px;
  box-shadow: 0 0 40px rgba(0,255,68,0.10);
  position: relative;
}

.form-pre {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--white);
  text-align: center;
  margin-bottom: 4px;
}

.form-title {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--green);
  text-align: center;
  text-shadow: 0 0 20px rgba(0,255,68,0.5);
  margin-bottom: 20px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.form-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-row label {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--white);
  min-width: 74px;
  text-align: right;
}

.form-row input {
  flex: 1;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(0,255,68,0.25);
  border-radius: 6px;
  padding: 8px 10px;
  color: var(--white);
  font-family: var(--font-main);
  font-size: 0.78rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-row input:focus {
  border-color: var(--green);
  box-shadow: 0 0 8px rgba(0,255,68,0.2);
}

.btn-cta {
  width: 100%;
  background: var(--green);
  color: #000;
  font-family: var(--font-main);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 13px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 22px rgba(0,255,68,0.45);
  transition: all 0.2s;
}

.btn-cta:hover {
  background: #1aff55;
  box-shadow: 0 0 38px rgba(0,255,68,0.75);
  transform: translateY(-2px);
}

.form-logo-mark {
  position: absolute;
  bottom: 12px;
  right: 14px;
  opacity: 0.5;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
    padding: 32px 20px;
  }
  .hero-image-wrap { min-height: 260px; order: -1; }
}
</style>