document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector(".header-container");
    const cartProducts = JSON.parse(localStorage.getItem("cart"));

    const headerHTML = `
    <header class="header">
        <div class="header_top">
            <p class="header_top_text">
                Livrare gratuită de la 250 de lei!
            </p>
        </div>
        <div class="container">
            <nav class="header_nav">
                <div class="header_logo">
                    <a href="index.html" class="header_logo_link">
                        <img src="assets/svg/LOGO.svg">
                    </a>
                </div>
                <ul class="header_nav_list">
                    <li class="header_nav_item"><a href="404.html" class="header_nav_link"><img src="assets/svg/search.svg"></a>
                    </li>
                    <li class="header_nav_item"><a href="404.html" class="header_nav_link"><img src="assets/svg/user.svg"></a>
                    </li>
                    <li class="header_nav_item"><a href="404.html" class="header_nav_link"><img
                                src="assets/svg/favorite.svg"></a></li>
                    <li class="header_nav_item"><a href="cart.html" class="header_nav_link"><span class="badge">${cartProducts?.length || 0}</span><img src="assets/svg/shop.svg"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>`;


    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});