const users = [
  { name: 'Владислав', email: 'vlad@example.com', role: 'admin' },
  { name: 'Иван', email: 'ivan@example.com', role: 'student' },
  { name: 'Ярик', email: 'yarik@example.com', role: 'yarik' },
];

const tbody = document.querySelector('#tbody');

function render(users) {
  tbody.innerHTML = ''; 

  users.forEach(user => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = user.name;

    const tdEmail = document.createElement('td');
    tdEmail.textContent = user.email;

    const tdRole = document.createElement('td');
    tdRole.textContent = user.role;

    tr.append(tdName, tdEmail, tdRole); 
    tbody.append(tr);                   
  });
}

render(users);