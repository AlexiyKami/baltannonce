import './components/filter-dropdown-men.js'
import './components/extended-filter-modal-men.js'

const tabContentStrippers = document.querySelector('.home__cards-in-tab_strippers');
const tabContentEscort = document.querySelector('.home__cards-in-tab_escort');

const tabBtnStrippers = document.querySelector('.home__tab-btn_strippers');
const tabBtnEscort = document.querySelector('.home__tab-btn_escort');

tabBtnStrippers.addEventListener('click', () => {
  tabContentEscort.classList.remove('active');
  tabBtnEscort.classList.remove('active');
  tabContentStrippers.classList.add('active');
  tabBtnStrippers.classList.add('active');
})

tabBtnEscort.addEventListener('click', () => {
  tabContentEscort.classList.add('active');
  tabBtnEscort.classList.add('active');
  tabContentStrippers.classList.remove('active');
  tabBtnStrippers.classList.remove('active');
})