const navToggle = document.querySelector('.nav-toggle');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
let nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visible');
});