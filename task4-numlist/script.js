const numbers = [];

const numInput = document.getElementById('numInput');
const addBtn = document.getElementById('addBtn');
const numList = document.getElementById('numList');
const sumResult = document.getElementById('sumResult');
const avgResult = document.getElementById('avgResult');

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getAvg(arr) {
    return getSum(arr) / arr.length;
}

function render() {
    numList.innerHTML = '';
    for (let i = 0; i < numbers.length; i++) {
        numList.innerHTML += `<li>${numbers[i]}</li>`;
    }

    sumResult.textContent = `Сумма: ${getSum(numbers)}`;
    avgResult.textContent = `Среднее: ${getAvg(numbers)}`;
}

addBtn.addEventListener('click', () => {
    if (numInput.value === '') {
        return;
    }

    const num = Number(numInput.value);
    numbers.push(num);
    numInput.value = '';
    render();
});