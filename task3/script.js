const users = [
  { id: 1, name: 'Владислав', email: 'vlad@example.com', role: 'admin', active: true },
  { id: 2, name: 'Иван', email: 'ivan@example.com', role: 'student', active: false },
  { id: 3, name: 'Ярик', email: 'yarik@example.com', role: 'admin', active: true },
  { id: 4, name: 'Дмитрий', email: 'dima@example.com', role: 'student', active: true },
  { id: 4, name: 'Георгий', email: 'george@example.com', role: 'teacher', active: false },
];


const active = users.filter(u => u.active === true);


const admins = users.filter(u => u.role === 'admin');


const emails = users.map(u => u.email);


const inactiveCount = users.filter(u => u.active === false).length;

const result = document.getElementById('result');

result.innerHTML = `
  <div class="block">
    <h3>Активные пользователи (${active.length})</h3>
    <ul>${active.map(u => `<li>${u.name}</li>`).join('')}</ul>
  </div>

  <div class="block">
    <h3>Администраторы (${admins.length})</h3>
    <ul>${admins.map(u => `<li>${u.name}</li>`).join('')}</ul>
  </div>

  <div class="block">
    <h3>Email-адреса</h3>
    <ul>${emails.map(e => `<li>${e}</li>`).join('')}</ul>
  </div>

  <div class="block">
    <h3>Неактивных пользователей: ${inactiveCount}</h3>
  </div>
`;