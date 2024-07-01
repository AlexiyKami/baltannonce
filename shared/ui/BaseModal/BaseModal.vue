<script setup>
import './base-modal.scss';

defineEmits(['closeModal']);
</script>

<template>
  <div class="modal">
    <div class="modal__overlay" @click="$emit('closeModal')" />
    <slot />
  </div>
</template>
