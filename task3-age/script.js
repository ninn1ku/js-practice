const age = document.getElementById('ageIn');
const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
    if (age.value.trim() === '') {
        resultDiv.textContent = 'Введите возраст';
    }
    else {
        const ageValue = parseInt(age.value);
        if (ageValue < 0 || isNaN(ageValue)) {
            resultDiv.textContent = 'Введите корректный возраст';
        }
        else if (ageValue < 18) {
            resultDiv.textContent = `Доступ запрещён`;
        }
        else if (ageValue > 60) { resultDiv.textContent = `Льготная категория`; }
        else {
            resultDiv.textContent = `Доступ разрешён`;
        }
    }
    });