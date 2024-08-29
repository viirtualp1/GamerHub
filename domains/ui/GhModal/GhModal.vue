<template>
  <v-dialog class="gh-modal" v-model="currentModelValue" :max-width="maxWidth">
    <v-card>
      <v-card-title class="gh-modal__header">
        <slot name="header" />

        <v-spacer />

        <v-btn :icon="true" :elevation="0" @click="close">
          <v-icon icon="mdi-close" />
        </v-btn>
      </v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-card-actions v-if="$slots.actions">
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

interface Props {
  modelValue: boolean
  maxWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  maxWidth: 500,
})

const emit = defineEmits<{
  (e: 'update:model-value', v: boolean): void
}>()

const currentModelValue = useVModel(props, 'modelValue', emit)

function close() {
  currentModelValue.value = false
}
</script>

<style lang="scss" src="./GhModal.scss"></style>
