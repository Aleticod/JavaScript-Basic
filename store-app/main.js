// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

const $ = (selector) => document.querySelector(selector);

//const mainContainer = $('body');
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarIcon = $('.navbar-shopping-cart');
const productDetail = $('.product-detail');


// menuEmail.addEventListener('click', toggleDesktopMenu);
// menuHamIcon.addEventListener('click', toggleMobileMenu);

// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu() {
//     mobileMenu.classList.toggle('inactive');
// }

//mainContainer.addEventListener('click', closeMenus);
menuEmail.addEventListener('click', () => {toggleMenu(desktopMenu)});
menuHamIcon.addEventListener('click', toggleMobileMenu);
//menuCarIcon.addEventListener('click', () => {toggleMenu(productDetail)});
menuCarIcon.addEventListener('click', toggleCarAside);

function closeMenus() {
    if (!desktopMenu.classList.contains('inactive')) {
        toggleMenu(desktopMenu);
    }

    if (!mobileMenu.classList.contains('inactive')) {
        toggleMenu(mobileMenu);
    }

    if (!productDetail.classList.contains('inactive')) {
        toggleMenu(productDetail);
    }
}

function toggleMenu(menu) {
    menu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        toggleMenu(mobileMenu);
    }

    toggleMenu(productDetail);
}

function toggleMobileMenu() {
    const isProductDetailClose = productDetail.classList.contains('inactive');

    if (!isProductDetailClose) {
        toggleMenu(productDetail);
    }

    toggleMenu(mobileMenu);
}