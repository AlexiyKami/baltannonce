<script setup>
defineProps({
  title: { type: String, required: true }
});

const isDropdownOpened = ref(false);
</script>

<template>
  <li class="header__item-with-dropdown">
    <div
      class="header__dropdown-btn"
      :class="{
        active: isDropdownOpened
      }"
      @click="isDropdownOpened = !isDropdownOpened"
    >
      <div class="header__text">{{ title }}</div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="header__chevron"
      >
        <path
          d="M5.86816 7.5L10.8682 12.5L15.8682 7.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="header__item-dropdown-body" @click="isDropdownOpened = !isDropdownOpened">
      <slot />
    </div>
  </li>
</template>
