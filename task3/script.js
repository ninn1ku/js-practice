const users = [
  { id: 1, name: 'Анна' },
  { id: 2, name: 'Иван' },
  { id: 3, name: 'Олег' }
];

const idInput = document.getElementById('idInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  if (idInput.value === '') {
    result.textContent = 'Введите id';
    return;
  }

  const id = Number(idInput.value);

  const user = users.find(u => u.id === id);

  if (user) {
    result.textContent = `Найден: ${user.name}`;
  } else {
    result.textContent = 'Пользователь не найден';
  }
});