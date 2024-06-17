<script setup>
defineProps({
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: String, required: true }
});

const emit = defineEmits(['setValue']);

const handleInput = (e) => {
  emit('setValue', e.target.value);
};
</script>

<template>
  <div class="register__input-container">
    <input
      class="register__input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
    >
    <slot />
  </div>
</template>
