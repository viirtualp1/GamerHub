<template>
  <v-app>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: 'GamerHub',
  meta: [
    {
      name: 'description',
      content: 'GamerHub - Социальная сеть для геймеров.',
    },
  ],
})
</script>
