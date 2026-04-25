<template>
  <div class="app-root">
    <div class="global-glow" aria-hidden="true"></div>

    <!-- ══════════ HEADER ══════════ -->
    <header class="site-header">
        <img src="/images/Encabezado.png" alt="">
    </header>

    <!-- ══════════ HERO SECTION ══════════ -->
    <section class="hero-section">
      <div class="hero-inner">
        <div class="hero-diagram">
          <img src="/images/grafico.png" alt="Red de distribución" class="diagram-img" />
        </div>
        <div class="hero-image-wrap">
          <img src="/images/srta.png" alt="Promolider" class="hero-img" />
        </div>
        <div class="form-box">
          <p class="form-pre">Reserva tu posición ahora</p>
          <p class="form-title">Gratis solo por 7 días</p>
          <div class="form-fields">
            <div class="form-row">
              <label>Nombres:</label>
              <input v-model="form.nombres" type="text" />
            </div>
            <div class="form-row">
              <label>Apellidos:</label>
              <input v-model="form.apellidos" type="text" />
            </div>
            <div class="form-row">
              <label>Correo:</label>
              <input v-model="form.correo" type="email" />
            </div>
            <div class="form-row">
              <label>Whatsapp:</label>
              <input v-model="form.whatsapp" type="tel" />
            </div>
          </div>
          <button class="btn-cta" @click="handleHeroSubmit">RESERVA MI POSICIÓN</button>
        </div>
      </div>
    </section>

    <!-- ══════════ BENEFICIOS ══════════ -->
    <section class="full-img-section">
      <img src="/images/Beneficios.png" alt="Beneficios Promolider" class="full-img" />
    </section>

    <!-- ══════════ FEATURES ══════════ -->
    <section class="full-img-section no-pad">
      <img src="/images/Features.png" alt="Features Promolider" class="full-img" />
    </section>

    <!-- ══════════ CTA FINAL ══════════ -->
    <section class="cta-section">
      <div class="cta-card">

        <!-- Título -->
        <h2 class="cta-title">
          <img src="/images/redAcademica.png" alt="">
        </h2>

        <!-- Panel campos + botón -->
        <div class="cta-inner">
          <div class="cta-fields">
            <div class="cta-row">
              <label>Nombres:</label>
              <input v-model="cta.nombres" type="text" />
            </div>
            <div class="cta-row">
              <label>Whatsapp:</label>
              <input v-model="cta.whatsapp" type="tel" />
            </div>
            <div class="cta-row">
              <label>Correo Electronico:</label>
              <input v-model="cta.correo" type="email" />
            </div>
          </div>

          <button class="btn-eco" @click="handleCtaSubmit">
            <span class="btn-eco-text">ACCEDER AL<br />ECOSISTEMA AHORA</span>
            <span class="btn-arrow">▶</span>
          </button>
        </div>

      </div>
    </section>

    <div class="green-line"></div>

    <!-- ══════════ FOOTER ══════════ -->
    <footer class="site-footer">
      <!-- Columna 1: Logo + descripción -->
      <div class="footer-col footer-brand">
        <br>
        <div class="footer-logo-row">
          <img src="/images/logo.png" alt="Promolíder" class="logo-img logo-sm" />
        </div>
        
        <p class="footer-desc">
          Únete a esta maravillosa oportunidad y conoce personas extraordinarias.
          Los miembros de nuestra red disfrutan de entrenamientos, capacitación
          acelerada y apoyo especializado. En Promolíder la consigna es: "Juntos
          lograremos monetizar tus conocimientos y experiencia".
        </p>
      </div>

      <!-- Columna 2: Contacto -->
       <br>
      <div class="footer-col footer-contact">
        <p class="footer-contact-title">Contáctanos</p>
        <a href="mailto:información@promolider.org" class="footer-email">
          <span class="footer-email-icon">✉</span>
          información@promolider.org
        </a>
      </div>

      <!-- Columna 3: Redes sociales 3+2 -->
       <br>
      <div class="footer-col footer-social">
        <div class="social-row">
          <a href="https://www.facebook.com" target="_blank" rel="noopener" title="Facebook" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" title="Instagram" class="social-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener" title="LinkedIn" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
        <div class="social-row social-row-2">
          <a href="https://www.youtube.com" target="_blank" rel="noopener" title="YouTube" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/></svg>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener" title="TikTok" class="social-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const form = reactive({ nombres: '', apellidos: '', correo: '', whatsapp: '' })
    function handleHeroSubmit(): void { console.log('Hero form:', form) }

    const cta = reactive({ nombres: '', whatsapp: '', correo: '' })
    function handleCtaSubmit(): void { console.log('CTA form:', cta) }

    const year = computed(() => new Date().getFullYear())

    const socials = [
      { label: 'Facebook',  href: '#', icon: 'f'  },
      { label: 'Instagram', href: '#', icon: 'in' },
      { label: 'LinkedIn',  href: '#', icon: 'Li' },
      { label: 'TikTok',    href: '#', icon: 'TK' },
      { label: 'YouTube',   href: '#', icon: '▶'  },
    ]

    return { form, handleHeroSubmit, cta, handleCtaSubmit, year, socials }
  },
})
</script>

