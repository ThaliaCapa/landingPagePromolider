<template>
  <div class="app-root">
    <div class="global-glow" aria-hidden="true"></div>

    <!-- ══════════ HEADER ══════════ -->
    <header class="site-header">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <img
        src="/images/Encabezado.png"
        alt="Promolíder Header"
        class="header-img"
      />
    </header>
    <br />

    <!-- ══════════ HERO ══════════ -->
    <section class="hero-section">
      <div class="hero-grid">
        <!-- Col 1: Diagrama -->
        <div class="hero-col-left">
          <br />
          <img
            src="/images/grafico.png"
            alt="Red Promolider"
            class="diagram-img"
          />
        </div>

        <!-- Col 2: Mujer -->
        <div class="hero-col-center">
          <img src="/images/srta.png" alt="Promolider" class="woman-img" />
        </div>

        <!-- Col 3: Formulario -->
        <div class="hero-col-right">
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
            <button class="btn-green" @click="handleHeroSubmit">
              RESERVA MI POSICIÓN
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ BENEFICIOS ══════════ -->
    <section class="block-section">
      <img
        src="/images/Beneficios.png"
        alt="Beneficios Promolider"
        class="block-img"
      />
    </section>

    <!-- ══════════ FEATURES ══════════ -->
    <section class="block-section">
      <img
        src="/images/Features.png"
        alt="Features Promolider"
        class="block-img"
      />
    </section>

    <!-- ══════════ CTA ══════════ -->
    <section class="cta-section">
      <div class="cta-card">
        <!-- Título imagen -->
        <div class="cta-title-wrap">
          <img
            src="/images/redAcademica.png"
            alt="Red Académica"
            class="cta-title-img"
          />
        </div>

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
              <label>Correo Electrónico:</label>
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
      <!-- Col 1: Logo + descripción -->
      <div class="footer-col footer-brand">
        <br />
        <div class="footer-logo-row">
          <img
            src="/images/logo.png"
            alt="Promolíder"
            class="footer-logo-img"
          />
        </div>
        <br />
        <p class="footer-desc">
          Únete a esta maravillosa oportunidad y conoce personas
          extraordinarias. Los miembros de nuestra red disfrutan de
          entrenamientos, capacitación acelerada y apoyo especializado. En
          Promolíder la consigna es: "Juntos lograremos monetizar tus
          conocimientos y experiencia".
        </p>
      </div>

      <!-- Col 2: Contacto -->
      <div class="footer-col footer-contact">
        <br />
        <p class="footer-contact-title">Contáctanos</p>
        <br />
        <a href="mailto:informacion@promolider.org" class="footer-email">
          <span>✉</span> informacion@promolider.org
        </a>
      </div>

      <!-- Col 3: Redes sociales -->
      <div class="footer-col footer-social">
        <br />
        <div class="social-row">
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="social-btn"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="social-btn"
            title="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            class="social-btn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <div class="social-row">
          <a
            href="https://www.youtube.com"
            target="_blank"
            class="social-btn"
            title="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
              />
              <polygon
                points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                fill="#000"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            class="social-btn"
            title="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.33 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const form = reactive({
      nombres: "",
      apellidos: "",
      correo: "",
      whatsapp: "",
    });
    function handleHeroSubmit(): void {
      console.log("Hero:", form);
    }
    const cta = reactive({ nombres: "", whatsapp: "", correo: "" });
    function handleCtaSubmit(): void {
      console.log("CTA:", cta);
    }
    const year = computed(() => new Date().getFullYear());
    return { form, handleHeroSubmit, cta, handleCtaSubmit, year };
  },
});
</script>

<style>
/* ════════════════════════════
   RESET & VARIABLES
════════════════════════════ */
:root {
  --green: #00ff44;
  --black: #000;
  --white: #fff;
  --font: "Montserrat", sans-serif;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font);
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 68, 0.3);
  border-radius: 3px;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ════════════════════════════
   APP ROOT & GLOW
════════════════════════════ */
.app-root {
  position: relative;
  min-height: 100vh;
  background: #000;
  overflow-x: hidden;
}

.global-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(
      ellipse 110% 60% at 50% -8%,
      rgba(0, 210, 55, 0.2) 0%,
      transparent 56%
    ),
    radial-gradient(
      ellipse 90% 50% at 50% 108%,
      rgba(0, 190, 48, 0.16) 0%,
      transparent 56%
    );
}
.app-root > * {
  position: relative;
  z-index: 1;
}

.green-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
  box-shadow: 0 0 14px rgba(0, 255, 68, 0.55);
}

/* ════════════════════════════
   HEADER — imagen full width
════════════════════════════ */
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
  background: #000;
  border-bottom: 1px solid rgba(0, 255, 68, 0.15);
}
.header-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
  object-position: center;
}

/* ════════════════════════════
   HERO — 3 columnas
════════════════════════════ */
.hero-section {
padding: 20px 0;
overflow: hidden;
  background: radial-gradient(
    ellipse 80% 90% at 50% 55%,
    rgba(0, 65, 16, 0.25) 0%,
    transparent 70%
  );
  padding: 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 28% 1fr 30%;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 28px 0;
  min-height: 500px;
  gap: 12px;
}

