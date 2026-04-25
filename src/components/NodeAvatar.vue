<template>
  <div class="node-wrap">
    <div class="nd-avatar" :class="[`avatar-${color}`, `size-${size}`]">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
      </svg>
    </div>
    <span v-if="label" class="nd-label" :class="`label-${color}`">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NodeAvatar',
  props: {
    color: {
      type: String as () => 'blue' | 'red',
      default: 'blue',
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String as () => 'md' | 'sm',
      default: 'md',
    },
  },
})
</script>

<style scoped>
.node-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.nd-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.nd-avatar svg { fill: white; }

/* Sizes */
.size-md { width: 50px; height: 50px; }
.size-md svg { width: 28px; height: 28px; }

.size-sm { width: 38px; height: 38px; }
.size-sm svg { width: 22px; height: 22px; }

/* Colors */
.avatar-blue {
  background: radial-gradient(circle, #2255ff, #0033cc);
  box-shadow: 0 0 14px rgba(30, 80, 255, 0.65);
}

.avatar-red {
  background: radial-gradient(circle, #ff3333, #cc0000);
  box-shadow: 0 0 14px rgba(255, 50, 50, 0.65);
}

/* Labels */
.nd-label {
  font-size: 0.58rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  white-space: nowrap;
}

.label-blue { background: #1a4fff; color: white; }
.label-red  { background: #cc0000; color: white; }
</style>