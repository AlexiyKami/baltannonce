<script setup>
import './dropdown-item-with-count.scss';

defineProps(['title', 'count']);

const isActive = ref(false);
</script>

<template>
  <li
    class="dropdown-item"
    @click="isActive = !isActive"
    :class="{
      active: isActive
    }"
  >
    <p class="dropdown-item__title">{{ title }}</p>
    <span class="dropdown-item__count">({{ count }})</span>
  </li>
</template>
