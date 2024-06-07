import './components/extended-filter-modal.js'
import './components/city-dropdown.js'
import './components/filter-dropdown.js'
import './components/dropdown.js'
import './components/header.js'
import './components/footer.js'
import './components/lang-dropdown.js'
import './components/theme-switch.js'

const headerBurger = document.querySelector('.burger-header');
const headerBody = document.querySelector('.header__body');
const navmenuHeaderItems = document.querySelectorAll('.navmenu-header__item');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerBody.classList.toggle('active');
})

navmenuHeaderItems.forEach((item) => item.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerBody.classList.remove('active');
}))

const langMenuBtn = document.querySelector('.dropdown-lang');
const langMenuChevron = document.querySelector('.dropdown-lang__chevron');
const langMenuBody = document.querySelector('.dropdown-lang__body');

langMenuBtn.addEventListener('click', () => {
  langMenuBody.classList.toggle('active');
  langMenuChevron.classList.toggle('active');
})

const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', () => {
  themeSwitch.classList.toggle('darkmode');
  document.body.classList.toggle('darkmode');
})

const dropdownCityBtn = document.querySelector('.dropdown-city__btn');
const dropdownCityChevron = document.querySelector('.dropdown-city__chevron');
const dropdownCityBody = document.querySelector('.dropdown-city__body');

dropdownCityBtn.addEventListener('click', () => {
  dropdownCityBtn.classList.toggle('active');
  dropdownCityChevron.classList.toggle('active');
  dropdownCityBody.classList.toggle('active');
})

const heroFilterBtn = document.querySelector('.hero__filter-btn');
const dropdownFilter = document.querySelector('.dropdown-filter');

heroFilterBtn.addEventListener('click', () => {
  heroFilterBtn.classList.toggle('active');
  dropdownFilter.classList.toggle('active');
})

const extendedFilterBtn = document.querySelector('.hero__extended-filter-btn');
const extendedFilterModalOverlay = document.querySelector('.modal-overlay');
const extendedFilterModalMenu = document.querySelector('.modal-menu');
const extendedFilterButton = document.querySelector('.extended-filter__button');

extendedFilterBtn.addEventListener('click', () => {
  extendedFilterModalMenu.classList.toggle('closed');
  document.body.style.overflow = 'hidden';
})

extendedFilterModalOverlay.addEventListener('click', () => {
  extendedFilterModalMenu.classList.add('closed');
  document.body.style.overflow = 'auto';
})

extendedFilterButton.addEventListener('click', () => {
  extendedFilterModalMenu.classList.add('closed');
  document.body.style.overflow = 'auto';
})

