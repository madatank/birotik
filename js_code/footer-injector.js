const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-top">
                    <div class="newsletter-block">
                        <h2>Avem cel mai cool newsletter &rarr;</h2>
                        <div class="email-form">
                            <input type="email" placeholder="Scrie E-Mailul, Reducerile Ard Repede..." />
                            <button>&#8594;</button>
                        </div>
                        <div class="newsletter-checkbox">
                            <input type="checkbox" id="consent" />
                            <label for="consent">
                                Aplicând pentru Newsletter, accept Termenii și Condițiile Birotik.md și
                                accept să primesc e-mailuri comerciale.
                            </label>
                        </div>
                    </div>

                    <div class="nav-columns">
                        <nav class="nav-column" aria-label="Despre Noi">
                            <h3>Despre Noi</h3>
                            <ul>
                                <li><a href="categories.html">Categorii</a></li>
                                <li><a href="#">Oferte</a></li>
                                <li><a href="#">Reduceri</a></li>
                                <li><a href="about.html">Despre Noi</a></li>
                                <li><a href="#">Termeni Și Condiții</a></li>
                            </ul>
                        </nav>

                        <nav class="nav-column" aria-label="Resurse">
                            <h3>Resurse</h3>
                            <ul>
                                <li><a href="#">Comenzi &amp; livrare</a></li>
                                <li><a href="#">Rambursare</a></li>
                                <li><a href="#">Întrebări Frecvente</a></li>
                                <li><a href="#">Date de contact</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
                
                <div class="footer-bottom">
                    <div class="icons">
                        <a href="#" class="iconface"><img src="assets/svg/instagram.svg" alt="instagram"></a>
                        <a href="#" class="iconface"><img src="assets/svg/facebook.svg" alt="facebook"></a>
                        <a href="#" class="iconface"><img src="assets/svg/pinterest.svg" alt="pinterest"></a>
                        <a href="#" class="iconface"><img src="assets/svg/tiktok.svg" alt="tiktok"></a>
                    </div>
                    <div class="copyright">
                        <img src="assets/svg/copyright.svg">
                        <span class="copyright-text">2026 Birotik.md. Toate Drepturile Rezervate.</span>
                    </div>
                </div>
            </div>
        </footer>
        `;

document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.querySelector(".footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});