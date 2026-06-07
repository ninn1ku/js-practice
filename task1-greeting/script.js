const inputBox = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const resultDiv = document.getElementById('result');

greetButton.addEventListener('click', () => {
    if (inputBox.value.trim() === '') {
        resultDiv.textContent = 'Введите имя';
    } else {
        resultDiv.textContent = `Привет, ${inputBox.value.trim()}!`;
    }
});