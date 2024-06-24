<script setup>
import './hero-section.scss';
import { CityDropdown, FilterDropdown } from '@/entities/Filters';
import { ExtendedFilterModal } from '@/widgets/ExtendedFilterModal';
import { girlsFilters } from '../model/girls-filters';
import { girlsExtendedFilters } from '../model/girls-extended-filters';

const isCityDropdownOpened = ref(true);
const isFilterDropdownOpened = ref(false);
const isExtendedFilterModalOpened = ref(false);

const setIsExtendedFilterModalOpened = (value) => {
  isExtendedFilterModalOpened.value = value;
  value ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
};
</script>

<template>
  <section class="hero">
    <div class="hero__container _container">
      <h1 class="hero__title heading_h1">Высококлассный Эскорт в странах Прибалтики</h1>
      <div class="hero__filter-btns">
        <div
          class="dropdown-city__btn"
          :class="{
            active: isCityDropdownOpened
          }"
          @click="isCityDropdownOpened = !isCityDropdownOpened"
        >
          <span class="dropdown-city__btn-text button__text">Выберите город</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dropdown-city__chevron"
            :class="{
              active: isCityDropdownOpened
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
          class="button button_with-icon hero__filter-btn button_with-indicator"
          :class="{
            active: isFilterDropdownOpened,
            selected: isFilterDropdownOpened
          }"
          @click="isFilterDropdownOpened = !isFilterDropdownOpened"
        >
          <span class="button__text">Фильтры</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="button__icon"
            />
          </svg>
        </div>
        <div
          class="button button_outlined hero__extended-filter-btn button_with-indicator"
          :class="{
            selected: isExtendedFilterModalOpened
          }"
          @click="setIsExtendedFilterModalOpened(!isExtendedFilterModalOpened)"
        >
          <span class="button__text">Продвинутый поиск</span>
        </div>
      </div>
      <CityDropdown :is-city-dropdown-opened="isCityDropdownOpened" />
      <FilterDropdown :is-filter-dropdown-opened="isFilterDropdownOpened" :filters="girlsFilters" />
      <ExtendedFilterModal
        :is-extended-filter-modal-opened="isExtendedFilterModalOpened"
        :filters="girlsExtendedFilters"
        gender="girls"
        @set-is-extended-filter-modal-opened="setIsExtendedFilterModalOpened"
      />
    </div>
  </section>
</template>
