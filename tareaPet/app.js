
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    if (loginButton.textContent === 'Iniciar sesión') {
        loginButton.textContent = 'Cerrar sesión';
    } else {
        loginButton.textContent = 'Iniciar sesión';
    }
});


const addDefinitionButton = document.getElementById('addDefinitionButton');
addDefinitionButton.addEventListener('click', () => {
    document.getElementById('addDefinitionDiv').style.display = 'none';
});


const likeButtons = document.querySelectorAll('.likeButton');

likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const title = button.closest('.definition').querySelector('h3').textContent;
        const likesSpan = button.closest('.definition').querySelector('.likes');
        let likesCount = parseInt(likesSpan.textContent);
        likesCount++;
        likesSpan.textContent = likesCount;
        alert('Te gustó la definición: ' + title);
        button.textContent = `${likesCount} me gusta`;
    });
});