<style>
/* ══════════════════════════════
   VARIABLES & RESET
══════════════════════════════ */
:root {
  --green:        #00ff44;
  --green-border: rgba(0, 255, 68, 0.30);
  --black:        #000000;
  --white:        #ffffff;
  --font-main:    'Montserrat', sans-serif;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-main);
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb { background: var(--green-border); border-radius: 3px; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════════════
   APP ROOT
══════════════════════════════ */
.app-root {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: #000;
}

.global-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 100% 55% at 50% -5%,  rgba(0,200,50,0.22) 0%, transparent 60%),
    radial-gradient(ellipse 80%  45% at 50% 105%, rgba(0,180,45,0.18) 0%, transparent 60%);
}

.app-root > * { position: relative; z-index: 1; }

.green-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
  box-shadow: 0 0 14px rgba(0,255,68,0.55);
}

/* ══════════════════════════════
   LOGO
══════════════════════════════ */
.logo-img {
  height: 36px; width: auto; object-fit: contain;
  filter: drop-shadow(0 0 6px rgba(0,255,68,0.3));
}
.logo-sm { height: 28px; }

/* ══════════════════════════════
   HEADER
══════════════════════════════ */
.site-header {
  position: sticky; top: 0; z-index: 200;
  display: flex; align-items: center; gap: 24px;
  padding: 18px 40px;
  /* Degradado verde oscuro igual a la imagen */
  background: linear-gradient(
    135deg,
    #0a2e10 0%,
    #0d3d14 30%,
    #082808 60%,
    #030f04 100%
  );
  border-bottom: 2px solid rgba(0, 255, 68, 0.25);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
}
.header-center { flex: 1; text-align: center; }
.header-sub {
  font-size: 0.99rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.4px;
  margin-bottom: 4px;
}
.header-title {
  font-size: clamp(1.2rem, 2.6vw, 1.9rem);
  font-weight: 900;
  color: var(--white);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin-bottom: 6px;
  /* Linha verde embaixo do título igual à imagem */
  display: inline-block;
  border-bottom: 2.5px solid var(--green);
  padding-bottom: 4px;
}
.header-tag {
  font-size: 0.99rem;
  color: rgba(255, 255, 255, 0.60);
  margin-top: 2px;
}

/* ══════════════════════════════
   HERO
══════════════════════════════ */
.hero-section {
  background: linear-gradient(180deg, rgba(0,55,14,0.18) 0%, rgba(0,0,0,0) 100%);
}
.hero-inner {
  display: grid; grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center; gap: 20px;
  max-width: 1280px; margin: 0 auto; padding: 36px 32px 32px;
}
.hero-diagram { display: flex; justify-content: center; align-items: center; }
.diagram-img {
  width: 600%; 
  max-width: 900px; 
  height: auto; 
  object-fit: contain;
  filter: drop-shadow(0 0 16px rgba(0,255,68,0.2));
}
.hero-image-wrap {
  display: flex; 
  justify-content: center; 
  align-items: flex-end; 
  min-height: 400px;
}
.hero-img {
  width: 100%; 
  max-width: 920px; 
  height: auto; 
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(0,255,68,0.20));
  animation: fadeUp 0.8s ease both;
}
.form-box {
  background: rgba(0,14,4,0.90);
  border: 1.5px solid rgba(0,255,68,0.38);
  border-radius: 16px; 
  padding: 24px 18px 20px;
  box-shadow: 0 0 40px rgba(0,255,68,0.10), inset 0 0 30px rgba(0,0,0,0.4);
  animation: fadeUp 0.8s 0.15s ease both;
  width: 100%; 
  max-width: 320px;
}
.form-pre {
  font-size: 0.72rem; 
  font-weight: 900; 
  color: var(--white);
  text-align: center; 
  margin-bottom: 4px;
}
.form-title {
  font-size: 1.05rem; 
  font-weight: 900; 
  color: var(--green);
  text-align: center; 
  text-shadow: 0 0 18px rgba(0,255,68,0.55); 
  margin-bottom: 18px;
}
.form-fields {
   display: flex; 
   flex-direction: column; 
   gap: 9px; 
   margin-bottom: 14px; }
