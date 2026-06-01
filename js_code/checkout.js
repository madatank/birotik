import { mockupProducts } from "./mockupData.js";


function renderTotal() {
    const subtotalElement = document.querySelector(".subtotal-price");
    const discountElement = document.querySelector(".discount");
    const totalElement = document.querySelector(".total-price");
    const buttonPriceElement = document.querySelector(".button-price");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const promoCod = localStorage.getItem("promoCod");

    console.log(promoCod);

    let subtotal = 0;

    cart.forEach(item => {
        const product = mockupProducts.find(
            p => p.id === Number(item.id)
        );

        if (!product) return;
        subtotal += Number(product.price) * item.count;
    });

    let discount = promoCod === "nota 10" ? 50 : 0;
    let shipping = subtotal > 250 ? 0 : 30;
    subtotal += shipping;
    let total = Number(subtotal) - discount;

    subtotalElement.textContent = subtotal.toFixed(2) + 'L';
    discountElement.textContent = discount.toFixed(2) + 'L';
    totalElement.textContent = total.toFixed(2) + 'L';
    buttonPriceElement.textContent = total.toFixed(2) + 'L';
}

renderTotal();

function useDiscount(event) {
    event.preventDefault();
    const code = document.querySelector(".coupon-input").value;
    const promoCod = localStorage.getItem("promoCod");

    if (promoCod) return;

    localStorage.setItem("promoCod", code)

    renderTotal()
}

const useDiscountButton = document.querySelector(".use-discount");

useDiscountButton.addEventListener("click", useDiscount)

const checkoutForm = document.querySelector(".checkout");

checkoutForm.addEventListener("submit", function (event) {

    event.preventDefault();

    localStorage.removeItem("cart");
    localStorage.removeItem("promoCod");
    window.location.replace("./success.html");
})
