const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  if (input.value === '') {
    output.textContent = 'Начните вводить...';
  } else {
    output.textContent = input.value;
  }
});