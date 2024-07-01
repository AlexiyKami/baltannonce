<script setup>
import './lang-dropdown.scss';
import { languages } from '../../model/languages';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

defineEmits(['setIsDropdownOpened']);
defineProps({
  isDropdownOpened: { type: Boolean, required: true }
});

const availableLocales = computed(() => {
  return locales.value.filter((item) => item !== locale.value);
});

const getLanguageImage = (value) => {
  return languages.find((lang) => lang.title === value).image;
};
</script>

<template>
  <div class="header__dropdown-lang dropdown-lang">
    <div class="dropdown-lang__btn" @click="$emit('setIsDropdownOpened')">
      <img :src="getLanguageImage(locale)" alt="flag" class="dropdown-lang__flag" >
      <span class="dropdown-lang__text button__text">{{ locale }}</span>
    </div>
    <div
      class="dropdown-lang__body"
      :class="{
        active: isDropdownOpened
      }"
    >
      <NuxtLink
        v-for="availableLocale in availableLocales"
        :key="availableLocale"
        :to="switchLocalePath(availableLocale)"
        class="dropdown-lang__item"
        @click="$emit('setIsDropdownOpened')"
      >
        <img :src="getLanguageImage(availableLocale)" alt="flag" class="dropdown-lang__flag" >
        <span class="dropdown-lang__text button__text">{{ availableLocale }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
