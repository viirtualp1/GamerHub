<template>
  <div class="app-page">
    <div class="app-page__content container">
      <div class="app-page__row">
        <app-card
          v-for="(card, cardIdx) in cards"
          :key="cardIdx"
          class="app-page__card"
          :icon="card.icon"
          @click="card.onClick"
        >
          <app-card-title>
            {{ card.name }}
          </app-card-title>

          <app-card-text>
            {{ card.description }}
          </app-card-text>
        </app-card>
      </div>
    </div>

    <auth-modal v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from '#app'
import { AppCard, AppCardTitle, AppCardText } from '@/domains/app'
import { useAuth } from '@/domains/auth'
import { AuthModal } from '@/domains/auth'
import { useGhModal } from '@/domains/ui'

const { loggedIn } = useAuth()
const { isOpen, open } = useGhModal()
const router = useRouter()

const cards = computed(() =>
  [
    {
      name: loggedIn.value ? 'Профиль' : 'Вход',
      description: 'Познавайте мир гейминга с нами!',
      onClick: loggedIn.value ? () => router.push('/profile') : open,
      icon: {
        name: 'mdi-login',
        size: 20,
      },
    },
    {
      name: 'Форумы',
      description: 'Обсуждайте игровые события',
      onClick: () => router.push('/forum'),
      icon: {
        name: 'mdi-people',
        size: 24,
      },
    },
    loggedIn.value && {
      name: 'Чаты',
      description: 'Общение!',
      onClick: () => router.push('/chat'),
      icon: {
        name: 'mdi-account-multiple',
        size: 24,
      },
    },
    {
      name: 'Видео',
      description: 'Дота, кс, валорант!',
      onClick: () => router.push('/video'),
      icon: {
        name: 'mdi-movie',
        size: 24,
      },
    },
  ].filter(Boolean),
)
</script>

<style src="./AppPage.scss"></style>
