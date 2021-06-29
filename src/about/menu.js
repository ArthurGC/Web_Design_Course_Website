export const hambIcon = document.querySelector('.hamb');
export const menu = document.querySelector('.menu');
export const menuLinks = [...document.querySelectorAll('header nav ul li a')];

export const openCloseMenu = () => {
  menu.classList.toggle('active');
  hambIcon.classList.toggle('fa-bars');
  hambIcon.classList.toggle('fa-times');
};
