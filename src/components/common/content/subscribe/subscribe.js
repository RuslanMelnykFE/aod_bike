const email = {
    value: '',
    error: null
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.subscribe__form');
    const input = form.querySelector('.input');

    form.addEventListener('submit', handleSubmitForm);
    input.addEventListener('keyup', changeInput);

    function handleSubmitForm(e) {
        e.preventDefault();
        if (!email.error) return;
        this.reset();
        input.classList.remove('input_focus');
        input.classList.remove('input_ok');
    }

    function changeInput(e) {
        e.preventDefault();
        email.value = this.value;
        (email.value.length !== 0) ? input.classList.add('input_focus') : input.classList.remove('input_focus');
        checkingError(this.value);
    }

    function checkingError(value) {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const test = value.length === 0 || emailRegExp.test(value);

        email.error = test;
        if (!test) {
            input.classList.add('input_error');
            input.classList.remove('input_ok');
        } else {
            input.classList.remove('input_error');
            input.classList.add('input_ok');
        }
    }
});