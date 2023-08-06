const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('Всі поля повинні бути заповнені!');
    } else {
        const formDataObject = {
            email: emailValue,
            password: passwordValue,
        };

        console.log(formDataObject);
        loginForm.reset();
    }
});