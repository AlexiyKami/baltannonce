<script setup>
defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: String, required: true }
});

const emits = defineEmits(['setValue', 'setFocus']);

const handleInput = (e) => {
  emits('setValue', e.target.value);
};

const handleFocus = (value) => {
  emits('setFocus', value);
};
</script>

<template>
  <div class="register__input-container login-popup-header__input-container">
    <input
      class="register__input login-popup-header__input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
    >
    <slot />
  </div>
</template>
