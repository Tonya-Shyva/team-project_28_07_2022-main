const menuProductBtnRef = document.querySelectorAll('.products__list button');

menuProductBtnRef.forEach(btn =>
  btn.addEventListener('click', e => {
    if (e.currentTarget === btn) btn.classList.toggle('is-open');
  })
);
