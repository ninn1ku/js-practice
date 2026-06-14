const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
  if (input.value.trim() === '') return; 

  const li = document.createElement('li'); 
  li.textContent = input.value;            
  list.append(li);                         
  input.value = '';                        
});