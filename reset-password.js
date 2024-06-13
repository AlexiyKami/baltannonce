const resetBtn = document.querySelector('.reset-password__button');
const resetPasswordForm = document.querySelector('.reset-password__form');
const successForm = document.querySelector('.reset-password__form.reset-password__form-success');
console.log(successForm);
resetPasswordForm.addEventListener('submit', (event) => {
  console.log('sub');
  event.preventDefault();
  successForm.style.display = 'flex';
  resetPasswordForm.style.display = 'none';
  return false;
})