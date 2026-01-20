const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');
const body = document.body;

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
}

burgerMenu.addEventListener('click', toggleMenu);

headerNav.addEventListener('click', (e) => {
    if (e.target === headerNav) {
        toggleMenu();
    }
});

const headerLinks = document.querySelectorAll('.header-list a');
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 799) {
            toggleMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 799 && headerNav.classList.contains('active')) {
        toggleMenu();
    }
})