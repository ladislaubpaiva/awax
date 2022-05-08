const btnOpen = document.querySelector('.bx-menu');
const btnClose = document.querySelector('.bx-x');
const nav = document.querySelector('.menu nav');

// || Events
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

document.querySelectorAll('.banner .slider-pointers .pointer').forEach((element) => {
  element.addEventListener('click', (e) => {
    document.querySelectorAll('.banner .slider-pointers .pointer').forEach((el) => {
      el.classList.remove('active');
    });
    const key = e.currentTarget.getAttribute('data-slide');
    switch (key) {
      case '1':
        document.querySelector('.banner .sliders').style.marginLeft = '0';
        e.currentTarget.classList.add('active');
        break;
      case '2':
        document.querySelector('.banner .sliders').style.marginLeft = '-100vw';
        e.currentTarget.classList.add('active');
        break;
      case '3':
        document.querySelector('.banner .sliders').style.marginLeft = '-200vw';
        e.currentTarget.classList.add('active');
        break;
    }
  });
});
