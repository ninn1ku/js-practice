const tasks = ['Сделать HTML', 'Сделать CSS', 'Сделать JS', 'Сдать задание'];

const list = document.querySelector('#list');

tasks.forEach(task => {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = task;

  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click', () => {
    li.remove(); 
  });

  li.append(span, btn);
  list.append(li);
});