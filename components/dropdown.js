const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach((item) => {
  item.innerHTML = `
  <div class="dropdown__btn">
    <span class="dropdown__text button__text"></span>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="dropdown__chevron"
     
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
  <div class="dropdown__body">
    <div class="dropdown__item">
      <span class="dropdown__text button__text">test</span>
    </div>
    <div class="dropdown__item">
      <span class="dropdown__text button__text">test</span>
    </div>
  </div>
  `;
  const dropdownBtn = item.querySelector('.dropdown__btn');
  const dropdownChevron = item.querySelector('.dropdown__chevron');
  const dropdownBody = item.querySelector('.dropdown__body');

  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('active');
    dropdownChevron.classList.toggle('active');
    dropdownBody.classList.toggle('active');
  })

  dropdownBody.addEventListener('click', () => {
    dropdownBtn.classList.remove('active');
    dropdownChevron.classList.remove('active');
    dropdownBody.classList.remove('active');
  })
})