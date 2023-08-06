const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    const dataLength = Number(validationInput.getAttribute('data-length'));
    const inputValueLength = validationInput.value.length;

    if (inputValueLength === dataLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});