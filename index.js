const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

const progressFill = document.getElementById('progressFill');
const progressTextWhite = document.getElementById('progressTextWhite');

openModalBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

const progress = 45;

progressFill.style.width = progress + '%';
progressTextWhite.style.width = progress + '%';