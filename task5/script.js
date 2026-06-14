const tasks = [
  { id: 1, title: 'Сделать HTML', completed: true },
  { id: 2, title: 'Сделать CSS', completed: false },
  { id: 3, title: 'Сделать JS', completed: false }
];

const taskList = document.getElementById('taskList');
const allBtn = document.getElementById('allBtn');
const doneBtn = document.getElementById('doneBtn');
const pendingBtn = document.getElementById('pendingBtn');

function render(items) {
  taskList.innerHTML = '';
  items.forEach(task => {
    const done = task.completed ? 'text-decoration: line-through' : '';
    taskList.innerHTML += `<li style="${done}">${task.title}</li>`;
  });
}

allBtn.addEventListener('click', () => {
  render(tasks);
});

doneBtn.addEventListener('click', () => {
  const done = tasks.filter(task => task.completed === true);
  render(done);
});

pendingBtn.addEventListener('click', () => {
  const pending = tasks.filter(task => task.completed === false);
  render(pending);
});

render(tasks);