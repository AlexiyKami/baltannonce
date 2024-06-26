<script setup>
import './extended-filter-modal.scss';
import {
  MainParameters,
  PreferencesFilter,
  ReviewsRatingsFilter,
  AdditionalParameters,
  LocationFilter,
  AppearanceFilter,
  FetishismFilter
} from '@/entities/ExtendedFilterModal';

defineProps({
  isExtendedFilterModalOpened: Boolean,
  filters: { type: Object, required: true },
  gender: { type: String, required: true }
});
defineEmits(['setIsExtendedFilterModalOpened']);
</script>

<template>
  <div
    class="modal-menu"
    :class="{
      closed: !isExtendedFilterModalOpened
    }"
  >
    <div class="modal-overlay" @click="$emit('setIsExtendedFilterModalOpened', false)" />
    <div class="extended-filter">
      <h2 class="extended-filter__title heading_h2">Поиск анкет по параметрам</h2>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="extended-filter__cross button_icon-secondary"
        @click="$emit('setIsExtendedFilterModalOpened', false)"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="extended-filter__containers">
        <MainParameters :filters="filters.meetingPointOptions" />
        <PreferencesFilter :gender="gender" :filters="filters" />
        <ReviewsRatingsFilter />
        <AdditionalParameters :gender="gender" />
        <AppearanceFilter :filters="filters" :gender="gender" />
        <FetishismFilter />
        <LocationFilter />
      </div>
      <div class="extended-filter__button button button_primary">Найти</div>
    </div>
  </div>
</template>
