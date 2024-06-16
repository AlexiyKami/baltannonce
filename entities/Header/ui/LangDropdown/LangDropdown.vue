<script setup>
import './lang-dropdown.scss';
import { languages } from '../../model/languages';

const isDropdownOpened = ref(false);

const currentLanguage = ref(languages[0]);
const options = computed(() => {
  return languages.filter((lang) => lang.title !== currentLanguage.value.title);
});

const setCurrentLanguage = (value) => {
  currentLanguage.value = value;
  isDropdownOpened.value = false;
};
</script>

<template>
  <div class="header__dropdown-lang dropdown-lang">
    <div class="dropdown-lang__btn" @click="isDropdownOpened = !isDropdownOpened">
      <img :src="currentLanguage.image" alt="flag" class="dropdown-lang__flag" >
      <span class="dropdown-lang__text button__text">{{ currentLanguage.title }}</span>
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
      <div
        v-for="option in options"
        :key="option.title"
        class="dropdown-lang__item"
        @click="setCurrentLanguage(option)"
      >
        <img :src="option.image" alt="flag" class="dropdown-lang__flag" >
        <span class="dropdown-lang__text button__text">{{ option.title }}</span>
      </div>
    </div>
  </div>
</template>
