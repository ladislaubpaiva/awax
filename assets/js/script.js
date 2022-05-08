const btnOpen = document.querySelector('.bx-menu');
const btnClose = document.querySelector('.bx-x');
const nav = document.querySelector('.menu nav');
btnOpen.addEventListener('click', () => {
  btnOpen.style.display = 'none';
  nav.style.display = 'flex';
  btnClose.style.display = 'block';
});
btnClose.addEventListener('click', () => {
  btnClose.style.display = 'none';
  nav.style.display = 'none';
  btnOpen.style.display = 'block';
});

nav.querySelectorAll('ul li').forEach((e) => {
  e.addEventListener('click', (el) => {
    removeActive();
    el.target.classList.add('active');
  });
});
const removeActive = () => {
  nav.querySelectorAll('ul li a').forEach((e) => {
    e.classList.remove('active');
  });
};
