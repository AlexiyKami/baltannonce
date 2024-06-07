const dropdown = document.querySelector('.dropdown');

dropdown.innerHTML = `
<div class="dropdown__btn" @click="isDropdownMenuOpened = !isDropdownMenuOpened">
  <span class="dropdown__text button__text"><slot/></span>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="dropdown__chevron"
    :class="{active: isDropdownMenuOpened}"
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
<div class="dropdown__body" :class="{active: isDropdownMenuOpened}">
  <div class="dropdown__item">
    <span class="dropdown__text button__text">test</span>
  </div>
  <div class="dropdown__item">
    <span class="dropdown__text button__text">test</span>
  </div>
</div>
`;