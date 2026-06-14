const users = [
    { id: 1, name: 'Алексей', email: 'alex@example.com', role: 'admin', active: true },
    { id: 2, name: 'Владислав', email: 'vlad@example.com', role: 'student', active: false },
    { id: 3, name: 'Олег', email: 'oleg@example.com', role: 'student', active: true },
    { id: 4, name: 'Иван', email: 'ivan@example.com', role: 'claude', active: true },
];

const container = document.getElementById('users');

function createCard(user) {
    const statusClass = user.active ? 'active' : 'inactive';
    const statusText = user.active ? 'Активен' : 'Неактивен';

    return `
    <div class="user-card ${statusClass}">
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Роль: ${user.role}</p>
      <span class="status">${statusText}</span>
    </div>
  `;
}

container.innerHTML = '';
users.forEach(user => {
    container.innerHTML += createCard(user);
});