.form-row { 
  display: flex; 
  align-items: center; 
  gap: 8px; }
.form-row label {
  font-size: 0.7rem; 
  font-weight: 700; 
  color: var(--white);
  min-width: 72px; 
  text-align: right;
}
.form-row input {
  flex: 1; 
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(0,255,68,0.22); 
  border-radius: 6px;
  padding: 7px 10px; 
  color: var(--white);
  font-family: var(--font-main); 
  font-size: 0.76rem;
  outline: none; 
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-row input:focus {
  border-color: var(--green); 
  box-shadow: 0 0 8px rgba(0,255,68,0.25);
}

/* ══════════════════════════════
   BOTÓN GENÉRICO
══════════════════════════════ */
.btn-cta {
  width: 100%; 
  background: var(--green); 
  color: #000;
  font-family: var(--font-main); 
  font-weight: 800;
  font-size: 0.76rem; 
  letter-spacing: 1px; 
  text-transform: uppercase;
  padding: 12px; 
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  box-shadow: 0 0 22px rgba(0,255,68,0.50); 
  transition: all 0.2s;
}
.btn-cta:hover {
  background: #22ff66; 
  box-shadow: 0 0 40px rgba(0,255,68,0.80); 
  transform: translateY(-2px);
}

/* ══════════════════════════════
   FULL WIDTH IMAGES
══════════════════════════════ */
.full-img-section {
  width: 99.99%; 
  margin: 0; 
  padding: 0; 
  display: block; 
  line-height: 0;
}
.no-pad { 
  padding: 0; }
.full-img {
  display: block; 
  width: 99.99%; 
  height: auto; 
  object-fit: cover;
  margin: 0; 
  padding: 0; 
  border: none; 
  outline: none;
}

/* ══════════════════════════════
   CTA FINAL
══════════════════════════════ */
.cta-section {
  padding: 50px 40px 70px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  background: #000;
}

.cta-card {
  position: relative;
  max-width: 960px;
  width: 100%;
  border-radius: 26px;
  border: 2px solid var(--green);

  /*
    Degradado verde MUY brillante arriba y abajo,
    negro puro en el centro — todo INTERNO, sin glow exterior
  */
  background:
    linear-gradient(
      180deg,
      rgba(0, 255, 68, 0.85)  0%,
      rgba(0, 200, 50, 0.50) 12%,
      rgba(0,  80, 20, 0.20) 24%,
      #080808                32%,
      #080808                68%,
      rgba(0,  80, 20, 0.20) 76%,
      rgba(0, 200, 50, 0.50) 88%,
      rgba(0, 255, 68, 0.85) 100%
    );

  /* Sin glow externo — solo borde */
  box-shadow: none;

  padding: 40px 52px 44px;
  text-align: center;
  animation: fadeUp 0.7s ease both;
}

/* Sub-título blanco */
.cta-pre {
  font-size: 0.90rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2px;
  letter-spacing: 0.2px;
}

/* "RED ACADÉMICA" — degradado blanco (arriba) → verde (abajo) */
.cta-title {
  font-size: clamp(2.6rem, 6.5vw, 4.2rem);
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.05;
  margin-bottom: 8px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ccffdd 35%,
    #00ff44 65%,
    #00bb33 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 12px rgba(0,255,68,0.50));
}

/* Línea blanca decorativa bajo el título */
.cta-underline {
  width: 65%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
  margin: 0 auto 26px;
}

/* ── Panel oscuro interior ── */
.cta-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(0, 0, 0, 0.72);
  border: 1.5px solid rgba(0, 255, 68, 0.20);
  border-radius: 14px;
  padding: 22px 22px 22px 20px;
}

