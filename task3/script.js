const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#nameInput').value.trim();
  const email = document.querySelector('#emailInput').value.trim();
  const pwd = document.querySelector('#pwdInput').value.trim();

  if (name === '') { result.textContent = 'Введите имя'; return; }
  if (email === '') { result.textContent = 'Введите email'; return; }
  if (pwd === '') { result.textContent = 'Введите пароль'; return; }

  result.textContent = `Зарегистрирован: ${name}, ${email}`;
});