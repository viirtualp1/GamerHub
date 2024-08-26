<template>
  <nuxt-link class="app-card" :to="to">
    <slot />

    <div v-if="icon" class="app-card__icon">
      <img
        :src="icon.image"
        :width="icon.width"
        :height="icon.height"
        class="app-card__icon-image"
        :alt="icon.alt || 'Card icon'"
      />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { IconOptions } from './types'

defineProps<{
  to: string
  icon?: IconOptions
}>()
</script>

<style src="./AppCard.scss"></style>
