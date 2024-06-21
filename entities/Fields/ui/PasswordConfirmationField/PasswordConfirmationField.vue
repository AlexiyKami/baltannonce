<script setup>
import './password-confirmation-field.scss';
import { PasswordIcon, BaseTextField } from '@/shared/ui';

defineProps({
  password: { type: String, required: true },
  passwordConfirmation: { type: String, required: true },
  submitError: { type: Boolean, required: true }
});

const emits = defineEmits(['setValue']);

const showPasswordConfirmation = ref(false);

const setPasswordConfirmation = (value) => {
  emits('setValue', value);
};
</script>

<template>
  <BaseTextField
    :type="showPasswordConfirmation ? 'text' : 'password'"
    placeholder="Подтверждение пароля"
    :value="passwordConfirmation"
    @set-value="setPasswordConfirmation"
  >
    <span
      v-if="submitError && !passwordConfirmation"
      class="register__error-message register__error-message_small"
      >Пожалуйста, заполните поле</span
    >
    <span
      v-if="submitError && password !== passwordConfirmation && passwordConfirmation"
      class="register__error-message register__error-message_small"
      >Пароли не совпадают</span
    >
    <PasswordIcon
      :show-password="showPasswordConfirmation"
      @set-visibility="(value) => (showPasswordConfirmation = value)"
    />
  </BaseTextField>
</template>
