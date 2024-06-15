<script setup>
import './filter-dropdown.scss';
import { PopupDropdownFilter, FilterFieldset } from '@/shared/ui';
import { filters } from '../../model/filters';

defineProps(['isFilterDropdownOpened']);
</script>

<template>
  <div
    class="hero__dropdown-filter dropdown-filter"
    :class="{
      active: isFilterDropdownOpened
    }"
  >
    <div class="dropdown-filter__body">
      <FilterFieldset
        title="Сортировать по"
        name="sortby"
        type="radio"
        container="column"
        :options="filters.sortOptions"
      />
      <FilterFieldset
        title="Цена за час"
        name="price"
        type="checkbox"
        container="column"
        :options="filters.priceOptions"
      >
        <div class="dropdown-filter__item dropdown-filter__item-price">
          <label for="">Свои значения:</label>
          <div class="dropdown-filter__item-number-inputs">
            <input
              id="custom-price-min"
              type="number"
              name="price"
              class="small"
              min="0"
              placeholder="----"
            />
            <span>-</span>
            <input
              id="custom-price-max"
              type="number"
              name="price"
              class="small"
              min="0"
              placeholder="----"
            />
          </div>
        </div>
      </FilterFieldset>
      <FilterFieldset
        title="Возраст"
        name="years-old"
        type="checkbox"
        container="column"
        :options="filters.ageOptions"
      >
        <PopupDropdownFilter
          title="Возраст"
          :options="['18-20', '21-24', '25-29', '30-35', '36-40', '40+']"
        />
      </FilterFieldset>
      <FilterFieldset
        title="Цвет волос"
        name="hair-color"
        type="checkbox"
        container="column"
        :options="filters.hairColorOptions"
      />
      <FilterFieldset
        title="Размер груди"
        name="breast-size"
        type="checkbox"
        container="column"
        :options="filters.breastSizeOptions"
      >
        <PopupDropdownFilter title="Размер груди" :options="['A', 'B', 'C', 'D', 'DD', 'G']" />
      </FilterFieldset>
      <FilterFieldset
        title="Язык"
        name="language"
        type="checkbox"
        container="column"
        :options="filters.languageOptions"
      />
      <FilterFieldset
        title="Раса"
        name="race"
        type="checkbox"
        container="column"
        :options="filters.raceOptions"
      />
      <FilterFieldset
        title="Доступна"
        name="available"
        type="checkbox"
        container="column"
        :options="filters.availableOptions"
      />
    </div>
    <h3 class="dropdown-filter__title heading_h5">Другое</h3>
    <div class="dropdown-filter__body-bottom">
      <div class="dropdown-filter__other-filters">
        <FilterFieldset
          title="Анкета с видео:"
          name="questionary"
          type="checkbox"
          container="row"
          :options="filters.questionaryOptions"
        />
        <FilterFieldset
          title="Курит:"
          name="smoking"
          type="checkbox"
          container="row"
          :options="filters.smokingOptions"
        />
        <FilterFieldset
          title="Силикон:"
          name="silicone"
          type="checkbox"
          container="row"
          :options="filters.siliconeOptions"
        />
        <FilterFieldset
          title="БДСМ:"
          name="bdsm"
          type="checkbox"
          container="row"
          :options="filters.bdsmOptions"
        />
        <FilterFieldset
          title="Способ связи:"
          name="contacts"
          type="checkbox"
          container="row"
          :options="filters.contactsOptions"
        />
        <FilterFieldset
          title="Проверены лично:"
          name="verified"
          type="checkbox"
          container="row"
          :options="filters.verifiedOptions"
        />
      </div>
      <div class="dropdown-filter__btns">
        <div class="button button_secondary button_small">Сбросить фильтры</div>
        <div class="button button_primary button_small">Применить фильтры</div>
      </div>
    </div>
  </div>
</template>
