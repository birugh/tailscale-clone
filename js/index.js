const hamburger = document.getElementById('hamburger-nav');
const menu = document.getElementById('menu-nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})