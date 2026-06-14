const pwdInput = document.getElementById('pwdInput');
const pwdBtn = document.getElementById('pwdBtn');
const pwdResult = document.getElementById('pwdResult');

function checkPassword(pwd) {
    if (pwd.length < 8) {
        return 'Слабый пароль: минимум 8 символов';
    }

    let hasDigit = false;
    for (let i = 0; i < pwd.length; i++) {
        if (pwd[i] >= '0' && pwd[i] <= '9') {
            hasDigit = true;
        }
    }

    if (!hasDigit) {
        return 'Слабый пароль: нужна хотя бы одна цифра';
    }

    let hasLetter = false;
    for (let i = 0; i < pwd.length; i++) {
        if ((pwd[i] >= 'a' && pwd[i] <= 'z') ||
            (pwd[i] >= 'A' && pwd[i] <= 'Z')) {
            hasLetter = true;
        }
    }

    if (!hasLetter) {
        return 'Слабый пароль: нужна хотя бы одна буква';
    }

    return 'Пароль надёжный';
}

pwdBtn.addEventListener('click', () => {
    if (pwdInput.value === '') {
        pwdResult.textContent = 'Введите пароль';
        return;
    }

    pwdResult.textContent = checkPassword(pwdInput.value);
});