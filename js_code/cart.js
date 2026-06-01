import { mockupProducts } from "./mockupData.js";

const cartContainer = document.querySelector(".cart-items");

function renderCart() {
    cartContainer.innerHTML = "";
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {

        const product = mockupProducts.find(p => Number(p.id) === Number(item.id));

        if (!product) return;

        const total = product.price * item.count;

        const row = document.createElement("div");
        row.classList.add("cart-item");

        row.innerHTML = `
            <div class="product">
                <img src="${product.image}" />
                <div>
                    <h4 class="product-title">${product.name}</h4>
                    <span class="product-category">${product.category}</span>
                </div>
            </div>

            <div class="button-container">
                <button class="delete-item" data-id="${product.id}">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#114B35" />
                    </svg>
                </button>
            </div>

            <div class="price">${product.price}L</div>

            <div class="qty">
                <button class="dec" data-id="${item.id}">-</button>
                <span>${item.count}</span>
                <button class="inc" data-id="${item.id}">+</button>
            </div>

            <div class="total">${total}.00L</div>
        `;

        cartContainer.appendChild(row);
    });
}

document.addEventListener("click", (e) => {

    const inc = e.target.closest(".inc");
    const dec = e.target.closest(".dec");
    const del = e.target.closest(".delete-item");

    if (!inc && !dec && !del) return;

    const button = inc || dec || del;
    const id = button.dataset.id;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (del) {

        cart = cart.filter(i => i.id !== id);

        localStorage.setItem("cart", JSON.stringify(cart));

        renderCart();

        return;
    }

    const item = cart.find(i => i.id === id);

    if (!item) return;

    if (inc) {
        item.count += 1;
    }

    if (dec) {

        item.count -= 1;

        if (item.count <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

    renderTotal();
});


function renderTotal() {
    const subtotalElement = document.querySelector(".subtotal-price");
    const shippingElement = document.querySelector(".shipping-price");
    const totalElement = document.querySelector(".total-price");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let subtotal = 0;

    cart.forEach(item => {

        const product = mockupProducts.find(
            p => p.id === Number(item.id)
        );

        if (!product) return;

        subtotal += Number(product.price) * item.count;

    });

    let shipping = subtotal > 250 ? 0 : 30;
    let total = Number(subtotal) + Number(shipping);

    subtotalElement.textContent = subtotal.toFixed(2) + 'L';
    shippingElement.textContent = shipping.toFixed(2) + 'L';
    totalElement.textContent = total.toFixed(2) + 'L';
}

renderCart();
renderTotal();
