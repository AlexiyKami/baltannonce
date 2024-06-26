<script setup>
import './app-header.scss';
import {
  ThemeSwitch,
  LangDropdown,
  ItemWithDropdown,
  ProfileDropdown,
  HeaderLogo
} from '@/entities/Header';
import { debounce } from '../lib/helpers/debounce';
import { LoginPopup } from '@/features/Login';

const authStore = useAuthStore();
const menStore = useMenStore();

const breakpoint = 1280;
const isMenuOpened = ref(false);
const isLoginPopupOpened = ref(false);

const closeMenuOnResize = () => {
  if (window.innerWidth > breakpoint) {
    isMenuOpened.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', debounce(closeMenuOnResize, 10));
});

onUnmounted(() => {
  window.removeEventListener('resize', closeMenuOnResize);
});

const handleMenLinkClick = (value) => {
  menStore.setCurrentTab(value);
  isMenuOpened.value = false;
};
</script>

<template>
  <div
    class="header"
    :class="{
      'logged-in': authStore.token
    }"
  >
    <div class="header__container">
      <div class="header__content">
        <HeaderLogo />
        <div class="header__buttons">
          <LangDropdown />
          <ProfileDropdown />
          <div class="header__login-btns">
            <div
              class="button button_secondary button_filled header__btn-login"
              @click="isLoginPopupOpened = !isLoginPopupOpened"
            >
              Войти
            </div>
            <NuxtLink
              to="/register"
              class="button button_primary button_filled header__btn-register"
              >Регистрация</NuxtLink
            >
          </div>
          <ThemeSwitch />
        </div>
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
              <ItemWithDropdown title="Девушки">
                <NuxtLink to="/" class="header__item-dropdown" @click="isMenuOpened = false">
                  <p class="header__text">Эскорт</p>
                </NuxtLink>
                <NuxtLink to="/" class="header__item-dropdown" @click="isMenuOpened = false">
                  <p class="header__text">Содержанки</p>
                </NuxtLink>
              </ItemWithDropdown>
              <ItemWithDropdown title="Мужчины">
                <NuxtLink
                  to="/men"
                  class="header__item-dropdown"
                  @click="handleMenLinkClick('escort')"
                >
                  <p class="header__text">Эскорт</p>
                </NuxtLink>
                <NuxtLink
                  to="/men"
                  class="header__item-dropdown"
                  @click="handleMenLinkClick('strippers')"
                >
                  <p class="header__text">Стриптизеры</p>
                </NuxtLink>
              </ItemWithDropdown>
              <li class="navmenu-header__item">
                <NuxtLink to="" class="navmenu-header__link" @click="isMenuOpened = false"
                  >Спрос и предложение</NuxtLink
                >
              </li>
              <li class="navmenu-header__item">
                <NuxtLink to="" class="navmenu-header__link" @click="isMenuOpened = false"
                  >В первый раз?</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <div class="header__buttons-burger">
            <LangDropdown />
            <ProfileDropdown class="header__profile-dropdown-burger" />
            <div class="header__login-btns">
              <div
                class="button button_secondary button_filled header__btn-login"
                @click="isLoginPopupOpened = !isLoginPopupOpened"
              >
                Войти
              </div>
              <NuxtLink
                to="/register"
                class="button button_primary button_filled header__btn-register"
                >Регистрация</NuxtLink
              >
            </div>
            <ThemeSwitch />
          </div>
        </div>
        <LoginPopup
          :is-login-popup-opened="isLoginPopupOpened"
          @close-popup="isLoginPopupOpened = false"
        />
      </div>
    </div>
  </div>
</template>
