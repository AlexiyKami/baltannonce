<script setup>
defineProps({
  title: { type: String, required: true },
  gender: { type: String, required: true },
  name: { type: String, required: true }
});

defineEmits(['setGender']);
</script>

<template>
  <div
    class="register__card card-register"
    :class="{
      selected: gender === name
    }"
    @click="$emit('setGender', name)"
  >
    <div class="card-register__heading">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card-register__icon"
      >
        <slot />
      </svg>
      <span class="card-register__name">{{ title }}</span>
    </div>
  </div>
</template>
