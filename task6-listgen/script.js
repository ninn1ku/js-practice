const menu = ['Главная', 'Каталог', 'О нас', 'Контакты'];

function generateMenu(items) {
  let html = '';
  for (let i = 0; i < items.length; i++) {
    html += `<a href="#">${items[i]}</a>`;
  }
  return html;
}

const nav = document.getElementById('nav');
nav.innerHTML = generateMenu(menu);