const typeBtns = document.querySelectorAll('.register__card-with-description');
const genderBtns = document.querySelectorAll('.register__card');

typeBtns.forEach((item) => {
  item.addEventListener('click', () => {
    typeBtns.forEach((elem) => elem.classList.remove('selected'));
    item.classList.add('selected');
  })
})

genderBtns.forEach((item) => {
  item.addEventListener('click', () => {
    genderBtns.forEach((elem) => elem.classList.remove('selected'));
    item.classList.add('selected');
  })
})