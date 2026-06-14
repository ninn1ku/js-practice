let tasks = [];

const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');
const stats = document.querySelector('#stats');

function render() {
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <span>${task.title}</span>
      <div class="task-btns">
        <button class="done-btn" data-index="${index}">+</button>
        <button class="delete-btn" data-index="${index}">-</button>
      </div>
    `;

    list.append(li);
  });

  const completed = tasks.filter(t => t.completed).length;
  stats.textContent = `Всего: ${tasks.length} / Выполнено: ${completed}`;
}

addBtn.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  tasks.push({ title: taskInput.value.trim(), completed: false });
  taskInput.value = '';
  render();
});

list.addEventListener('click', (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains('done-btn')) {
    tasks[index].completed = !tasks[index].completed;
    render();
  }

  if (e.target.classList.contains('delete-btn')) {
    tasks.splice(index, 1);
    render();
  }
});

render();