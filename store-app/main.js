// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

const $ = (selector) => document.querySelector(selector);

//const mainContainer = $('body');
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarIcon = $('.navbar-shopping-cart');
const shoppingCartContainer = $('#shoppingCartContainer');
const cardsContainer = $('.cards-container');
const productDetailContainer = $('#product-detail');
const productDetailClose = $('.product-detail-close');


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
//menuCarIcon.addEventListener('click', () => {toggleMenu(shoppingCartContainer)});
menuCarIcon.addEventListener('click', toggleCarAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function closeMenus() {
    if (!desktopMenu.classList.contains('inactive')) {
        toggleMenu(desktopMenu);
    }

    if (!mobileMenu.classList.contains('inactive')) {
        toggleMenu(mobileMenu);
    }

    if (!shoppingCartContainer.classList.contains('inactive')) {
        toggleMenu(shoppingCartContainer);
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

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        toggleMenu(productDetailContainer);
    }

    toggleMenu(shoppingCartContainer);
}

function toggleMobileMenu() {
    const isProductDetailClose = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        toggleMenu(shoppingCartContainer);
    }

    closeProductDetailAside();
    
    toggleMenu(mobileMenu);
}

function openProductDetailAside () {
    productDetailContainer.classList.remove('inactive');

    const isProductDetailClose = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        toggleMenu(shoppingCartContainer);
    }  
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
}

// Main container

const productList = [];
productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Television',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Television',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts (arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        // img.src = product.image;
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);