// script.js

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const chapter = parseInt(localStorage.getItem('chapter'));

    if (user && chapter === 8) {
        // L'utilisateur est connecté et est au chapitre 8

        // Charger la musique embiente (oiseaux)
        const audio = document.createElement('audio');
        audio.setAttribute('id', 'background-music');
        audio.setAttribute('autoplay', '');
        audio.setAttribute('loop', '');
        audio.volume = 0.1; // Volume réduit
        audio.innerHTML = `
            <source src="assets/musics/pac_game_background.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        document.body.appendChild(audio);

        // Charger la musique de fond
        const bgMusic = document.createElement('audio');
        bgMusic.setAttribute('id', 'bg-music');
        bgMusic.setAttribute('autoplay', '');
        bgMusic.setAttribute('loop', '');
        bgMusic.setAttribute('volume', '0.1'); // Volume réduit
        bgMusic.innerHTML = `
            <source src="assets/musics/pac_game_bg_music.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        document.body.appendChild(bgMusic);

        const backButton = document.querySelector('.back-arrow');
        backButton.addEventListener('click', () => {
            // Cacher la pièce actuelle et afficher la pièce 0
            room1.style.display = 'none';
            room0.style.display = 'block';
        });

        // Ajouter des gestionnaires d'événements pour le changement de pièce
        const room0obj1 = document.getElementById('room-0-obj1');
        const room0 = document.getElementById('room-0');
        const room1 = document.getElementById('room-1');
        const room2 = document.getElementById('room-2');
        // Ajoutez d'autres pièces si nécessaire

        room0obj1.addEventListener('click', () => {
            // Redirection vers la pièce 1
            room0.style.display = 'none';
            room1.style.display = 'block';
        });

        room2.addEventListener('click', () => {
            // Redirection vers la pièce 2
            room1.style.display = 'block';
            room2.style.display = 'none';
        });

    } else {
        // Redirection vers la page troll ou autre action que vous souhaitez
        window.location.href = 'page_troll.html';
    }
});

/*                                         ROOM 1                                */

const obj1Books = document.querySelectorAll('.obj1-book'); // livres étagère haut
const obj2Books = document.querySelectorAll('.obj2-book'); // livres étagère bas
const obj3Books = document.querySelectorAll('.obj3-book'); // Poste de musique
const musicBox = document.querySelector('.music-box');

// livres étagère bas
obj1Books.forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.color = 'black';
    });
    book.addEventListener('mouseout', () => {
        book.style.color = '';
    });
});

// livres étagères haut
obj2Books.forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.color = 'black';
    });

    book.addEventListener('mouseout', () => {
        book.style.color = '';
    });
});

// poste de musique
obj3Books.forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.color = 'white';
    });

    book.addEventListener('mouseout', () => {
        book.style.color = '';
    });

    book.addEventListener('click', () => {
        console.log('gros caca')
        // Supprimer l'élément existant dont l'ID est bg-music
        const existingAudio = document.getElementById('bg-music');
        if (existingAudio) {
            existingAudio.parentNode.removeChild(existingAudio);
        }
    
        // Charger la nouvelle musique ambiante (oiseaux)
        const audio = document.createElement('audio');
        audio.setAttribute('id', 'bg-music'); // Utiliser le même ID pour la nouvelle musique
        audio.setAttribute('autoplay', '');
        audio.volume = 0.9; // Volume réduit
        audio.innerHTML = `
            <source src="assets/musics/pac_melancholy_hill.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        document.body.appendChild(audio);
    });
});

