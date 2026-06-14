const user = {
  id: 1,
  name: 'Алексей',
  age: 25,
  email: 'alex@example.com',
  role: 'student'
};

const profile = document.getElementById('profile');

profile.innerHTML = `
  <div class="profile-card">
    <h2>${user.name}</h2>
    <p>ID: ${user.id}</p>
    <p>Возраст: ${user.age}</p>
    <p>Email: ${user.email}</p>
    <p>Роль: ${user.role}</p>
  </div>
`;