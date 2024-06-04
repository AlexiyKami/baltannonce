<script setup>
import '../assets/scss/layout/app-header.scss';
import '../assets/scss/components/buttons.scss';

const isMenuOpened = ref(false);

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
                >Sample text 1</NuxtLink
              >
              <NuxtLink to="/" class="navmenu-header__item" @click="isMenuOpened = false"
                >Sample text 2</NuxtLink
              >
              <NuxtLink to="/" class="navmenu-header__item" @click="isMenuOpened = false"
                >Sample text 3</NuxtLink
              >
              <NuxtLink to="/" class="navmenu-header__item" @click="isMenuOpened = false"
                >Sample text 4</NuxtLink
              >
            </ul>
          </nav>
          <div class="header__buttons">
            <LangDropdown/>
            <div class="header__login-btns">
              <a href="" class="button button_secondary button_filled">Войти</a>
              <a href="" class="button button_primary button_filled">Зарегистрироваться</a>
            </div>
            <ThemeSwitch class="header__theme-switch"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
