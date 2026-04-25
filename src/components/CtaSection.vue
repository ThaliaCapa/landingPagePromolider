<template>
  <section class="cta-section">
    <div class="cta-box fade-up">
      <p class="cta-pre">Estás a un paso de asegurar tu lugar en una</p>
      <h2 class="cta-title">RED ACADÉMICA</h2>

      <div class="cta-fields">
        <input v-model="form.nombres"  type="text"  placeholder="Nombres" />
        <input v-model="form.whatsapp" type="tel"   placeholder="Whatsapp" />
        <input v-model="form.correo"   type="email" placeholder="Correo Electrónico" />
      </div>

      <button class="btn-cta" @click="handleSubmit">ACCEDER AL ECOSISTEMA AHORA</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface CtaForm { nombres: string; whatsapp: string; correo: string }

export default defineComponent({
  name: 'CtaSection',
  setup() {
    const form = reactive<CtaForm>({ nombres: '', whatsapp: '', correo: '' })
    function handleSubmit(): void { console.log('CTA submit:', form) }
    return { form, handleSubmit }
  },
})
</script>

<style scoped>
.cta-section {
  padding: 60px 40px 80px;
  display: flex;
  justify-content: center;
}

.cta-box {
  background: rgba(0,10,2,0.92);
  border: 1.5px solid rgba(0,255,68,0.35);
  border-radius: 24px;
  padding: 50px 60px;
  max-width: 680px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 60px rgba(0,255,68,0.12);
}

.cta-pre {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 6px;
}

.cta-title {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 900;
  font-style: italic;
  color: var(--green);
  text-shadow: 0 0 30px rgba(0,255,68,0.5);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 32px;
}

.cta-fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.cta-fields input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(0,255,68,0.28);
  border-radius: 8px;
  padding: 13px 16px;
  color: var(--white);
  font-family: var(--font-main);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

.cta-fields input::placeholder { color: rgba(255,255,255,0.28); }
.cta-fields input:focus { border-color: var(--green); box-shadow: 0 0 10px rgba(0,255,68,0.2); }

.btn-cta {
  background: var(--green);
  color: #000;
  font-family: var(--font-main);
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 24px rgba(0,255,68,0.45);
  transition: all 0.2s;
}

.btn-cta:hover {
  background: #1aff55;
  box-shadow: 0 0 40px rgba(0,255,68,0.75);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .cta-box { padding: 36px 22px; }
}
</style>