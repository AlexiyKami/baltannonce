const langDropdown = document.querySelector('.dropdown-lang');

langDropdown.innerHTML = `
<div class="dropdown-lang__btn">
<img src="assets/icons/RUflag_round.svg" alt="flag" class="dropdown-lang__flag" >
<span class="dropdown-lang__text button__text">RU</span>
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="dropdown-lang__chevron"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
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
`