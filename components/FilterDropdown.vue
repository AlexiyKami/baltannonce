<script setup>
import '../assets/scss/components/filter-dropdown.scss';
import '../assets/scss/components/inputs.scss';

defineProps(["isFilterMenuOpened"]);
</script>

<template>

  <div class="hero__dropdown-filter dropdown-filter" :class="{active: isFilterMenuOpened}">
    <div class="dropdown-filter__body">
      <form class="dropdown-filter__form dropdown-filter__sortby">
        <h5 class="dropdown-filter__title heading_h5">Сортировать по</h5>
        <div class="dropdown-filter__item">
          <input type="radio" name="sortby" id="new-first">
          <label for="new-first">Новые первые</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="radio" name="sortby" id="cheap-first">
          <label for="cheap-first">Дешевые первые</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="radio" name="sortby" id="activity">
          <label for="activity">Активности</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="radio" name="sortby" id="rating">
          <label for="rating">Рейтингу</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__price">
        <h5 class="dropdown-filter__title heading_h5">Цена за час</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="price" id="100-200">
          <label for="100-200">От 100 до 200</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="price" id="200-300">
          <label for="200-300">От 200 до 300</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="price" id="300-500">
          <label for="300-500">От 300 до 500</label>
        </div>
        <div class="dropdown-filter__item dropdown-filter__item-price">
          <label for="">Свои значения:</label>
          <div class="dropdown-filter__item-number-inputs">
            <input type="number" name="price" id="custom-price" class="small" min="0" placeholder="----">
            <span>-</span>
            <input type="number" name="price" id="custom-price" class="small" min="0" placeholder="----">
          </div>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__years-old">
        <h5 class="dropdown-filter__title heading_h5">Возраст</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="years-old" id="18-20">
          <label for="18-20">18-20</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="years-old" id="21-24">
          <label for="21-24">21-24</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="years-old" id="25-29">
          <label for="25-29">25-29</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="years-old" id="30-35">
          <label for="30-35">30-35</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__hair-color">
        <h5 class="dropdown-filter__title heading_h5">Цвет волос</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="hair-color" id="blonde">
          <label for="blonde">Блондинка</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="hair-color" id="brown">
          <label for="brown">Шатенка</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="hair-color" id="brunette">
          <label for="brunette">Брюнетка</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="hair-color" id="light-brown">
          <label for="light-brown">Русая</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="hair-color" id="red">
          <label for="red">Рыжая</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__breast-size">
        <h5 class="dropdown-filter__title heading_h5">Размер груди</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="A">
          <label for="A">A</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="B">
          <label for="B">B</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="C">
          <label for="C">C</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="D">
          <label for="D">D</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="DD">
          <label for="DD">DD</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="breast-size" id="G">
          <label for="G">G</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__language">
        <h5 class="dropdown-filter__title heading_h5">Язык</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="language" id="LT">
          <label for="LT">Литовский</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="language" id="LV">
          <label for="LV">Латышский</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="language" id="EE">
          <label for="EE">Эстонский</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="language" id="RU">
          <label for="RU">Русский</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="language" id="EN">
          <label for="EN">Английский</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__race">
        <h5 class="dropdown-filter__title heading_h5">Раса</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="race" id="white">
          <label for="white">Белая</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="race" id="latin">
          <label for="latin">Латинская</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="race" id="negro">
          <label for="negro">Черная</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="race" id="asian">
          <label for="asian">Азиатка</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="race" id="exotic">
          <label for="exotic">Экзотическая</label>
        </div>
      </form>
      <form class="dropdown-filter__form dropdown-filter__available">
        <h5 class="dropdown-filter__title heading_h5">Доступна</h5>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="available" id="incall-a">
          <label for="incall-a">Апартаменты Incall</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="available" id="incall-h">
          <label for="incall-h">Отель Incall</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="available" id="outcall-a">
          <label for="outcall-a">Апартаменты Outcall</label>
        </div>
        <div class="dropdown-filter__item">
          <input type="checkbox" name="available" id="outcall-h">
          <label for="outcall-h">Отель Outcall</label>
        </div>
      </form>
    </div>
    <h5 class="dropdown-filter__title heading_h5">Другое</h5>
    <div class="dropdown-filter__body-bottom">
      <div class="dropdown-filter__other-filters">
        <form class="dropdown-filter__form dropdown-filter__questionary">
          <h5 class="dropdown-filter__title heading_h5">Анкета с видео:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
            <input type="checkbox" name="questionary" id="questionary-yes">
            <label for="questionary-yes">Да</label>
          </div>
          <div class="dropdown-filter__item">
            <input type="checkbox" name="questionary" id="questionary-no">
            <label for="questionary-no">Нет</label>
          </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__smoking">
          <h5 class="dropdown-filter__title heading_h5">Курит:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
            <input type="checkbox" name="smoking" id="smoking-yes">
            <label for="smoking-yes">Да</label>
          </div>
          <div class="dropdown-filter__item">
            <input type="checkbox" name="smoking" id="smoking-no">
            <label for="smoking-no">Нет</label>
          </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__silicone">
          <h5 class="dropdown-filter__title heading_h5">Силикон:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
            <input type="checkbox" name="silicone" id="silicone-yes">
            <label for="silicone-yes">Да</label>
          </div>
          <div class="dropdown-filter__item">
            <input type="checkbox" name="silicone" id="silicone-no">
            <label for="silicone-no">Нет</label>
          </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__bdsm">
          <h5 class="dropdown-filter__title heading_h5">БДСМ:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
            <input type="checkbox" name="bdsm" id="bdsm-yes">
            <label for="bdsm-yes">Да</label>
          </div>
          <div class="dropdown-filter__item">
            <input type="checkbox" name="bdsm" id="bdsm-no">
            <label for="bdsm-no">Нет</label>
          </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__contacts">
          <h5 class="dropdown-filter__title heading_h5">Способ связи:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
              <input type="checkbox" name="contacts" id="telegram">
              <label for="telegram">Telegram</label>
            </div>
            <div class="dropdown-filter__item">
              <input type="checkbox" name="contacts" id="whatsapp">
              <label for="whatsapp">Whatsapp</label>
            </div>
          </div>
        </form>
        <form class="dropdown-filter__form dropdown-filter__verified">
          <h5 class="dropdown-filter__title heading_h5">Проверены лично:</h5>
          <div class="dropdown-filter__row-container">
            <div class="dropdown-filter__item">
            <input type="checkbox" name="verified" id="verified-yes">
            <label for="verified-yes">Да</label>
          </div>
          <div class="dropdown-filter__item">
            <input type="checkbox" name="verified" id="verified-no">
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
