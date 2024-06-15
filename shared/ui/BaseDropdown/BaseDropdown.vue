<script setup>
import './base-dropdown.scss';

const isDropdownOpened = ref(false);
</script>

<template>
  <div class="dropdown">
    <slot />
    <div
      class="dropdown__btn"
      @click="isDropdownOpened = !isDropdownOpened"
      :class="{
        active: isDropdownOpened
      }"
    >
      <span class="dropdown__text button__text">-</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown__chevron"
        :class="{
          active: isDropdownOpened
        }"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="dropdown__body"
      :class="{
        active: isDropdownOpened
      }"
    >
      <div class="dropdown__item">
        <span class="dropdown__text button__text">Test</span>
      </div>
      <div class="dropdown__item">
        <span class="dropdown__text button__text">Test</span>
      </div>
    </div>
  </div>
</template>
