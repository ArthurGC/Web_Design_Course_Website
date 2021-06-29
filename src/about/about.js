import { openCloseMenu, hambIcon, menuLinks } from './menu.js';

hambIcon.addEventListener('click', openCloseMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', openCloseMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event2) => {
    event2.preventDefault();
    document.querySelector(event2.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
