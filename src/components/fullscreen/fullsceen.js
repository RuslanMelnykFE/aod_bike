const ibg = document.querySelectorAll('.ibg');
const blockFullcreen = document.querySelector('.fullscreen');

const windowSize = {
    width: null,
    height: null
};

const getPaddingBottom = (width, height) => {
    ibg.forEach(item => {
        let img = item.querySelector('img');
        if (img) {
            blockFullcreen.style.paddingBottom = (width > height) ? `calc(${(height / width * 100)}% + 10px)` : '50%';
            img.style.height = (width > height) ? '100vh' : '100%';
        }
    });
};

const getWindowSize = () => {
    windowSize.width = window.innerWidth;
    windowSize.height = window.innerHeight;
    return getPaddingBottom(windowSize.width, windowSize.height);
};

window.onload = () => getWindowSize();
window.onresize = () => getWindowSize();