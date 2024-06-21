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
