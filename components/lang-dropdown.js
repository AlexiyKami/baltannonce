const langDropdown = document.querySelectorAll('.dropdown-lang');

langDropdown.forEach((item) => {
  item.innerHTML = `
<div class="dropdown-lang__btn">
<img src="assets/icons/RUflag_round.svg" alt="flag" class="dropdown-lang__flag" >
<span class="dropdown-lang__text button__text">RU</span>
</div>
<div class="dropdown-lang__body">
<div class="dropdown-lang__item">
  <img src="assets/icons/ENflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">EN</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/LVflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">LV</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/LTflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">LT</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/EEflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">EE</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/ESflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">ES</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/PTflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">PT</span>
</div>
<div class="dropdown-lang__item">
  <img src="assets/icons/DEflag_round.svg" alt="flag" class="dropdown-lang__flag" >
  <span class="dropdown-lang__text button__text">DE</span>
</div>
</div>
`;

const langMenuChevron = item.querySelector('.dropdown-lang__chevron');
const langMenuBody = item.querySelector('.dropdown-lang__body');

item.addEventListener('click', () => {
  langMenuBody.classList.toggle('active');
  langMenuChevron.classList.toggle('active');
})

})
