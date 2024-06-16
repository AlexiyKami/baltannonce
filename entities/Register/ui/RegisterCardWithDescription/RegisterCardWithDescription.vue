<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true }
});

defineEmits(['setType']);
</script>

<template>
  <div
    class="register__card-with-description card-with-description-register"
    :class="{
      selected: type === name
    }"
    @click="$emit('setType', name)"
  >
    <div class="card-with-description-register__heading">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card-with-description-register__icon"
      >
        <slot />
      </svg>
      <span class="card-with-description-register__name">{{ title }}</span>
    </div>
    <p class="card-with-description-register__description">{{ text }}</p>
  </div>
</template>
