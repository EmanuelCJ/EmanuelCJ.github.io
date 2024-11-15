const button = document.getElementById('leer');
const content = document.getElementById('cv-contenedor');

button.addEventListener('click', () => {
    content.classList.toggle('cv-expandido');
    if (content.classList.contains('cv-expandido')) {
        button.textContent = 'Leer menos';
    } else {
        button.textContent = 'Leer más';
    }
});