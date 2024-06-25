<script setup>
const isDropdownOpened = ref(false);

const { logout } = useAuthStore();

const handleLogoutButtonClick = () => {
  logout();
};
</script>

<template>
  <div class="header__item-with-dropdown header__profile-dropdown">
    <div
      class="header__dropdown-btn header__profile-btn"
      :class="{
        active: isDropdownOpened
      }"
      @click="isDropdownOpened = !isDropdownOpened"
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="52" height="52" rx="26" fill="var(--color-surface-highlight)" />
        <path
          d="M35.3333 36.5C35.3333 34.8718 35.3333 34.0578 35.1324 33.3953C34.68 31.9039 33.5128 30.7367 32.0213 30.2843C31.3589 30.0833 30.5448 30.0833 28.9167 30.0833H23.0833C21.4552 30.0833 20.6411 30.0833 19.9787 30.2843C18.4872 30.7367 17.3201 31.9039 16.8676 33.3953C16.6667 34.0578 16.6667 34.8718 16.6667 36.5M31.25 20.75C31.25 23.6495 28.8995 26 26 26C23.1005 26 20.75 23.6495 20.75 20.75C20.75 17.8505 23.1005 15.5 26 15.5C28.8995 15.5 31.25 17.8505 31.25 20.75Z"
          stroke="var(--color-border-accent)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
    <div class="header__item-dropdown-body">
      <NuxtLink to="" class="header__item-dropdown">
        <p class="header__text">Профиль</p>
      </NuxtLink>
      <div class="header__item-dropdown" @click="handleLogoutButtonClick">
        <p class="header__text">Выйти</p>
      </div>
    </div>
  </div>
</template>
