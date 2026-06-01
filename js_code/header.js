function scrollMenu() {
    const headerNav = document.querySelector('.header_nav');
    const scroll = document.documentElement.scrollTop;

    if (scroll >= 50) {
        headerNav.classList.add("down");
    } else {
        headerNav.classList.remove("down");
    }
}

document.addEventListener('scroll', scrollMenu);