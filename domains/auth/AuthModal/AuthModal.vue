<template>
  <gh-modal>
    <template #header>Войти</template>

    <vee-form v-slot="{ submitForm }">
      <form @submit.prevent="submitForm">
        <v-text-field
          v-model="login"
          label="Логин"
          variant="outlined"
          :error-message="errors.login"
          v-bind="loginProps"
        />

        <v-text-field
          v-model="password"
          label="Пароль"
          variant="outlined"
          :error-message="errors.login"
          v-bind="passwordProps"
        />

        <v-btn type="submit" color="success" variant="tonal"> Далее </v-btn>
      </form>
    </vee-form>
  </gh-modal>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { GhModal } from '@/domains/ui'

interface AuthForm {
  login: string
  password: string
}

const { defineField, errors, handleSubmit } = useForm<AuthForm>({
  initialValues: {
    login: '',
    password: '',
  },
})

const [login, loginProps] = defineField('login', {
  validateOnBlur: true,
})

const [password, passwordProps] = defineField('password', {
  validateOnBlur: true,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<style lang="scss" src="./AuthModal.scss"></style>
