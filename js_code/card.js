import { mockupProducts } from "./mockupData.js";

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const minInput = document.getElementById("minPrice");
const maxInput = document.getElementById("maxPrice");

const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");

rangeMin.addEventListener("input", () => {
    if (+rangeMin.value >= +rangeMax.value) {
        rangeMin.value = rangeMax.value - 1;
    }

    minInput.value = rangeMin.value;
});

rangeMax.addEventListener("input", () => {
    if (+rangeMax.value <= +rangeMin.value) {
        rangeMax.value = +rangeMin.value + 1;
    }

    maxInput.value = rangeMax.value;
});

minInput.addEventListener("input", () => {
    rangeMin.value = minInput.value;
});

maxInput.addEventListener("input", () => {
    rangeMax.value = maxInput.value;
});

const productsContainer = document.querySelector(".products-cards-container");
const minPriceInput = document.querySelector("#rangeMin");
const maxPriceInput = document.querySelector("#rangeMax");
const applyButton = document.querySelector(".apply-btn");
const sortSelect = document.getElementById("sort");

function renderProducts(products) {
    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = "<p>Nu există produse.</p>";
        return;
    }

    products.forEach(product => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
                    <div class="product-card">
                    <img class="product-card-image" src="${product.image}" alt="${product.name}"/>
                    <p class="product-card-category">${product.category}</p>
                    <p class="product-card-name"> ${product.name}</p>
                    <p class="product-card-price">${product.price}L</p>
                                        <button class="product-card-button" data-id=${product.id}>Adaugă</button>
                    </div >
            `;

        productsContainer.appendChild(card);
    });
}

function filterProducts() {
    const minPrice = Number(minPriceInput.value) || 0;
    const maxPrice = Number(maxPriceInput.value) || Infinity;
    const sortValue = document.getElementById("sort").value;

    let filtered = mockupProducts.filter(product => {

        return Number(product.price) >= minPrice &&
            Number(product.price) <= maxPrice;

    });

    switch (sortValue) {

        case "relevance":
            filtered.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "price-asc":
            filtered.sort((a, b) =>
                Number(a.price) - Number(b.price)
            );
            break;

        case "price-desc":
            filtered.sort((a, b) =>
                Number(b.price) - Number(a.price)
            );
            break;

        case "newest":
            filtered.sort((a, b) =>
                b.id - a.id
            );
            break;
    }

    renderProducts(filtered);
}
applyButton.addEventListener("click", filterProducts)
sortSelect.addEventListener("change", filterProducts);

renderProducts(mockupProducts);


function addToCart(productId) {

    const cart = getCart();

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        cart.push({
            id: productId,
            count: 1
        });
    }

    saveCart(cart);
}

function updateCartBadge() {
    const badge = document.querySelector(".badge");

    const cart = getCart();

    const total = cart.reduce((acc, item) => {
        return acc + item.count;
    }, 0);

    badge.innerHTML = total;
}

document.addEventListener("click", (e) => {

    const button = e.target.closest(".product-card-button");

    if (!button) return;

    const id = button.dataset.id;
    updateCartBadge();
    addToCart(id);
});