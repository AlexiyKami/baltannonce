<script setup>
import './extended-filter-modal.scss';
import { FilterFieldset, RowFilterFieldset, BaseDropdown } from '@/shared/ui';
import { extendedFilters } from '../../model/extended-filters';
import { cities } from '../../model/cities';

defineProps(['isExtendedFilterModalOpened']);
defineEmits(['setIsExtendedFilterModalOpened']);
</script>

<template>
  <div
    class="modal-menu"
    :class="{
      closed: !isExtendedFilterModalOpened
    }"
  >
    <div class="modal-overlay" @click="$emit('setIsExtendedFilterModalOpened', false)"></div>
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
        <div class="extended-filter__container">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Основные параметры</h4>
            <div class="item-extended-filter__stripe"></div>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">Возраст:</label>
              <div class="item-extended-filter__row">
                <input
                  id="years-old"
                  type="number"
                  name="years-old"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="years-old"
                  type="number"
                  name="years-old"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span class="item-extended-filter__unit">лет</span>
              </div>
            </form>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">Рост:</label>
              <div class="item-extended-filter__row">
                <input
                  id="height"
                  type="number"
                  name="height"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="height"
                  type="number"
                  name="height"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span class="item-extended-filter__unit">см</span>
              </div>
            </form>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">Вес:</label>
              <div class="item-extended-filter__row">
                <input
                  id="weight"
                  type="number"
                  name="weight"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="weight"
                  type="number"
                  name="weight"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span class="item-extended-filter__unit">кг</span>
              </div>
            </form>
          </div>
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Расценки</h4>
            <div class="item-extended-filter__stripe"></div>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">1 час:</label>
              <div class="item-extended-filter__row">
                <input
                  id="1hour"
                  type="number"
                  name="1hour"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="1hour"
                  type="number"
                  name="1hour"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
              </div>
            </form>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">2 часа:</label>
              <div class="item-extended-filter__row">
                <input
                  id="2hour"
                  type="number"
                  name="2hour"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="2hour"
                  type="number"
                  name="2hour"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
              </div>
            </form>
            <form class="item-extended-filter__form wrap">
              <label class="heading_h6" for="">Ночь:</label>
              <div class="item-extended-filter__row">
                <input
                  id="night"
                  type="number"
                  name="night"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
                <span>-</span>
                <input
                  id="night"
                  type="number"
                  name="night"
                  class="medium"
                  min="0"
                  placeholder="----"
                />
              </div>
            </form>
          </div>
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Место встречи</h4>
            <div class="item-extended-filter__stripe"></div>
            <div
              class="item-extended-filter__form"
              v-for="option in extendedFilters.meetingPointOptions"
              :key="option.id"
            >
              <input :id="option.id" type="checkbox" name="meeting-point" />
              <label :for="option.id">{{ option.title }}</label>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-preferences">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Предпочтения</h4>
            <div class="item-extended-filter__stripe"></div>
            <div class="item-extended-filter__forms-container">
              <div class="item-extended-filter__forms">
                <FilterFieldset
                  title="Секс"
                  name="sex"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.sexOptions"
                />
                <FilterFieldset
                  title="Стриптиз"
                  name="striptease"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.stripteaseOptions"
                />
              </div>
              <div class="item-extended-filter__forms">
                <FilterFieldset
                  title="Массаж"
                  name="massage"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.massageOptions"
                />
                <FilterFieldset
                  title="Экстрим"
                  name="extreme"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.extremeOptions"
                />
              </div>
              <div class="item-extended-filter__forms">
                <FilterFieldset
                  title="Садо-мазо"
                  name="sado-maso"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.sadoMasoOptions"
                />
                <FilterFieldset
                  title="Разное"
                  name="different"
                  type="checkbox"
                  container="column"
                  :options="extendedFilters.differentOptions"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-reviews">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Отзывы и оценки</h4>
            <div class="item-extended-filter__stripe"></div>
            <div class="item-extended-filter__forms-container">
              <div class="item-extended-filter__forms">
                <div class="item-extended-filter__reviews">
                  <label class="heading_h6" for="">Отзывов, не менее:</label>
                  <div class="dropdown">-</div>
                </div>
                <div class="item-extended-filter__reviews">
                  <label class="heading_h6" for="">С оценками пользователей:</label>
                  <div class="button button_secondary button_small">Выбрать</div>
                </div>
              </div>
              <div class="item-extended-filter__forms">
                <div class="item-extended-filter__reviews">
                  <label class="heading_h6" for="">Оценок, не менее:</label>
                  <div class="dropdown">-</div>
                </div>
                <div class="item-extended-filter__reviews">
                  <label class="heading_h6" for="">С новыми отзывами за последние:</label>
                  <div class="dropdown">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-additional">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Дополнительные параметры</h4>
            <div class="item-extended-filter__stripe"></div>
            <div class="item-extended-filter__forms-container">
              <div class="item-extended-filter__forms">
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Новые за:</label>
                  <div class="dropdown">-</div>
                </div>
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Сортировать по верификации</label>
                  <div class="dropdown wide">Не выбрано</div>
                </div>
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Сортировать по разделу</label>
                  <div class="dropdown wide">Не выбрано</div>
                </div>
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Часы работы:</label>
                  <div class="dropdown narrow">-</div>
                  <span>-</span>
                  <div class="dropdown narrow">-</div>
                </div>
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Принимает в возрасте от:</label>
                  <input id="" type="number" name="" class="medium" min="0" placeholder="----" />
                  <span>-</span>
                  <input id="" type="number" name="" class="medium" min="0" placeholder="----" />
                </div>
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Способ связи:</label>
                  <div class="item-extended-filter__row">
                    <input id="telegramm" type="checkbox" name="contacts" />
                    <label for="telegramm">Telegram</label>
                  </div>
                  <div class="item-extended-filter__row">
                    <input id="whatsappp" type="checkbox" name="contacts" />
                    <label for="whatsappp">Whatsapp</label>
                  </div>
                </div>
              </div>
              <div class="item-extended-filter__forms">
                <div class="item-extended-filter__additional">
                  <label class="heading_h6" for="">Анкет с уникальным номером телефона:</label>
                  <div class="dropdown">-</div>
                </div>
                <div class="item-extended-filter__row">
                  <input id="questionary-video" type="checkbox" name="" />
                  <label for="questionary-video">Анкеты с видео</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="smoking1" type="checkbox" name="" />
                  <label for="smoking1">Курит</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="drinking" type="checkbox" name="" />
                  <label for="drinking">Пьет алкоголь</label>
                </div>
                <div class="item-extended-filter__row">
                  <input id="friends" type="checkbox" name="" />
                  <label for="friends">Подружки</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-appearance">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Внешность</h4>
            <div class="item-extended-filter__stripe"></div>
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
                  <BaseDropdown />
                  <span class="item-extended-filter__unit">см</span>
                </div>
                <div class="item-extended-filter__appearance">
                  <h6 class="heading_h6 heading__align-self_start">Параметры:</h6>
                  <div class="item-extended-filter__row item-extended-filter__row_gap-big">
                    <div class="item-extended-filter__column">
                      <span>Грудь:</span>
                      <div class="item-extended-filter__row">
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span>-</span>
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span class="item-extended-filter__unit">см</span>
                      </div>
                    </div>
                    <div class="item-extended-filter__column">
                      <span>Талия:</span>
                      <div class="item-extended-filter__row">
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span>-</span>
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span class="item-extended-filter__unit">см</span>
                      </div>
                    </div>
                    <div class="item-extended-filter__column">
                      <span>Ягодицы:</span>
                      <div class="item-extended-filter__row">
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span>-</span>
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span class="item-extended-filter__unit">см</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-extended-filter__appearance">
                  <label class="heading_h6 heading__align-self_start" for="">Грудь:</label>
                  <div class="item-extended-filter__row item-extended-filter__row_gap-big">
                    <div class="item-extended-filter__column">
                      <span>Размер:</span>
                      <div class="item-extended-filter__row">
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span>-</span>
                        <input
                          id=""
                          type="number"
                          name=""
                          class="small"
                          min="0"
                          placeholder="----"
                        />
                        <span class="item-extended-filter__unit">A-G или 1-6</span>
                      </div>
                    </div>
                    <div class="item-extended-filter__column">
                      <span>Тип:</span>
                      <div class="item-extended-filter__row">
                        <input id="breast-type-n" type="checkbox" name="breast-type" />
                        <label for="breast-type-n">Натуральная</label>
                        <input id="breast-type-a" type="checkbox" name="breast-type" />
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
                      <input id="tattoo-y" type="checkbox" name="tattoo" />
                      <label for="tattoo-y">Да</label>
                      <input id="tattoo-n" type="checkbox" name="tattoo" />
                      <label for="tattoo-n">Нет</label>
                    </div>
                    <div class="item-extended-filter__row item-extended-filter__tattoo">
                      <span>Места на теле:</span>
                      <div
                        class="item-extended-filter__row"
                        v-for="option in extendedFilters.tattooPlacesOptions"
                        :key="option.id"
                      >
                        <input :id="option.id" type="checkbox" name="tattoo-places" />
                        <label :for="option.id">{{ option.title }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-extended-filter__appearance">
                  <label class="heading_h6 heading__align-self_start" for="">Пирсинг:</label>
                  <div class="item-extended-filter__column">
                    <div class="item-extended-filter__row">
                      <input id="piercing-y" type="checkbox" name="piercing" />
                      <label for="piercing-y">Да</label>
                      <input id="piercing-n" type="checkbox" name="piercing" />
                      <label for="piercing-n">Нет</label>
                    </div>
                    <div class="item-extended-filter__row item-extended-filter__piercing">
                      <span>Места на теле:</span>
                      <div
                        class="item-extended-filter__row"
                        v-for="option in extendedFilters.piercingPlacesOptions"
                        :key="option.id"
                      >
                        <input :id="option.id" type="checkbox" name="piercing-places" />
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
                    <input id="has-passport" type="checkbox" name="" />
                    <label for="has-passport">Есть паспорт для путешествий</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-fetish">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Фетишизм</h4>
            <div class="item-extended-filter__stripe"></div>
            <div class="item-extended-filter__forms-container">
              <div class="item-extended-filter__forms item-extended-filter__forms-fetish">
                <div class="item-extended-filter__fetish">
                  <div class="item-extended-filter__row">
                    <label class="heading_h6" for="">Размер одежды:</label>
                    <div class="item-extended-filter__row">
                      <input
                        id=""
                        type="number"
                        name=""
                        class="medium"
                        min="0"
                        placeholder="----"
                      />
                      <span>-</span>
                      <input
                        id=""
                        type="number"
                        name=""
                        class="medium"
                        min="0"
                        placeholder="----"
                      />
                      <span class="item-extended-filter__unit">см</span>
                    </div>
                  </div>
                  <div class="item-extended-filter__row">
                    <label class="heading_h6" for="">Размер обуви:</label>
                    <div class="item-extended-filter__row">
                      <input
                        id=""
                        type="number"
                        name=""
                        class="medium"
                        min="0"
                        placeholder="----"
                      />
                      <span>-</span>
                      <input
                        id=""
                        type="number"
                        name=""
                        class="medium"
                        min="0"
                        placeholder="----"
                      />
                      <span class="item-extended-filter__unit">см</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extended-filter__container extended-filter__container-location">
          <div class="extended-filter__item item-extended-filter">
            <h4 class="item-extended-filter__title heading_h4">Расположение</h4>
            <div class="item-extended-filter__stripe"></div>
            <div class="item-extended-filter__forms-container">
              <div class="item-extended-filter__forms item-extended-filter__forms-location">
                <RowFilterFieldset
                  title="Литва:"
                  name="lithuanian-cities"
                  type="checkbox"
                  :options="cities.lithuanianCities"
                />
                <RowFilterFieldset
                  title="Латвия:"
                  name="latvian-cities"
                  type="checkbox"
                  :options="cities.latvianCities"
                />
                <RowFilterFieldset
                  title="Эстония:"
                  name="estonian-cities"
                  type="checkbox"
                  :options="cities.estonianCities"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extended-filter__button button button_primary">Найти</div>
    </div>
  </div>
</template>
