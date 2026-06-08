function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
    if (b === 0) return 'Ошибка деление на ноль';
    return a / b;
}

function calculate(operator) {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const result = document.getElementById('calcResult');

    if (document.getElementById('num1').value === '' || document.getElementById('num2').value === '') {
        result.textContent = 'Введите два числа';
        return;
    }

    let answer;
    switch (operator) {
        case '+': answer = add(a, b); break;
        case '-': answer = sub(a, b); break;
        case '*': answer = mul(a, b); break;
        case '/': answer = div(a, b); break;
    }

    result.textContent = `Результат: ${answer}`;
}