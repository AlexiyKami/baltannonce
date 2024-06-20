<script setup>
import './new-password-form.scss';
import { PasswordIcon } from '@/shared/ui';

const emits = defineEmits('setIsSuccess');

const password = ref('');
const passwordConfirmation = ref('');
const showPassword = ref(false);
const showPasswordConfirmation = ref(false);

const sendForm = () => {
  emits('setIsSuccess', true);
};
</script>

<template>
  <form class="new-password__form" novalidate @submit.prevent="sendForm">
    <h2 class="new-password__inputs-title heading_h3">Введите новый пароль для вашего аккаунта</h2>
    <div class="new-password__inputs-container">
      <div class="new-password__inputs">
        <div class="new-password__input-container">
          <input
            v-model="password"
            class="new-password__input new-password__input-password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Пароль"
          >
          <PasswordIcon
            :show-password="showPassword"
            @set-visibility="(value) => (showPassword = value)"
          />
        </div>
        <div class="new-password__input-container">
          <input
            v-model="passwordConfirmation"
            class="new-password__input new-password__input-password-confirmation"
            :type="showPasswordConfirmation ? 'text' : 'password'"
            placeholder="Подтверждение пароля"
          >
          <PasswordIcon
            :show-password="showPasswordConfirmation"
            @set-visibility="(value) => (showPasswordConfirmation = value)"
          />
        </div>
      </div>
      <button class="button button_primary new-password__button" @submit.prevent="sendForm">
        Сохранить пароль
      </button>
    </div>
  </form>
</template>
