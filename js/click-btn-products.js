const productsListRef = document.querySelector('.products__list');
const menuProductBtnRef = document.querySelectorAll('.products__list button');

productsListRef.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  menuProductBtnRef.forEach(btn => {
    if (
      e.target === btn ||
      e.target === btn.firstElementChild ||
      e.path[1] === btn.firstElementChild
    )
      btn.classList.toggle('is-open');
  });
}
