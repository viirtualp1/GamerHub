<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from '@/domains/app'
</script>
