const btn = document.querySelector('#btn');
const card = document.querySelector('#card');

btn.addEventListener('click', () => {
  card.classList.toggle('active'); 
  btn.textContent = card.classList.contains('active') ? 'Деактивировать' : 'Активировать';
});