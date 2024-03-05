// script.js

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const chapter = parseInt(localStorage.getItem('chapter'));

    if (user && chapter === 9) {
        // L'utilisateur est connecté et est au chapitre 9, rien à faire
    } else {
        // Redirection vers la page troll ou autre action que vous souhaitez
        window.location.href = 'page_troll.html';
    }
});
