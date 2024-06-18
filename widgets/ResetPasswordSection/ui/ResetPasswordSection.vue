<script setup>
import './reset-password-section.scss';

const isFormSubmitted = ref(false);

const sendForm = () => {
  isFormSubmitted.value = true;
};
</script>

<template>
  <section class="reset-password">
    <div class="reset-password__container _container">
      <div class="reset-password__body">
        <form
          v-if="!isFormSubmitted"
          class="reset-password__form"
          novalidate
          @submit.prevent="sendForm"
        >
          <h2 class="reset-password__inputs-title heading_h3">
            Забыли пароль? Введите свой адрес электронной почты ниже, и мы вышлем вам электронное
            письмо, позволяющее сбросить его.
          </h2>
          <div class="reset-password__inputs-container">
            <div class="reset-password__input-container">
              <input
                class="reset-password__input reset-password__input-email"
                type="email"
                placeholder="Email"
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
        <Transition>
          <div v-if="isFormSubmitted" class="reset-password__form reset-password__form-success">
            <div class="reset-password__success-message-container">
              <h2 class="reset-password__inputs-title heading_h3">
                Мы отправили вам письмо с инструкцией по сбросу пароля
              </h2>
              <img src="../assets/images/icons/email-send.png" alt="email-send" >
              <NuxtLink to="/" class="button button_primary reset-password__login-btn"
                >Вернуться ко входу</NuxtLink
              >
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
