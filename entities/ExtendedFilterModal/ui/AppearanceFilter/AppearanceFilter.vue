<script setup>
import { RowFilterFieldset, BaseDropdown, RangeInputSmall } from '@/shared/ui';

defineProps({
  filters: { type: Object, required: true },
  gender: { type: String, required: true }
});

const tattoo = ref([]);
const piercing = ref([]);
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
            :options="filters.eyeColorOptions"
          />
          <RowFilterFieldset
            title="Цвет волос:"
            name="haircolor"
            type="checkbox"
            :options="filters.hairColorOptions"
          />
          <RowFilterFieldset
            title="Длина волос:"
            name="hair-length"
            type="checkbox"
            :options="filters.hairLengthOptions"
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
          <RowFilterFieldset
            v-if="gender === 'men'"
            title="Борода:"
            name="beard"
            type="checkbox"
            :options="filters.beardOptions"
          />
          <div v-if="gender === 'girls'" class="item-extended-filter__appearance">
            <h6 class="heading_h6 heading__align-self_start">Грудь:</h6>
            <div class="item-extended-filter__column item-extended-filter__breast">
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
            :options="filters.intimateHaircutOptions"
          />
          <div class="item-extended-filter__appearance">
            <h6 class="heading_h6 heading__align-self_start">Тату:</h6>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="tattoo-y" v-model="tattoo" type="checkbox" :value="true" >
                <label for="tattoo-y">Да</label>
                <input id="tattoo-n" v-model="tattoo" type="checkbox" :value="false" >
                <label for="tattoo-n">Нет</label>
              </div>
              <div
                v-if="tattoo.includes(true)"
                class="item-extended-filter__row item-extended-filter__tattoo"
              >
                <span class="item-extended-filter__row-span">Места на теле:</span>
                <div
                  v-for="option in filters.tattooPlacesOptions"
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
            <h6 class="heading_h6 heading__align-self_start">Пирсинг:</h6>
            <div class="item-extended-filter__column">
              <div class="item-extended-filter__row">
                <input id="piercing-y" v-model="piercing" type="checkbox" :value="true" >
                <label for="piercing-y">Да</label>
                <input id="piercing-n" v-model="piercing" type="checkbox" :value="false" >
                <label for="piercing-n">Нет</label>
              </div>
              <div
                v-if="piercing.includes(true)"
                class="item-extended-filter__row item-extended-filter__piercing"
              >
                <span class="item-extended-filter__row-span">Места на теле:</span>
                <div
                  v-for="option in filters.piercingPlacesOptions"
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
            :options="filters.raceOptions"
          />
          <div class="item-extended-filter__appearance">
            <h6 class="heading_h6">Национальности:</h6>
            <div class="button button_secondary button_small">Выбрать</div>
          </div>
          <RowFilterFieldset
            title="Языки:"
            name="languages"
            type="checkbox"
            :options="filters.languageOptions"
          />
          <div class="item-extended-filter__appearance">
            <h6 class="heading_h6 heading__align-self_start">Паспорт:</h6>
            <div class="item-extended-filter__row wrap item-extended-filter__has-passport">
              <input id="has-passport" type="checkbox" >
              <label for="has-passport">Есть паспорт для путешествий</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
