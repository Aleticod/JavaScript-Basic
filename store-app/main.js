// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');


// menuEmail.addEventListener('click', toggleDesktopMenu);
// menuHamIcon.addEventListener('click', toggleMobileMenu);

// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu() {
//     mobileMenu.classList.toggle('inactive');
// }

menuEmail.addEventListener('click', () => {toggleMenu(desktopMenu)});
menuHamIcon.addEventListener('click', () => {toggleMenu(mobileMenu)});

function toggleMenu(menu) {
    menu.classList.toggle('inactive');
}