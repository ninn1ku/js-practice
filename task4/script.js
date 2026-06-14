const user = {
    id: 1,
    name: 'Алексей',
    age: 25,
    email: 'alex@example.com',
    role: 'student'
};


const { name, email, role } = user;

const result = document.getElementById('result');

result.innerHTML = `
<div class="card">
<h2>${name}</h2>
<p>Email: ${email}</p>
<p>Роль: ${role}</p>
</div>
`;

// старый способ
// const name = user.name;
// const email = user.email;
// const role = user.role;