/* Diagrama izquierda */
.hero-col-left {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
}
.diagram-img {
  width: 500%;
  max-width: 2500px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(0, 255, 68, 0.18));
}

/* Mujer centro */
.hero-col-center {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  overflow: visible;
}
.woman-img {
  width: 200%;
  max-width: 740px;
  height: auto;
  object-fit: contain;
  object-position: bottom;
  display: block;
  margin-top: -50px;
  filter: drop-shadow(0 0 24px rgba(0, 255, 68, 0.16));
  animation: fadeUp 0.8s ease both;
}

/* Formulario derecha */
.hero-col-right {
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 7px;
  z-index: 10;
}
.form-box {
 width: 900% !important;
  max-width: 680px !important; 
  background: rgba(0, 10, 2, 0.97);
  border: 2px solid #00ff44;
  border-radius: 20px;
  padding: 40px 30px !important;
  box-shadow: 0 0 50px rgba(0, 255, 68, 0.2);
}
.form-pre {
  font-size: 1.1rem; 
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
}
.form-title {
  font-size: 1.5rem; 
  font-weight: 900;
  color: var(--green);
  text-align: center;
  text-shadow: 0 0 15px rgba(0, 255, 68, 0.6);
  margin-bottom: 25px;
}
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 15px; 
  margin-bottom: 25px;
}
.form-row {
  display: flex;
  align-items: center;
  gap: 7px;
}
.form-row label {
  font-size: 1rem;
  font-weight: 800;
  color: #00ff44;
  min-width: 100px;
  text-align: right;
}
.form-row input {
  height: 45px; 
  background: #ffffff; 
  color: #000; 
  font-size: 1.1rem !important;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
}
.form-row input:focus {
  border-color: var(--green);
  box-shadow: 0 0 7px rgba(0, 255, 68, 0.25);
}

/* ════════════════════════════
   BOTÓN VERDE
════════════════════════════ */
.btn-green {
  display: block;
  width: 100%;
  background: var(--green);
  color: #000;
  font-family: var(--font);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 68, 0.55);
  transition: all 0.2s;
}
.btn-green:hover {
  background: #22ff66;
  box-shadow: 0 0 38px rgba(0, 255, 68, 0.85);
  transform: translateY(-2px);
}

/* ════════════════════════════
   IMÁGENES FULL WIDTH
════════════════════════════ */
.block-section {
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
  line-height: 0;
  font-size: 0;
}
.block-img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  object-fit: fill;
}

/* ════════════════════════════
   CTA
════════════════════════════ */
.cta-section {
  padding: 50px 24px 70px;
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
  background: linear-gradient(
    180deg,
    rgba(0, 255, 68, 0.85) 0%,
    rgba(0, 200, 50, 0.5) 12%,
    rgba(0, 80, 20, 0.2) 24%,
    #080808 32%,
    #080808 68%,
    rgba(0, 80, 20, 0.2) 76%,
    rgba(0, 200, 50, 0.5) 88%,
    rgba(0, 255, 68, 0.85) 100%
  );
  padding: 36px 48px 42px;
  text-align: center;
  animation: fadeUp 0.7s ease both;
}

.cta-title-wrap {
  margin-bottom: 24px;
}

.cta-pre {
  font-size: 0.92rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.cta-title-img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: -20px auto 20px;
  max-height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 2px 12px rgba(0, 255, 68, 0.5));
}

/* Panel interior oscuro */
.cta-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(0, 0, 0, 0.72);
  border: 7.5px solid #1ae700;
  border-radius: 34px;
  padding: 22px 22px 22px 20px;
}

.cta-fields {
  flex: 2.5%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cta-row label {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1ae700;
  min-width: 200px;
  text-align: right;
  flex-shrink: 0;
}
.cta-row input {
  flex: 1;
  background: rgba(255, 255, 255, 0.88);
  border: none;
  border-radius: 7px;
  padding: 9px 12px;
  color: #111;
  font-family: var(--font);
  font-size: 1.25rem;
  outline: none;
  transition: box-shadow 0.2s;
}
.cta-row input:focus {
  box-shadow: 0 0 0 2px var(--green);
}

.btn-eco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
  background: var(--green);
  color: #f9fbf9;
  font-family: var(--font);
  font-weight: 900;
  font-size: 1.25rem;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 14px 28px;
  min-width: 165px;
  max-width: 250px;
  line-height: 1;
  transition: all 0.2s;
  box-shadow: 0 0 18px rgba(0, 255, 68, 0.45);
}
.btn-eco:hover {
  background: #22ff66;
  box-shadow: 0 0 36px rgba(0, 255, 68, 0.75);
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

/* ════════════════════════════
   FOOTER
════════════════════════════ */
.site-footer {
  border-top: 1px solid rgba(0, 255, 68, 0.15);
  padding: 36px 48px;
  display: flex;
  align-items: flex-start;
  gap: 48px;
  background: linear-gradient(
    180deg,
    rgba(0, 160, 45, 0.55) 0%,
    rgba(0, 80, 20, 0.3) 20%,
    #080808 50%,
    #080808 100%
  );
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-brand {
  flex: 1.4;
}

.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}
.footer-logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 5px rgba(0, 255, 68, 0.3));
}

