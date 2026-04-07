const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

const progressFill = document.getElementById('progressFill');
const progressTextWhite = document.getElementById('progressTextWhite');
const accordeonHeads = document.getElementsByClassName("accordeon-head")
const accordeonOpened = new Array(accordeonHeads.length).fill(false);
let currentStep = 0;
const seconds = 3;
const totalSteps = 60 * seconds;

openModalBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    const interval = setInterval(() => {
        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
        
        progressFill.style.width = progress + '%';
        progressTextWhite.style.width = progress + '%';
        
        if (currentStep >= totalSteps) {
            clearInterval(interval);
        }
    }, 1000 / 60);
});

closeModalBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    currentStep = 0;
});

for (let i = 0; i < accordeonHeads.length; i++) {
    const accordeonHead = accordeonHeads[i]
        accordeonHead.addEventListener("click", (event) => {
        const nextEl = accordeonHead.nextElementSibling;
        accordeonOpened[i] = ! accordeonOpened[i];
        nextEl.style.display = accordeonOpened[i] ? "" : "none";
        accordeonHead.textContent = (accordeonOpened[i] ? "↓" : "→") + accordeonHead.textContent.substring(1);
    })
}