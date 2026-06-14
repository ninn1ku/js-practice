let count = 0;
const countEl = document.querySelector('#count');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

