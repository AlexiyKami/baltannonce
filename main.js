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


