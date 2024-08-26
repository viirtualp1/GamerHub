<template>
  <div class="app-page">
    <div class="app-page__content container">
      <div class="app-page__row">
        <app-card
          v-for="(card, cardIdx) in cards"
          :key="cardIdx"
          class="app-page__card"
          :to="card.link"
          :icon="card.icon"
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
  </div>
</template>

<script setup lang="ts">
import {
  AppCard,
  AppCardTitle,
  AppCardText,
  type IconOptions,
} from '@/domains/app'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'

interface CardData {
  name: string
  description: string
  link: string
  icon: IconOptions
}

const cards = computed<CardData[]>(() => [
  {
    name: 'Каталог',
    description: 'Игры, люди!',
    link: '/catalog',
    icon: {
      image: ArrowRightIcon,
      width: 24,
      height: 24,
    },
  },
])
</script>

<style src="./AppPage.scss"></style>
