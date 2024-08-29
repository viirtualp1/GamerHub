<template>
  <component :is="component" class="app-card" :to="to">
    <slot />

    <div v-if="icon" class="app-card__icon">
      <v-icon
        v-if="icon"
        :icon="icon.name"
        :size="icon.size"
        class="app-card__icon-image"
      />
    </div>
  </component>
</template>

<script setup lang="ts">
import type { IconOptions } from './types'

const props = defineProps<{
  to?: string
  icon?: IconOptions
}>()

const component = computed(() => {
  return props.to ? 'nuxt-link' : 'button'
})
</script>

<style src="./AppCard.scss"></style>
