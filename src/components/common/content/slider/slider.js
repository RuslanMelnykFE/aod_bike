const sliderButton = document.querySelector('.slider__button');
const button = sliderButton.querySelectorAll('button');
const listItem = document.querySelectorAll('.slider__item');

let indexButton = 0;

sliderButton.addEventListener('click', selectionItem);

showItem(indexButton);

function showItem(value) {
    listItem.forEach((item, index) => {
        item.classList.remove('slider__item_active');
        if (index === value) {
            item.classList.add('slider__item_active');
            button[value].classList.add('slider__button_active');
        }
    });
}

function getIndexButton() {
    let activeClass = null;
    button.forEach((item, index) => {
        activeClass = item.classList.contains('slider__button_active');
        if (activeClass) indexButton = index;
    });
}

function selectionItem({ target }) {
    const nodeName = target.nodeName;

    if (nodeName !== 'BUTTON') return;
    button.forEach(item => item.classList.remove('slider__button_active'));
    target.classList.add('slider__button_active');
    getIndexButton();
    showItem(indexButton);
}
