const productsListRef = document.querySelector('.products__list');
const menuBtnRef = document.querySelectorAll('.products__list button');
const mobileMenuRef = document.querySelector('.products__card div');

function onBtnClick() {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
}

productsListRef.addEventListener('click', function (event) {
  if (event.target(menuBtnRef)) {
    onBtnClick();
  }
});

$('.products__btn1').click(function () {
  $('.products__article1').fadeToggle(500);
});

$('.products__btn2').click(function () {
  $('.products__article2').fadeToggle(500);
});

$('.products__btn3').click(function () {
  $('.products__article3').fadeToggle(500);
});
