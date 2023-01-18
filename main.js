// Ventanas
const ventanas = [];
function AddVentana(wind) {
    if (!ventanas.includes(wind)) {
        ventanas.push(wind);
    }
}

function CloseOtherWindows(wind) {
    for (let elem of ventanas){
        if (elem != wind) {
            if (!elem.classList.contains("inactive")){
                elem.classList.toggle("inactive");
            }
        }
    }
}

// Navbar MenuDesktop
const menuEmail =  document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    AddVentana(menuDesktop);
    CloseOtherWindows(menuDesktop);
    menuDesktop.classList.toggle("inactive");
}

// Navbar MobileMenu
const mobileMenuButton =  document.querySelector(".navbar-mobilemenu");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile() {
    AddVentana(mobileMenu);
    CloseOtherWindows(mobileMenu);
    mobileMenu.classList.toggle("inactive");
}

// NavBar Carrito de Compras
const btn_carritoCompras =  document.querySelector(".btn_shopping_cart");
const panel_carritoCompras = document.querySelector(".cart");

btn_carritoCompras.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    AddVentana(panel_carritoCompras);
    CloseOtherWindows(panel_carritoCompras);
    panel_carritoCompras.classList.toggle("inactive");



}

// Lista de productos
const productList = [];

productList.push({
    name: "Bike",
    price: 300,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "PC",
    price: 1200.00,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//Extraer html card
const templateProductCard = document.querySelector(".product-card");
const container_products = document.querySelector(".cards-container");
//console.log(templateProductCard.outerHTML)
//container_products.removeChild(templateProductCard);
function ActualizarProductos() {

    container_products.innerHTML = "";
    
    for (prod of productList){
        let productCard = templateProductCard.innerHTML;
        productCard = productCard.replace("./logos/logo_yard_sale.svg", prod.img);
        productCard = productCard.replace("---price", prod.price);
        productCard = productCard.replace("---name", prod.name);
        
        let elem = document.createElement("div");
        elem.classList.add("product-card");
        elem.innerHTML = productCard;
        container_products.appendChild(elem);
    }
}
    