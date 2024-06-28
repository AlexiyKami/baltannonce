<script setup>
import './reset-password-form.scss';
import { isEmailCorrect } from '@/shared/lib/helpers/fields-validation';

const emits = defineEmits(['setIsSuccess']);
const submitError = ref(false);
const email = ref('');

const sendForm = () => {
  // Validate all fields
  if (!email.value || !isEmailCorrect(email.value)) {
    submitError.value = true;
  } else {
    emits('setIsSuccess', true);
    submitError.value = false;
  }
};
</script>

<template>
  <form class="reset-password__form" novalidate @submit.prevent="sendForm">
    <h2 class="reset-password__inputs-title heading_h3">
      Забыли пароль? Введите свой адрес электронной почты ниже, и мы вышлем вам электронное письмо,
      позволяющее сбросить его.
    </h2>
    <div class="reset-password__inputs-container">
      <div class="reset-password__input-container">
        <input
          v-model="email"
          class="reset-password__input reset-password__input-email"
          type="email"
          placeholder="Email"
        >
        <span
          v-if="submitError && !email"
          class="reset-password__error-message reset-password__error-message_small"
          >Пожалуйста, заполните поле</span
        >
        <span
          v-if="submitError && !isEmailCorrect(email) && email"
          class="reset-password__error-message reset-password__error-message_small"
          >Email который вы ввели не является допустимым</span
        >
      </div>
      <button class="button button_primary reset-password__button" @submit.prevent="sendForm">
        Отправить письмо
      </button>
      <NuxtLink to="/" class="button text-button reset-password__login-link"
        >Вернуться на главную</NuxtLink
      >
    </div>
  </form>
</template>
