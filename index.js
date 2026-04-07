/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});