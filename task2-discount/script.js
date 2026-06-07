const priceInput = document.getElementById('priceInput');
const discountInput = document.getElementById('discountInput');
const calculateButton = document.getElementById('calculateButton');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    if (priceInput.value.trim() === '' || discountInput.value.trim() === '') {
        resultDiv.textContent = 'Заполните все пустые поля';
    } else {
        const price = parseInt(priceInput.value);
        const discount = parseInt(discountInput.value);
        if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
            resultDiv.textContent = 'Введите корректные значения';
            return;
        }
        let result = price - (price * (discount / 100));
        resultDiv.textContent = `Итоговая цена: ${result.toFixed(2)} ₽`;
    }
});