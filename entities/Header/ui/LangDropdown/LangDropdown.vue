<script setup>
import './lang-dropdown.scss';
import { languages } from '../../model/languages';

const isDropdownOpened = ref(false);

const currentLanguage = ref(useCookie('lang'));
if (!currentLanguage.value) {
  currentLanguage.value = 'ru';
}

const options = computed(() => {
  return languages.filter((lang) => lang.title !== currentLanguage.value);
});

const setCurrentLanguage = (value) => {
  currentLanguage.value = value;
  isDropdownOpened.value = false;
};

const getCurrentLanguageImage = computed(() => {
  console.log(languages.find((lang) => lang.title === currentLanguage.value).image);
  return languages.find((lang) => lang.title === currentLanguage.value).image;
});
</script>

<template>
  <div class="header__dropdown-lang dropdown-lang">
    <div class="dropdown-lang__btn" @click="isDropdownOpened = !isDropdownOpened">
      <img :src="getCurrentLanguageImage" alt="flag" class="dropdown-lang__flag" >
      <span class="dropdown-lang__text button__text">{{ currentLanguage }}</span>
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
        @click="setCurrentLanguage(option.title)"
      >
        <img :src="option.image" alt="flag" class="dropdown-lang__flag" >
        <span class="dropdown-lang__text button__text">{{ option.title }}</span>
      </div>
    </div>
  </div>
</template>
