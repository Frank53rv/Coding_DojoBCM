document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like');
    const likeCounts = document.querySelectorAll('.actions span');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountSpan = button.previousElementSibling; // Selecciona el span de conteo de likes
            let currentLikes = parseInt(likeCountSpan.textContent.split(' ')[0]);
            currentLikes++;
            likeCountSpan.textContent = `${currentLikes} like(s)`;
        });
    });
});
