const dropdownCity = document.querySelector('.dropdown-city')

dropdownCity.innerHTML = `
<div class="dropdown-city__body active">
<div class="dropdown-city__container lt">
  <span class="dropdown-city__text">Литва</span>
  <ul class="dropdown-city__list">
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Вильнюс</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Каунас</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Клайпеда</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Шяуляй</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Паневежис</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
  </ul>
</div>
<div class="dropdown-city__container lv">
  <span class="dropdown-city__text">Латвия</span>
  <ul class="dropdown-city__list">
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Рига</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Юрмала</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Даугавпилс</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Лиепая</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
  </ul>
</div>
<div class="dropdown-city__container ee">
  <span class="dropdown-city__text">Эстония</span>
  <ul class="dropdown-city__list">
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Таллин</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Тарту</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
    <li class="dropdown-city__item">
    <p class="dropdown-city__city-name">Нарва</p>
    <span class="dropdown-city__city-count">(0)</span>
    </li>
  </ul>
</div>
</div>
`
document.querySelectorAll('.dropdown-city__item').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  })
});

const dropdownCityBtn = document.querySelector('.dropdown-city__btn');
const dropdownCityChevron = document.querySelector('.dropdown-city__chevron');
const dropdownCityBody = document.querySelector('.dropdown-city__body');

dropdownCityBtn.addEventListener('click', () => {
  dropdownCityBtn.classList.toggle('active');
  dropdownCityChevron.classList.toggle('active');
  dropdownCityBody.classList.toggle('active');
})