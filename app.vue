<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
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
