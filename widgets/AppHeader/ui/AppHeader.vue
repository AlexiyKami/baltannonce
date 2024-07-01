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
const router = useRouter();

const breakpoint = 1280;
const isMenuOpened = ref(false);
const isLoginPopupOpened = ref(false);
const isLangDropdownOpened = ref(false);

// closeMenuOnResize implements behavior so that when resizing,
// if the menu disappears, it should not appear again
const closeMenuOnResize = () => {
  if (window.innerWidth > breakpoint) {
    isMenuOpened.value = false;
  }
};

onMounted(() => {
  // debounce is used to prevent a function from executing too often
  // Performing without debounce may result in reduced performance
  window.addEventListener('resize', debounce(closeMenuOnResize, 10));
});

onUnmounted(() => {
  window.removeEventListener('resize', closeMenuOnResize);
});

const closeMenuPopupAndLangDropdown = () => {
  isLoginPopupOpened.value = false;
  isMenuOpened.value = false;
  isLangDropdownOpened.value = false;
};

const handleMenLinkClick = (value) => {
  router.push({ path: '/men', query: { tab: value } });
  closeMenuPopupAndLangDropdown();
};

const setIsLangDropdownOpened = () => {
  isLoginPopupOpened.value = false;
  isLangDropdownOpened.value = !isLangDropdownOpened.value;
};

const setIsLoginPopupOpened = (value) => {
  isLangDropdownOpened.value = false;
  isLoginPopupOpened.value = value;
  if (!isLoginPopupOpened.value) {
    isMenuOpened.value = false;
  }
};
</script>

<template>
  <Transition>
    <div v-if="isMenuOpened" class="header-overlay" @click="isMenuOpened = false" />
  </Transition>
  <header
    class="header"
    :class="{
      'logged-in': authStore.token,
      active: isLoginPopupOpened
    }"
  >
    <div class="header__container">
      <div class="header__content">
        <HeaderLogo @click="closeMenuPopupAndLangDropdown" />
        <div class="header__buttons">
          <LangDropdown
            :is-dropdown-opened="isLangDropdownOpened"
            @set-is-dropdown-opened="setIsLangDropdownOpened"
          />
          <ProfileDropdown />
          <div class="header__login-btns">
            <div
              class="button button_secondary button_filled header__btn-login"
              @click="setIsLoginPopupOpened(!isLoginPopupOpened)"
            >
              Войти
            </div>
            <NuxtLink
              to="/register"
              class="button button_primary button_filled header__btn-register"
              @click="closeMenuPopupAndLangDropdown"
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
                <NuxtLink
                  to="/"
                  class="header__item-dropdown"
                  @click="closeMenuPopupAndLangDropdown"
                >
                  <p class="header__text">Эскорт</p>
                </NuxtLink>
                <NuxtLink
                  to="/"
                  class="header__item-dropdown"
                  @click="closeMenuPopupAndLangDropdown"
                >
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
                <NuxtLink to="" class="navmenu-header__link" @click="closeMenuPopupAndLangDropdown"
                  >Спрос и предложение</NuxtLink
                >
              </li>
              <li class="navmenu-header__item">
                <NuxtLink to="" class="navmenu-header__link" @click="closeMenuPopupAndLangDropdown"
                  >В первый раз?</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <div class="header__buttons-burger">
            <LangDropdown
              :is-dropdown-opened="isLangDropdownOpened"
              @set-is-dropdown-opened="setIsLangDropdownOpened"
            />
            <ProfileDropdown class="header__profile-dropdown-burger" />
            <div class="header__login-btns">
              <div
                class="button button_secondary button_filled header__btn-login"
                @click="setIsLoginPopupOpened(!isLoginPopupOpened)"
              >
                Войти
              </div>
              <NuxtLink
                to="/register"
                class="button button_primary button_filled header__btn-register"
                @click="closeMenuPopupAndLangDropdown"
                >Регистрация</NuxtLink
              >
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  </header>
  <LoginPopup
    :is-login-popup-opened="isLoginPopupOpened"
    @set-is-login-popup-opened="setIsLoginPopupOpened"
  />
</template>
