const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const overlay = document.querySelector('#overlay');

function open() {
  overlay.classList.add('active');
}


function close() {
  overlay.classList.remove('active');
}

openBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);


overlay.addEventListener('click', (e) => {
  if (e.target === overlay) close(); 
});