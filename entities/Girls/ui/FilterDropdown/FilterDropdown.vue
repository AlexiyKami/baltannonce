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
  availableOptions
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
        :options="sortOptions"
      />
      <DropdownFilterFieldset
        title="Цена за час"
        name="price"
        type="checkbox"
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
        :options="hairColorOptions"
      />
      <DropdownFilterFieldset
        title="Размер груди"
        name="breast-size"
        type="checkbox"
        :options="breastSizeOptions"
      >
        <PopupDropdownFilter title="Размер груди" :options="['A', 'B', 'C', 'D', 'DD', 'G']" />
      </DropdownFilterFieldset>
      <DropdownFilterFieldset
        title="Язык"
        name="language"
        type="checkbox"
        :options="languageOptions"
      />
      <DropdownFilterFieldset title="Раса" name="race" type="checkbox" :options="raceOptions" />
      <DropdownFilterFieldset
        title="Доступна"
        name="available"
        type="checkbox"
        :options="availableOptions"
      />
    </div>
    <h3 class="dropdown-filter__title heading_h5">Другое</h3>
    <div class="dropdown-filter__body-bottom">
      <div class="dropdown-filter__other-filters">
        <form class="dropdown-filter__form dropdown-filter__questionary">
          <h3 class="dropdown-filter__title heading_h5">Анкета с видео:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="questionary-yes" type="checkbox" name="questionary" />
              <label for="questionary-yes">Да</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="questionary-no" type="checkbox" name="questionary" />
              <label for="questionary-no">Нет</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__smoking">
          <h3 class="dropdown-filter__title heading_h5">Курит:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="smoking-yes" type="checkbox" name="smoking" />
              <label for="smoking-yes">Да</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="smoking-no" type="checkbox" name="smoking" />
              <label for="smoking-no">Нет</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__silicone">
          <h3 class="dropdown-filter__title heading_h5">Силикон:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="silicone-yes" type="checkbox" name="silicone" />
              <label for="silicone-yes">Да</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="silicone-no" type="checkbox" name="silicone" />
              <label for="silicone-no">Нет</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__bdsm">
          <h3 class="dropdown-filter__title heading_h5">БДСМ:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="bdsm-yes" type="checkbox" name="bdsm" />
              <label for="bdsm-yes">Да</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="bdsm-no" type="checkbox" name="bdsm" />
              <label for="bdsm-no">Нет</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__contacts">
          <h3 class="dropdown-filter__title heading_h5">Способ связи:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="telegram" type="checkbox" name="contacts" />
              <label for="telegram">Telegram</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="whatsapp" type="checkbox" name="contacts" />
              <label for="whatsapp">Whatsapp</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__verified">
          <h3 class="dropdown-filter__title heading_h5">Проверены лично:</h3>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input id="verified-yes" type="checkbox" name="verified" />
              <label for="verified-yes">Да</label>
            </div>
            <div class="dropdown-filter__item">
              <input id="verified-no" type="checkbox" name="verified" />
              <label for="verified-no">Нет</label>
            </div>
          </div>
        </form>
      </div>
      <div class="dropdown-filter__btns">
        <div class="button button_secondary button_small">Сбросить фильтры</div>
        <div class="button button_primary button_small">Применить фильтры</div>
      </div>
    </div>
  </div>
</template>
