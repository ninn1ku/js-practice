const btn = document.querySelector('#btn');
const title = document.querySelector('#title');

btn.addEventListener('click', () => {
  if (title) {
    title.textContent = 'Текст изменён!';
  }
});