const filterDropdown = document.querySelector('.dropdown-filter');

filterDropdown.innerHTML = `
<div class="dropdown-filter__body">
<form class="dropdown-filter__form dropdown-filter__sortby">
  <h5 class="dropdown-filter__title heading_h5">Сортировать по</h5>
  <div class="dropdown-filter__item">
    <input id="new-first" type="radio" name="sortby">
    <label for="new-first">Новые первые</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="cheap-first" type="radio" name="sortby">
    <label for="cheap-first">Дешевые первые</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="activity" type="radio" name="sortby">
    <label for="activity">Активности</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="rating" type="radio" name="sortby">
    <label for="rating">Рейтингу</label>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__price">
  <h5 class="dropdown-filter__title heading_h5">Цена за час</h5>
  <div class="dropdown-filter__item">
    <input id="100-200" type="checkbox" name="price">
    <label for="100-200">От 100 до 200</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="200-300" type="checkbox" name="price">
    <label for="200-300">От 200 до 300</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="300-500" type="checkbox" name="price">
    <label for="300-500">От 300 до 500</label>
  </div>
  <div class="dropdown-filter__item dropdown-filter__item-price">
    <label for="">Свои значения:</label>
    <div class="dropdown-filter__item-number-inputs">
      <input id="custom-price" type="number" name="price" class="small" min="0" placeholder="----">
      <span>-</span>
      <input id="custom-price" type="number" name="price" class="small" min="0" placeholder="----">
    </div>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__years-old">
  <h5 class="dropdown-filter__title heading_h5">Возраст</h5>
  <div class="dropdown-filter__item">
    <input id="18-20" type="checkbox" name="years-old">
    <label for="18-20">18-20</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="21-24" type="checkbox" name="years-old">
    <label for="21-24">21-24</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="25-29" type="checkbox" name="years-old">
    <label for="25-29">25-29</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="30-35" type="checkbox" name="years-old">
    <label for="30-35">30-35</label>
  </div>
  <div class="dropdown-filter__btn-more button__text">
    <span class="dropdown-filter__btn-text button__text">Больше</span>
    <div class="dropdown-filter__popup popup-dropdown-filter">
      <div class="popup-dropdown-filter__heading">
        <h5 class="popup-dropdown-filter__title">Возраст</h5>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="popup-dropdown-filter__cross button_icon-primary">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="popup-dropdown-filter__list">
        <div class="popup-dropdown-filter__item">
          <input id="18-20-popup" type="checkbox" name="years-old">
          <label for="18-20-popup">18-20</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="21-24-popup" type="checkbox" name="years-old">
          <label for="21-24-popup">21-24</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="25-29-popup" type="checkbox" name="years-old">
          <label for="25-29-popup">25-29</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="30-35-popup" type="checkbox" name="years-old">
          <label for="30-35-popup">30-35</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="36-40-popup" type="checkbox" name="years-old">
          <label for="36-40-popup">36-40</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="40-popup" type="checkbox" name="years-old">
          <label for="40-popup">40+</label>
        </div>
      </div>
      <div class="popup-dropdown-filter__btns">
        <div class="popup-dropdown-filter__btn popup-dropdown-filter__btn-cancel button button_secondary button_small">Отменить</div>
        <div class="popup-dropdown-filter__btn popup-dropdown-filter__btn-filter button button_primary button_small">Отфильтровать</div>
      </div>
    </div>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__hair-color">
  <h5 class="dropdown-filter__title heading_h5">Цвет волос</h5>
  <div class="dropdown-filter__item">
    <input id="blonde" type="checkbox" name="hair-color">
    <label for="blonde">Блондинка</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="brown" type="checkbox" name="hair-color">
    <label for="brown">Шатенка</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="brunette" type="checkbox" name="hair-color">
    <label for="brunette">Брюнетка</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="light-brown" type="checkbox" name="hair-color">
    <label for="light-brown">Русая</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="red" type="checkbox" name="hair-color">
    <label for="red">Рыжая</label>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__breast-size">
  <h5 class="dropdown-filter__title heading_h5">Размер груди</h5>
  <div class="dropdown-filter__item">
    <input id="A" type="checkbox" name="breast-size">
    <label for="A">A</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="B" type="checkbox" name="breast-size">
    <label for="B">B</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="C" type="checkbox" name="breast-size">
    <label for="C">C</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="D" type="checkbox" name="breast-size">
    <label for="D">D</label>
  </div>
  <div class="dropdown-filter__btn-more button__text">
    <span class="dropdown-filter__btn-text button__text">Больше</span>
    <div class="dropdown-filter__popup popup-dropdown-filter">
      <div class="popup-dropdown-filter__heading">
        <h5 class="popup-dropdown-filter__title">Размер груди</h5>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="popup-dropdown-filter__cross button_icon-primary">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="popup-dropdown-filter__list">
        <div class="popup-dropdown-filter__item">
          <input id="A-popup" type="checkbox" name="breast-size">
          <label for="A-popup">A</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="B-popup" type="checkbox" name="breast-size">
          <label for="B-popup">B</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="C-popup" type="checkbox" name="breast-size">
          <label for="C-popup">C</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="D-popup" type="checkbox" name="breast-size">
          <label for="D-popup">D</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="DD-popup" type="checkbox" name="breast-size">
          <label for="DD-popup">DD</label>
        </div>
        <div class="popup-dropdown-filter__item">
          <input id="G-popup" type="checkbox" name="breast-size">
          <label for="G-popup">G</label>
        </div>
      </div>
      <div class="popup-dropdown-filter__btns">
        <div class="popup-dropdown-filter__btn popup-dropdown-filter__btn-cancel button button_secondary button_small">Отменить</div>
        <div class="popup-dropdown-filter__btn popup-dropdown-filter__btn-filter button button_primary button_small">Отфильтровать</div>
      </div>
    </div>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__language">
  <h5 class="dropdown-filter__title heading_h5">Язык</h5>
  <div class="dropdown-filter__item">
    <input id="LT" type="checkbox" name="language">
    <label for="LT">Литовский</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="LV" type="checkbox" name="language">
    <label for="LV">Латышский</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="EE" type="checkbox" name="language">
    <label for="EE">Эстонский</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="RU" type="checkbox" name="language">
    <label for="RU">Русский</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="EN" type="checkbox" name="language">
    <label for="EN">Английский</label>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__race">
  <h5 class="dropdown-filter__title heading_h5">Раса</h5>
  <div class="dropdown-filter__item">
    <input id="white" type="checkbox" name="race">
    <label for="white">Белая</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="latin" type="checkbox" name="race">
    <label for="latin">Латинская</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="negro" type="checkbox" name="race">
    <label for="negro">Черная</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="asian" type="checkbox" name="race">
    <label for="asian">Азиатка</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="exotic" type="checkbox" name="race">
    <label for="exotic">Экзотическая</label>
  </div>
</form>
<form class="dropdown-filter__form dropdown-filter__available">
  <h5 class="dropdown-filter__title heading_h5">Доступна</h5>
  <div class="dropdown-filter__item">
    <input id="incall-a" type="checkbox" name="available">
    <label for="incall-a">Апартаменты Incall</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="incall-h" type="checkbox" name="available">
    <label for="incall-h">Отель Incall</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="outcall-a" type="checkbox" name="available">
    <label for="outcall-a">Апартаменты Outcall</label>
  </div>
  <div class="dropdown-filter__item">
    <input id="outcall-h" type="checkbox" name="available">
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
      <input id="questionary-yes" type="checkbox" name="questionary">
      <label for="questionary-yes">Да</label>
    </div>
    <div class="dropdown-filter__item">
      <input id="questionary-no" type="checkbox" name="questionary">
      <label for="questionary-no">Нет</label>
    </div>
    </div>
  </form>
  <form class="dropdown-filter__form dropdown-filter__smoking">
    <h5 class="dropdown-filter__title heading_h5">Курит:</h5>
    <div class="dropdown-filter__row-container">
      <div class="dropdown-filter__item">
      <input id="smoking-yes" type="checkbox" name="smoking">
      <label for="smoking-yes">Да</label>
    </div>
    <div class="dropdown-filter__item">
      <input id="smoking-no" type="checkbox" name="smoking">
      <label for="smoking-no">Нет</label>
    </div>
    </div>
  </form>
  <form class="dropdown-filter__form dropdown-filter__silicone">
    <h5 class="dropdown-filter__title heading_h5">Силикон:</h5>
    <div class="dropdown-filter__row-container">
      <div class="dropdown-filter__item">
      <input id="silicone-yes" type="checkbox" name="silicone">
      <label for="silicone-yes">Да</label>
    </div>
    <div class="dropdown-filter__item">
      <input id="silicone-no" type="checkbox" name="silicone">
      <label for="silicone-no">Нет</label>
    </div>
    </div>
  </form>
  <form class="dropdown-filter__form dropdown-filter__bdsm">
    <h5 class="dropdown-filter__title heading_h5">БДСМ:</h5>
    <div class="dropdown-filter__row-container">
      <div class="dropdown-filter__item">
      <input id="bdsm-yes" type="checkbox" name="bdsm">
      <label for="bdsm-yes">Да</label>
    </div>
    <div class="dropdown-filter__item">
      <input id="bdsm-no" type="checkbox" name="bdsm">
      <label for="bdsm-no">Нет</label>
    </div>
    </div>
  </form>
  <form class="dropdown-filter__form dropdown-filter__contacts">
    <h5 class="dropdown-filter__title heading_h5">Способ связи:</h5>
    <div class="dropdown-filter__row-container">
      <div class="dropdown-filter__item">
        <input id="telegram" type="checkbox" name="contacts">
        <label for="telegram">Telegram</label>
      </div>
      <div class="dropdown-filter__item">
        <input id="whatsapp" type="checkbox" name="contacts">
        <label for="whatsapp">Whatsapp</label>
      </div>
    </div>
  </form>
  <form class="dropdown-filter__form dropdown-filter__verified">
    <h5 class="dropdown-filter__title heading_h5">Проверены лично:</h5>
    <div class="dropdown-filter__row-container">
      <div class="dropdown-filter__item">
      <input id="verified-yes" type="checkbox" name="verified">
      <label for="verified-yes">Да</label>
    </div>
    <div class="dropdown-filter__item">
      <input id="verified-no" type="checkbox" name="verified">
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
`
const popupDropdownFilter = document.querySelectorAll('.popup-dropdown-filter');
const popupBtnMore = document.querySelectorAll('.dropdown-filter__btn-text');
const popupBtnClose = document.querySelectorAll('.popup-dropdown-filter__cross');

popupBtnMore.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    popupDropdownFilter[index].classList.toggle('active');
  })
})

popupBtnClose.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    popupDropdownFilter[index].classList.remove('active');
  })
})