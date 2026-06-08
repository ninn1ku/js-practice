const multBtn = document.getElementById('multBtn');
const multInput = document.getElementById('multInput');
const multResult = document.getElementById('multResult');

function generateTable(num) {
  let html = '';
  for (let i = 1; i <= 10; i++) {
    html += `<p>${num} × ${i} = ${num * i}</p>`;
  }
  return html;
}

multBtn.addEventListener('click', () => {
  if (multInput.value === '') {
    multResult.innerHTML = '<p>Введите число</p>';
    return;
  }

  const num = Number(multInput.value);
  multResult.innerHTML = generateTable(num);
});