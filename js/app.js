let menu = document.querySelector(".btn_menu");
let closeMenu = document.querySelector(".btn_close");
let list = document.querySelector(".list");
let overlay = document.querySelector(".overlay");

//cart funciton
let cart = document.querySelector(".Cart");
let btnCart = document.querySelector(".btn_cart");

btnCart.addEventListener("click", function () {
    cart.classList.toggle("active")
})
menu.addEventListener("click", function () {
    list.classList.add("show");
    closeMenu.classList.add("show");
    menu.classList.add("hide")
    overlay.classList.add("active")
});
closeMenu.addEventListener("click", function () {
    list.classList.remove("show");
    closeMenu.classList.remove("show");
    menu.classList.remove("hide");
    overlay.classList.remove("active");
})
//input quantity:
let inputQuantity = document.querySelector("#quantity");
//function for the minus and plus buttons:
function add() {
    inputQuantity.value++;
}
function minus() {
    if (inputQuantity.value <= 0) {
        inputQuantity.value = 0;
    } else {
        inputQuantity.value--;
    }
}
//add product to the cart:
let addbutton = document.getElementById("addToCart");
let empytcart = document.getElementById("one");
let fullcart = document.getElementById("two");
let shoppingStatus = document.querySelector(".shopping");
let prix = document.querySelector(".prix");
addbutton.addEventListener("click", function () {
    if (inputQuantity.value === "0") {
        fullcart.style.display = "none";
        empytcart.style.display="grid"
    } else {
        fullcart.style.display = "grid";
        empytcart.style.display = "none";
        prix.innerHTML = `<p class="pricemultipleperquantity">$125.00 x <span class="quantityinCart">${inputQuantity.value}</span></p>
        <p>$${125.00 * inputQuantity.value}`;
        shoppingStatus.setAttribute("data-icon",inputQuantity.value)
    }
})
//delelet from the cart:
let deletebutton = document.querySelector(".delete");
deletebutton.addEventListener("click", function () {
    fullcart.style.display = "none";
    empytcart.style.display = "grid";
    shoppingStatus.setAttribute("data-icon",0);
})