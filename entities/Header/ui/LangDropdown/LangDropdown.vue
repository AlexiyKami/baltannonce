<script setup>
import './lang-dropdown.scss';

const isDropdownOpened = ref(false);
</script>

<template>
  <div class="header__dropdown-lang dropdown-lang" @click="isDropdownOpened = !isDropdownOpened">
    <div class="dropdown-lang__btn">
      <img
        src="@/app/assets/images/icons/ru-flag-round.svg"
        alt="flag"
        class="dropdown-lang__flag"
      />
      <span class="dropdown-lang__text button__text">RU</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown-lang__chevron"
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
      class="dropdown-lang__body"
      :class="{
        active: isDropdownOpened
      }"
    >
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/en-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">EN</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/lv-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">LV</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/lt-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">LT</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/ee-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">EE</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/es-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">ES</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/pt-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">PT</span>
      </div>
      <div class="dropdown-lang__item">
        <img
          src="@/app/assets/images/icons/de-flag-round.svg"
          alt="flag"
          class="dropdown-lang__flag"
        />
        <span class="dropdown-lang__text button__text">DE</span>
      </div>
    </div>
  </div>
</template>
