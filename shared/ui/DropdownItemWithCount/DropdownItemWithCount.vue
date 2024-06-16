<script setup>
import './dropdown-item-with-count.scss';

defineProps(
  {
    title: String
  },
  { count: Number }
);

const isActive = ref(false);
</script>

<template>
  <li
    class="dropdown-item"
    :class="{
      active: isActive
    }"
    @click="isActive = !isActive"
  >
    <p class="dropdown-item__title">{{ title }}</p>
    <span class="dropdown-item__count">({{ count }})</span>
  </li>
</template>
