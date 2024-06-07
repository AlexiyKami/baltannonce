import './components/extended-filter-modal.js'
import './components/city-dropdown.js'
import './components/filter-dropdown.js'
import './components/dropdown.js'
import './components/header.js'
import './components/footer.js'
import './components/lang-dropdown.js'
import './components/theme-switch.js'

const isCityMenuOpened = true;
const isFilterMenuOpened = false;
const isFilterModalMenuOpened = false;
const isDropdownMenuOpened = false;

const setIsFilterModalMenuOpened = (value) => {
  isFilterModalMenuOpened = value;
};

const isMenuOpened = false;
const isLangMenuOpened = false;

const isDarkMode = false;

const toggleDarkMode = () => {
  document.body.classList.toggle('darkmode');
  isDarkMode = !isDarkMode;
};

const headerBurger = document.querySelector('.burger-header');

const headerBody = document.querySelector('.header__body');
const navmenuHeaderItem = document.querySelector('.navmenu-header__item');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerBody.classList.toggle('active');
}) 

navmenuHeaderItem.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerBody.classList.remove('active');
}) 

const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('click', () => {
  themeSwitch.classList.toggle('darkmode');
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