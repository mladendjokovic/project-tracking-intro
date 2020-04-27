const navToggle = document.querySelector('.toggle-icon')
const hamburger = document.querySelector('.hamburger-icon');
const close = document.querySelector('.close-icon');
const nav = document.querySelector('ul');
navToggle.addEventListener('click', function() {
    nav.classList.toggle('show-nav');
    hamburger.classList.toggle('hide');
    close.classList.toggle('show');
});