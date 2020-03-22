const burger = document.querySelector('.icon-burger');
const menu = document.querySelector('.menu__body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});