// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
