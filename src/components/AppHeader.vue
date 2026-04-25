<template>
  <header class="site-header">
    <div class="logo">
      <!-- Logo SVG icon -->
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="30" height="30" rx="6" fill="none"
              stroke="#00ff44" stroke-width="2"/>
        <path d="M10 12 L10 24 M10 12 Q18 12 18 18 Q18 24 10 24"
              stroke="#00ff44" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>
      <span>Promolíder</span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'AppHeader' })
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  padding: 16px 40px;
  background: rgba(0, 0, 0, 0.80);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 68, 0.12);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-alt);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
}

.logo svg {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}
</style>