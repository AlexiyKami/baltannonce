<script setup>
import './password-field.scss';
import { PasswordIcon, BaseTextField } from '@/shared/ui';
import { isPasswordCorrect } from '@/shared/lib/helpers/fields-validation';

const isPasswordInputFocused = ref(false);
// const disableBlur = ref(false)

const props = defineProps({
  password: { type: String, required: true },
  submitError: { type: Boolean, required: true },
  disableBlur: { type: Boolean, required: true }
});

const emits = defineEmits(['setValue', 'setIsPasswordCorrect']);

const showPassword = ref(false);
const passwordRequirements = ref({
  min: false,
  lowercaseLetter: false,
  capitalLetter: false,
  number: false
});

watch(
  () => props.password,
  () => {
    passwordRequirements.value.min = props.password.length >= 8;
    passwordRequirements.value.lowercaseLetter = /\p{Ll}/u.test(props.password);
    passwordRequirements.value.capitalLetter = /\p{Lu}/u.test(props.password);
    passwordRequirements.value.number = /\d/.test(props.password);
    emits('setIsPasswordCorrect', isPasswordCorrect(passwordRequirements.value));
  }
);

const setPassword = (value) => {
  emits('setValue', value);
};

const setFocus = (value) => {
  if (!value) {
    if (!props.disableBlur) {
      isPasswordInputFocused.value = value;
    }
  } else {
    isPasswordInputFocused.value = value;
  }
};
</script>

<template>
  <BaseTextField
    :type="showPassword ? 'text' : 'password'"
    placeholder="Пароль"
    :value="password"
    @set-value="setPassword"
    @set-focus="setFocus"
  >
    <span v-if="submitError && !password" class="error-message error-message_small"
      >Пожалуйста, заполните поле</span
    >
    <div
      v-if="
        (password && isPasswordInputFocused) ||
        (password && submitError && !isPasswordCorrect(passwordRequirements))
      "
      class="inputs-tips"
    >
      <span
        class="inputs-tip"
        :class="{
          'inputs-tip_correct': passwordRequirements.min
        }"
        >Минимум 8 символов</span
      >
      <span
        class="inputs-tip"
        :class="{
          'inputs-tip_correct': passwordRequirements.lowercaseLetter
        }"
        >Минимум 1 строчная буква</span
      >
      <span
        class="inputs-tip"
        :class="{
          'inputs-tip_correct': passwordRequirements.capitalLetter
        }"
        >Минимум 1 заглавная буква</span
      >
      <span
        class="inputs-tip"
        :class="{
          'inputs-tip_correct': passwordRequirements.number
        }"
        >Минимум 1 цифра</span
      >
      <span class="inputs-tip-no-symbol">Можно использовать специальные символы</span>
    </div>
    <PasswordIcon
      :show-password="showPassword"
      @set-visibility="(value) => (showPassword = value)"
    />
  </BaseTextField>
</template>
