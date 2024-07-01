<script setup>
import './login-popup.scss';
import { PasswordField, NickField } from '@/entities/Fields';
import { SpinnerDots } from '@/shared/ui';

defineProps({
  isLoginPopupOpened: { type: Boolean, required: true }
});

const emits = defineEmits(['setIsLoginPopupOpened']);

const authStore = useAuthStore();

const nick = ref('');
const password = ref('');
const isNickCorrect = ref(false);
const isPasswordCorrect = ref(false);
const submitError = ref(false);

const disableBlur = ref(false);

const sendForm = async () => {
  // Validate all fields
  if (!isNickCorrect.value || !isPasswordCorrect.value) {
    submitError.value = true;
  } else {
    disableBlur.value = true;
    await authStore.login({ username: nick.value, password: password.value });
    submitError.value = false;
    emits('setIsLoginPopupOpened', false);
    disableBlur.value = false;
  }
};
</script>

<template>
  <div
    class="header__login-popup-container"
    :class="{
      active: isLoginPopupOpened
    }"
  >
    <div class="header__login-popup-overlay" @click="emits('setIsLoginPopupOpened', false)" />
    <div class="header__login-popup login-popup-header">
      <form class="login-popup-header__form" novalidate @submit.prevent="sendForm">
        <div class="login-popup-header__inputs-container">
          <div class="login-popup-header__inputs">
            <NickField
              :nick="nick"
              :submit-error="submitError"
              :disable-blur="disableBlur"
              @set-value="(value) => (nick = value)"
              @set-is-nick-correct="(value) => (isNickCorrect = value)"
            />
            <PasswordField
              :password="password"
              :submit-error="submitError"
              :disable-blur="disableBlur"
              @set-value="(value) => (password = value)"
              @set-is-password-correct="(value) => (isPasswordCorrect = value)"
            />
          </div>
        </div>
        <div class="login-popup-header__actions-container">
          <button
            class="button button_primary login-popup-header__button"
            :disabled="authStore.isLoading"
            @mousedown.left="sendForm"
          >
            <div class="login-popup-header__button-inner">
              Войти
              <SpinnerDots v-if="authStore.isLoading" />
            </div>
          </button>
          <div class="login-popup-header__actions">
            <p class="login-popup-header__action">
              <NuxtLink
                to="/reset-password"
                class="button text-button login-popup-header__reset-password-link"
                @click="emits('setIsLoginPopupOpened', false)"
                >Забыли пароль?</NuxtLink
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