.footer-desc {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
  max-width: 600px;
}

.footer-contact {
  flex: 1;
  padding-top: 5px;
}
.footer-contact-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--green);
  margin-bottom: 6px;
}
.footer-email {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-email:hover {
  color: var(--green);
}

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

.social-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 0 10px rgba(0, 255, 68, 0.35);
}
.social-btn svg {
  width: 22px;
  height: 22px;
}
.social-btn:hover {
  background: #22ff66;
  transform: translateY(-3px);
  box-shadow: 0 0 22px rgba(0, 255, 68, 0.7);
}

/* ════════════════════════════
   RESPONSIVE — TABLET (max 1100px)
════════════════════════════ */
@media (max-width: 1100px) {
  /* Hero: columna única */
  .hero-grid {
    display: grid;
    grid-template-columns: 20% 1fr 35%;
    align-items: center;
    max-width: 1400px; 
    margin: 0 auto;
    gap: 0;
    overflow: visible;
  }
  .hero-col-left {
    order: 2;
    padding: 0;
    justify-content: center;
  }
  .hero-col-center {
    order: 1;
    min-height: 280px;
  }
  .hero-col-right {
    order: 3;
    padding: 0 0 90px;
    justify-content: center;
    transform: translateX(-60px); 
    z-index: 20;
  }
  .woman-img {
    margin-top: 0;
    max-width: 340px;
  }
  .diagram-img {
    max-width: 2500px;
  }

  /* CTA */
  .cta-card {
    padding: 28px 20px;
  }
  .cta-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  .cta-row label {
    min-width: 130px;
  }
  .btn-eco {
    max-width: 100%;
    width: 100%;
    justify-content: center;
  }

  /* Footer */
  .site-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 24px;
    gap: 28px;
  }
  .footer-desc {
    max-width: 100%;
  }
  .footer-email {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .header-img {
    max-height: 70px;
  }

  .hero-grid {
    padding: 16px 14px 0;
  }
  .woman-img {
    max-width: 260px;
  }
  .diagram-img {
    max-width: 2500px;
  }

  .form-box {
    padding: 16px 12px 14px;
  }
  .form-title {
    font-size: 0.82rem;
  }

  .cta-section {
    padding: 36px 14px 56px;
  }
  .cta-card {
    padding: 24px 14px;
    border-radius: 18px;
  }
  .cta-pre {
    font-size: 0.8rem;
  }
  .cta-title-img {
    max-height: 70px;
  }
  .cta-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .cta-row label {
    min-width: unset;
    text-align: left;
  }
  .cta-row input {
    width: 100%;
  }

  .site-footer {
    padding: 20px 16px;
    gap: 20px;
  }
  .social-btn {
    width: 40px;
    height: 40px;
  }
  .social-btn svg {
    width: 18px;
    height: 18px;
  }
}

/* ════════════════════════════
   RESPONSIVE — LARGE (min 1280px)
════════════════════════════ */
@media (min-width: 1280px) {
  .hero-grid {
    padding: 28px 40px 0;
  }
  .diagram-img {
    max-width: 2500px;
  }
  .woman-img {
    max-width: 580px;
  }
}

/* ════════════════════════════════════════════════
   AJUSTES SOLO PARA MÓVILES 
   ════════════════════════════════════════════════ */
@media (max-width: 960px) {
  /* 1. Cambiamos el Grid a una sola columna */
  .hero-grid {
    grid-template-columns: 1fr !important;
    padding: 20px !important;
    text-align: center;
    gap: 30px !important;
  }

  /* 2. Reordenamos: 1° Chica, 2° Formulario, 3° Diagrama */
  .hero-col-center { order: 1; }
  .hero-col-right { order: 2; margin: 0 !important; transform: none !important; }
  .hero-col-left { order: 3; }

  /* 3. Ajustamos el tamaño de las imágenes para que no se corten */
  .woman-img {
    max-width: 280px !important;
    margin: 0 auto !important;
  }
  
  .diagram-img {
    max-width: 100% !important;
  }

  /* 4. El formulario ocupa el ancho disponible y se ve más cómodo */
  .form-box {
    max-width: 100% !important;
    width: 100% !important;
    padding: 25px 20px !important;
  }

  /* 5. Ponemos los labels encima de los inputs en el celular */
  .form-row {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 5px !important;
  }

  .form-row label {
    text-align: left !important;
    min-width: 100% !important;
  }

  .form-row input {
    width: 100% !important;
  }

  /* 6. Ajuste del CTA para que no se amontone */
  .cta-inner {
    flex-direction: column !important;
    padding: 20px !important;
  }
  
  .cta-row {
    flex-direction: column !important;
    align-items: stretch !important;
  }

  .cta-row label {
    text-align: left !important;
    min-width: 100% !important;
  }
  
  .btn-eco {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* 7. Footer en vertical */
  .site-footer {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 30px !important;
  }
}
</style>