/* Campos */
.cta-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cta-row label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #ffffff;
  min-width: 145px;
  text-align: right;
  flex-shrink: 0;
}

/* Inputs blancos como en la imagen */
.cta-row input {
  flex: 1;
  background: rgba(255, 255, 255, 0.88);
  border: none;
  border-radius: 5px;
  padding: 9px 12px;
  color: #111;
  font-family: var(--font-main);
  font-size: 0.80rem;
  outline: none;
  transition: box-shadow 0.2s;
}
.cta-row input:focus {
  box-shadow: 0 0 0 2px var(--green);
}

/* Botón más pequeño */
.btn-eco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  background: var(--green);
  color: #000;
  font-family: var(--font-main);
  font-weight: 900;
  font-size: 0.78rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 14px 18px;
  min-width: 170px;
  max-width: 190px;
  line-height: 1;
  transition: all 0.2s;
  box-shadow: 0 0 18px rgba(0,255,68,0.45);
}
.btn-eco:hover {
  background: #22ff66;
  box-shadow: 0 0 36px rgba(0,255,68,0.75);
  transform: translateY(-2px);
}
.btn-eco-text {
  line-height: 1.4;
  text-align: left;
}
.btn-arrow {
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* ══════════════════════════════
   FOOTER
══════════════════════════════ */
.site-footer {
  border-top: 1px solid rgba(0,255,68,0.15);
  padding: 36px 52px;
  display: flex;
  align-items: flex-start;
  gap: 48px;
  /* Degradado verde arriba, negro abajo — igual a la imagen */
  background: linear-gradient(
    180deg,
    rgba(0, 160, 45, 0.55) 0%,
    rgba(0,  80, 20, 0.30) 20%,
    #080808                50%,
    #080808               100%
  );
}

/* Columnas */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Col 1 — Brand */
.footer-brand { flex: 1.4; }

.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.footer-brand-name {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: 0.5px;
}

.footer-desc {
  font-size: 0.99rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.65;
  max-width: 300px;
}

/* Col 2 — Contacto */
.footer-contact { flex: 1; padding-top: 5px; }

.footer-contact-title {
  font-size: 0.99rem;
  font-weight: 800;
  color: var(--green);
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.footer-email {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.99rem;
  color: rgba(255,255,255,0.70);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-email:hover { color: var(--green); }

.footer-email-icon {
  font-size: 0.85rem;
  color: var(--green);
}

/* Col 3 — Redes */
.footer-social {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.social-row {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.social-row-2 {
  justify-content: center;
}

/* Botones circulares verdes */
.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 0 10px rgba(0,255,68,0.35);
}

.social-btn svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.social-btn:hover {
  background: #22ff66;
  transform: translateY(-3px);
  box-shadow: 0 0 22px rgba(0,255,68,0.70);
}

/* ══════════════════════════════
   RESPONSIVE
══════════════════════════════ */
@media (max-width: 960px) {
  .site-header { 
    flex-direction: column; 
    padding: 16px 20px; 
    text-align: center; }

  .hero-inner { 
    grid-template-columns: 1fr; 
    padding: 28px 20px; }

  .hero-image-wrap { 
    min-height: 260px; 
    order: -1; }

  .hero-diagram { 
    order: -2; }

  .diagram-img { max-width: 200px; }
  .cta-card { padding: 30px 20px; }
  .site-footer { flex-direction: column; text-align: center; }
}

@media (max-width: 700px) {
  .cta-inner { flex-direction: column; align-items: stretch; }
  .cta-row { flex-direction: column; align-items: flex-start; }
  .cta-row label { min-width: unset; text-align: left; }
  .btn-eco { max-width: 100%; width: 100%; justify-content: center; }
}

@media (max-width: 500px) {
  .site-header { padding: 12px 16px; }
  .header-title { font-size: 1rem; }
  .cta-section { padding: 36px 14px 56px; }
  .site-footer { padding: 18px 16px; }
}
</style>
