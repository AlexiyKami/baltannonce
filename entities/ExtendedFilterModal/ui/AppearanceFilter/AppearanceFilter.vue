<script setup>
import { RowFilterFieldset, BaseDropdown, RangeInputSmall } from '@/shared/ui';
import { extendedFilters } from '../../model/extended-filters';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-appearance">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Внешность</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-appearance">
          <RowFilterFieldset
            title="Цвет глаз:"
            name="eyecolor"
            type="checkbox"
            :options="extendedFilters.eyeColorOptions"
          />
          <RowFilterFieldset
            title="Цвет волос:"
            name="haircolor"
            type="checkbox"
            :options="extendedFilters.hairColorOptions"
          />
          <RowFilterFieldset
            title="Длина волос:"
            name="hair-length"
            type="checkbox"
            :options="extendedFilters.hairLengthOptions"
          />
          <div class="item-extended-filter__appearance">
            <h6 class="heading_h6">Рост:</h6>
            <BaseDropdown>-</BaseDropdown>
            <span class="item-extended-filter__unit">см</span>
          </div>
          <div class="item-extended-filter__appearance">
            <h6 class="heading_h6 heading__align-self_start">Параметры:</h6>
            <div class="item-extended-filter__row item-extended-filter__row_gap-big">
              <RangeInputSmall name="breast-input" title="Грудь">см</RangeInputSmall>
              <RangeInputSmall name="waist-input" title="Талия">см</RangeInputSmall>
              <RangeInputSmall name="buttocks-input" title="Ягодицы">см</RangeInputSmall>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Грудь:</label>
            <div class="item-extended-filter__row item-extended-filter__row_gap-big">
              <RangeInputSmall name="breast-size-input" title="Размер">A-G или 1-6</RangeInputSmall>
              <div class="item-extended-filter__column">
                <span>Тип:</span>
                <div class="item-extended-filter__row">
                  <input id="breast-type-n" type="checkbox" name="breast-type" >
                  <label for="breast-type-n">Натуральная</label>
                  <input id="breast-type-a" type="checkbox" name="breast-type" >
                  <label for="breast-type-a">Искусственная</label>
                </div>
              </div>
            </div>
          </div>
          <RowFilterFieldset
            title="Интимная стрижка:"
            name="intimate-haircut"
            type="checkbox"
            :options="extendedFilters.intimateHaircutOptions"
          />
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Тату:</label>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="tattoo-y" type="checkbox" name="tattoo" >
                <label for="tattoo-y">Да</label>
                <input id="tattoo-n" type="checkbox" name="tattoo" >
                <label for="tattoo-n">Нет</label>
              </div>
              <div class="item-extended-filter__row item-extended-filter__tattoo">
                <span>Места на теле:</span>
                <div
                  v-for="option in extendedFilters.tattooPlacesOptions"
                  :key="option.id"
                  class="item-extended-filter__row"
                >
                  <input :id="option.id" type="checkbox" name="tattoo-places" >
                  <label :for="option.id">{{ option.title }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Пирсинг:</label>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="piercing-y" type="checkbox" name="piercing" >
                <label for="piercing-y">Да</label>
                <input id="piercing-n" type="checkbox" name="piercing" >
                <label for="piercing-n">Нет</label>
              </div>
              <div class="item-extended-filter__row item-extended-filter__piercing">
                <span>Места на теле:</span>
                <div
                  v-for="option in extendedFilters.piercingPlacesOptions"
                  :key="option.id"
                  class="item-extended-filter__row"
                >
                  <input :id="option.id" type="checkbox" name="piercing-places" >
                  <label :for="option.id">{{ option.title }}</label>
                </div>
              </div>
            </div>
          </div>
          <RowFilterFieldset
            title="Раса:"
            name="girls-race"
            type="checkbox"
            :options="extendedFilters.raceOptions"
          />
          <div class="item-extended-filter__appearance">
            <label class="heading_h6" for="">Национальности:</label>
            <div class="button button_secondary button_small">Выбрать</div>
          </div>
          <RowFilterFieldset
            title="Языки:"
            name="languages"
            type="checkbox"
            :options="extendedFilters.languageOptions"
          />
          <div class="item-extended-filter__appearance">
            <label class="heading_h6 heading__align-self_start" for="">Паспорт:</label>
            <div class="item-extended-filter__row wrap item-extended-filter__has-passport">
              <input id="has-passport" type="checkbox" name="" >
              <label for="has-passport">Есть паспорт для путешествий</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
