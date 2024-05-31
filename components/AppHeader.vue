<script setup>
import '../assets/scss/layout/app-header.scss';
import '../assets/scss/components/buttons.scss';
import '../assets/scss/components/dropdown.scss';

const selected = ref('Укр');
const isMenuOpened = ref(false);

const items = [
  [
    {
      label: 'Укр',
      labelClass: 'dropdown-lang-header__item',
      click: () => {
        isMenuOpened.value = false;
      }
    }
  ],
  [
    {
      label: 'Рус',
      labelClass: 'dropdown-lang-header__item',
      click: () => {
        isMenuOpened.value = false;
      }
    }
  ],
  [
    {
      label: 'Eng',
      labelClass: 'dropdown-lang-header__item',
      click: () => {
        isMenuOpened.value = false;
      }
    }
  ]
];
</script>

<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__content">
        <a href="" class="header__logo">
          <img src="../assets/icons/logo.svg" alt="Logo" >
        </a>
        <div
          class="header__burger burger-header"
          :class="{
            active: isMenuOpened
          }"
          @click="isMenuOpened = !isMenuOpened"
        >
          <div class="burger-header__stripe burger-header__stripe_1" />
          <div class="burger-header__stripe burger-header__stripe_2" />
          <div class="burger-header__stripe burger-header__stripe_3" />
        </div>
        <div
          class="header__body"
          :class="{
            active: isMenuOpened
          }"
        >
          <nav class="header__navmenu navmenu-header">
            <ul class="navmenu-header__list">
              <NuxtLink to="/" class="navmenu-header__item" @click="isMenuOpened = false"
                >Головна</NuxtLink
              >
              <NuxtLink to="/about" class="navmenu-header__item" @click="isMenuOpened = false"
                >Про Нас</NuxtLink
              >
              <NuxtLink to="/contacts" class="navmenu-header__item" @click="isMenuOpened = false"
                >Контакти</NuxtLink
              >
            </ul>
          </nav>
          <NuxtLink
            to="/contacts"
            class="button button_primary header__button"
            @click="isMenuOpened = false"
            >Зв'язатись зі мною</NuxtLink
          >
          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton
              class="dropdown-lang-header__text"
              color="white"
              variant="ghost"
              :label="selected"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
        </div>
      </div>
    </div>
  </header>
</template>
