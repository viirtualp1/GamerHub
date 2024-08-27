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
import ArrowRightIcon from '@/assets/icons/icon-arrow-right.svg'
import PeopleIcon from '@/assets/icons/icon-people.svg'
import MovieIcon from '@/assets/icons/icon-movie.svg'

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
      width: 20,
      height: 24,
    },
  },
  {
    name: 'Чаты',
    description: 'Общение!',
    link: '/chat',
    icon: {
      image: PeopleIcon,
      width: 24,
      height: 24,
    },
  },
  {
    name: 'Видео',
    description: 'Дота, кс, валорант!',
    link: '/videos',
    icon: {
      image: MovieIcon,
      width: 24,
      height: 24,
    },
  },
])
</script>

<style src="./AppPage.scss"></style>
