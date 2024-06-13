const saveBtn = document.querySelector('.new-password__button');
const newPasswordForm = document.querySelector('.new-password__form');
const successForm = document.querySelector('.new-password__form.new-password__form-success');
console.log(successForm);
newPasswordForm.addEventListener('submit', (event) => {
  console.log('sub');
  event.preventDefault();
  successForm.style.display = 'flex';
  newPasswordForm.style.display = 'none';
  return false;
})