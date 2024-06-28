<script setup>
import './reset-password-section.scss';
import { ResetPasswordForm } from '@/features/ResetPassword';

const isSuccess = ref(false);
</script>

<template>
  <section class="reset-password">
    <div class="reset-password__container _container">
      <div class="reset-password__body">
        <ResetPasswordForm
          v-if="!isSuccess"
          :is-success="isSuccess"
          @set-is-success="(value) => (isSuccess = value)"
        />
        <div v-if="isSuccess" class="reset-password__form reset-password__form-success">
          <div class="reset-password__success-message-container">
            <h2 class="reset-password__inputs-title heading_h3">
              Мы отправили вам письмо с инструкцией по сбросу пароля
            </h2>
            <img src="../assets/images/icons/email-send.png" alt="email-send" >
            <NuxtLink to="/" class="button button_primary reset-password__login-btn"
              >Вернуться на главную</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
