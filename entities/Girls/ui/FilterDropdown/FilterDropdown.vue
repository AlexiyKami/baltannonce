<script setup>
import './filter-dropdown.scss';
import { PopupDropdownFilter, DropdownFilterFieldset } from '@/shared/ui';
import {
  sortOptions,
  priceOptions,
  ageOptions,
  hairColorOptions,
  breastSizeOptions,
  languageOptions,
  raceOptions,
  availableOptions,
  questionaryOptions,
  smokingOptions,
  siliconeOptions,
  bdsmOptions,
  contactsOptions,
  verifiedOptions
} from '../../model/filters';

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
      <DropdownFilterFieldset
        title="Сортировать по"
        name="sortby"
        type="radio"
        container="column"
        :options="sortOptions"
      />
      <DropdownFilterFieldset
        title="Цена за час"
        name="price"
        type="checkbox"
        container="column"
        :options="priceOptions"
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
      </DropdownFilterFieldset>
      <DropdownFilterFieldset
        title="Возраст"
        name="years-old"
        type="checkbox"
        container="column"
        :options="ageOptions"
      >
        <PopupDropdownFilter
          title="Возраст"
          :options="['18-20', '21-24', '25-29', '30-35', '36-40', '40+']"
        />
      </DropdownFilterFieldset>
      <DropdownFilterFieldset
        title="Цвет волос"
        name="hair-color"
        type="checkbox"
        container="column"
        :options="hairColorOptions"
      />
      <DropdownFilterFieldset
        title="Размер груди"
        name="breast-size"
        type="checkbox"
        container="column"
        :options="breastSizeOptions"
      >
        <PopupDropdownFilter title="Размер груди" :options="['A', 'B', 'C', 'D', 'DD', 'G']" />
      </DropdownFilterFieldset>
      <DropdownFilterFieldset
        title="Язык"
        name="language"
        type="checkbox"
        container="column"
        :options="languageOptions"
      />
      <DropdownFilterFieldset
        title="Раса"
        name="race"
        type="checkbox"
        container="column"
        :options="raceOptions"
      />
      <DropdownFilterFieldset
        title="Доступна"
        name="available"
        type="checkbox"
        container="column"
        :options="availableOptions"
      />
    </div>
    <h3 class="dropdown-filter__title heading_h5">Другое</h3>
    <div class="dropdown-filter__body-bottom">
      <div class="dropdown-filter__other-filters">
        <DropdownFilterFieldset
          title="Анкета с видео:"
          name="questionary"
          type="checkbox"
          container="row"
          :options="questionaryOptions"
        />
        <DropdownFilterFieldset
          title="Курит:"
          name="smoking"
          type="checkbox"
          container="row"
          :options="smokingOptions"
        />
        <DropdownFilterFieldset
          title="Силикон:"
          name="silicone"
          type="checkbox"
          container="row"
          :options="siliconeOptions"
        />
        <DropdownFilterFieldset
          title="БДСМ:"
          name="bdsm"
          type="checkbox"
          container="row"
          :options="bdsmOptions"
        />
        <DropdownFilterFieldset
          title="Способ связи:"
          name="contacts"
          type="checkbox"
          container="row"
          :options="contactsOptions"
        />
        <DropdownFilterFieldset
          title="Проверены лично:"
          name="verified"
          type="checkbox"
          container="row"
          :options="verifiedOptions"
        />
      </div>
      <div class="dropdown-filter__btns">
        <div class="button button_secondary button_small">Сбросить фильтры</div>
        <div class="button button_primary button_small">Применить фильтры</div>
      </div>
    </div>
  </div>
</template>
