const productsListRef = document.querySelector('.products__list');
const menuProductBtnRef = document.querySelectorAll('.products__list button');

function onBtnClick(e) {
  for (const btn of menuProductBtnRef) {
    if (e.target === btn) {
      btn.classList.toggle('is-open');
    }
  }
}

productsListRef.addEventListener('click', onBtnClick);

// (() => {
//   const menuBtnRef = document.querySelector('.products__btn1');
//   const mobileMenuRef = document.querySelector('.products__article1');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('.products__btn2');
//   const mobileMenuRef = document.querySelector('.products__article2');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('.products__btn3');
//   const mobileMenuRef = document.querySelector('.products__article3');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

$('.products__btn1').click(function () {
  $('.products__article1').fadeToggle(500);
});

$('.products__btn2').click(function () {
  $('.products__article2').fadeToggle(500);
});

$('.products__btn3').click(function () {
  $('.products__article3').fadeToggle(500);
});
