<script setup>
import './nick-field.scss';
import { BaseTextField } from '@/shared/ui';
import { isNickCorrect } from '@/shared/lib/helpers/fields-validation';

const props = defineProps({
  nick: { type: String, required: true },
  submitError: { type: Boolean, required: true }
});

const emits = defineEmits(['setValue', 'setIsNickCorrect']);

const isNickInputFocused = ref(false);

const setNick = (value) => {
  emits('setValue', value);
};

watch(
  () => props.nick,
  () => {
    emits('setIsNickCorrect', isNickCorrect(props.nick));
  }
);
</script>

<template>
  <BaseTextField
    type="text"
    placeholder="Ник"
    :value="nick"
    @set-value="setNick"
    @set-focus="(value) => (isNickInputFocused = value)"
  >
    <span v-if="submitError && !nick" class="error-message error-message_small"
      >Пожалуйста, заполните поле</span
    >
    <div
      v-if="(nick && isNickInputFocused) || (nick && submitError && !isNickCorrect(nick))"
      class="inputs-tips"
    >
      <span
        class="inputs-tip"
        :class="{
          'inputs-tip_correct': isNickCorrect(nick)
        }"
        >От 2 до 10 символов</span
      >
    </div>
  </BaseTextField>
</template>
