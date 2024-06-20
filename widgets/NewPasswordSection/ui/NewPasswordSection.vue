<script setup>
import './new-password-section.scss';
import { NewPasswordForm } from '@/features/NewPassword';

const isSuccess = ref(false);
</script>

<template>
  <section class="new-password">
    <div class="new-password__container _container">
      <div class="new-password__body">
        <NewPasswordForm v-if="!isSuccess" @set-is-success="(value) => (isSuccess = value)" />
        <div v-if="isSuccess" class="new-password__form new-password__form-success">
          <div class="new-password__success-message-container">
            <h2 class="new-password__inputs-title heading_h3">
              Ваш пароль был успешно обновлен. Теперь вы можете войти с новым паролем через логин
              справа сверху.
            </h2>
            <img src="../assets/images/check-circle.png" alt="check-new-password" >
            <NuxtLink to="/" class="button button_primary new-password__login-btn"
              >Вернуться на главную</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
