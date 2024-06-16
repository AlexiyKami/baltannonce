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
  <input
    class="register__input register__input-email"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    required
    @input="handleInput"
  >
</template>
