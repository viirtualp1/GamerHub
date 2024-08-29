<template>
  <gh-modal>
    <template #header>Войти</template>

    <v-form>
      <v-text-field label="Логин" variant="outlined" />

      <v-text-field label="Пароль" variant="outlined" />

      <v-btn color="success" variant="tonal"> Далее </v-btn>
    </v-form>
  </gh-modal>
</template>

<script setup lang="ts">
import { GhModal } from '@/domains/ui'
</script>

<style lang="scss" src="./AuthModal.scss"></style>
