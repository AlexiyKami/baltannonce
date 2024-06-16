<script setup>
import './popup-dropdown-filter.scss';

const isPopupOpened = ref(false);
defineProps(['title', 'options']);
</script>

<template>
  <div class="dropdown-filter__btn-more button__text">
    <span class="dropdown-filter__btn-text button__text" @click="isPopupOpened = !isPopupOpened"
      >Больше</span
    >
    <div
      class="dropdown-filter__popup popup-dropdown-filter"
      :class="{
        active: isPopupOpened
      }"
    >
      <div class="popup-dropdown-filter__heading">
        <h3 class="popup-dropdown-filter__title">{{ title }}</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="popup-dropdown-filter__cross button_icon-secondary"
          @click="isPopupOpened = false"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="popup-dropdown-filter__list">
        <div v-for="option in options" :key="option" class="popup-dropdown-filter__item">
          <input :id="option + 'popup'" type="checkbox" name="years-old" >
          <label :for="option + 'popup'">{{ option }}</label>
        </div>
      </div>
      <div class="popup-dropdown-filter__btns">
        <div
          class="popup-dropdown-filter__btn popup-dropdown-filter__btn-cancel button button_secondary button_small"
        >
          Отменить
        </div>
        <div
          class="popup-dropdown-filter__btn popup-dropdown-filter__btn-filter button button_primary button_small"
        >
          Отфильтровать
        </div>
      </div>
    </div>
  </div>
</template>
