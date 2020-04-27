const hamburger = document.querySelector('.hamburger-icon');
const close = document.querySelector('.close-icon');
const nav = document.querySelector('ul');
hamburger.addEventListener('click', function() {
    nav.classList.toggle('show-nav');
});