const toggleBtn = document.getElementById('toggleBtn');
const toggleBlock = document.getElementById('toggleBlock');

let isOn = false;

toggleBtn.addEventListener('click', () => {
    isOn = !isOn;

    if (isOn) {
        toggleBlock.textContent = 'Включено';
        toggleBlock.classList.remove('toggle-off');
        toggleBlock.classList.add('toggle-on');
    } else {
        toggleBlock.textContent = 'Выключено';
        toggleBlock.classList.remove('toggle-on');
        toggleBlock.classList.add('toggle-off');
    }
})