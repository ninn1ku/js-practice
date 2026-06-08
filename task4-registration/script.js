const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const password = document.getElementById("pwdInput");
const passwordConfirm = document.getElementById("pwdConfirm");
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener('click', (e) => {
    e.preventDefault();

    const _name = name.value.trim();
    const _email = email.value.trim();
    const _password = password.value.trim();
    const _passwordConfirm = passwordConfirm.value.trim();

    if (_name === '') {
        result.textContent = 'Введите имя';
        result.style.color = 'red';
        return;
    }
    if (_email === '') {
        result.textContent = 'Введите почту';
        result.style.color = 'red';
        return;
    }
    if (_password === '') {
        result.textContent = 'Введите пароль';
        result.style.color = 'red';
        return;
    }
    if (_password !== _passwordConfirm) {
        result.textContent = 'Пароли не совпадают';
        result.style.color = 'red';
        return;
    }

    result.textContent = 'Отправлено';  
    result.style.color = 'lime';
});
