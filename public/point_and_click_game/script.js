document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const chapter = parseInt(localStorage.getItem('chapter'));

    if (user && chapter === 8) {
        // Musique d’ambiance (bruits d’oiseaux)
        const ambiance = document.createElement('audio');
        ambiance.setAttribute('id', 'background-music');
        ambiance.setAttribute('autoplay', '');
        ambiance.setAttribute('loop', '');
        ambiance.volume = 0.1;
        ambiance.innerHTML = `
            <source src="assets/musics/pac_game_background.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        document.body.appendChild(ambiance);

        // Musique de fond initiale
        const bgMusic = document.createElement('audio');
        bgMusic.setAttribute('id', 'bg-music');
        bgMusic.setAttribute('autoplay', '');
        bgMusic.setAttribute('loop', '');
        bgMusic.volume = 0.1;
        bgMusic.innerHTML = `
            <source src="assets/musics/pac_game_bg_music.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        `;
        document.body.appendChild(bgMusic);

        const room0 = document.getElementById('room-0');
        const room1 = document.getElementById('room-1');
        const room2 = document.getElementById('room-2');

        const backButtons = document.querySelectorAll('.back-arrow');
        backButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                room1.style.display = 'none';
                room2.style.display = 'none';
                room0.style.display = 'block';
            });
        });

        // Accès depuis room 0
        const room0obj1 = document.getElementById('room-0-obj1');
        if (room0obj1) {
            room0obj1.addEventListener('click', () => {
                room0.style.display = 'none';
                room1.style.display = 'block';
            });
        }

        const room0obj2 = document.getElementById('room-0-obj2');
        if (room0obj2) {
            room0obj2.addEventListener('click', () => {
                room0.style.display = 'none';
                room2.style.display = 'block';
            });
        }

        /* -------------------- ROOM 1 -------------------- */
        const obj1Books = document.querySelectorAll('.obj1-book');
        const obj2Books = document.querySelectorAll('.obj2-book');
        const obj3Books = document.querySelectorAll('.obj3-book');

        obj1Books.forEach(book => {
            book.addEventListener('mouseover', () => book.style.color = 'black');
            book.addEventListener('mouseout', () => book.style.color = '');
        });

        obj2Books.forEach(book => {
            book.addEventListener('mouseover', () => book.style.color = 'black');
            book.addEventListener('mouseout', () => book.style.color = '');
        });

        obj3Books.forEach(book => {
            book.addEventListener('mouseover', () => book.style.color = 'white');
            book.addEventListener('mouseout', () => book.style.color = '');

            book.addEventListener('click', () => {
                const existingAudio = document.getElementById('bg-music');

                function playMusic(src, volume = 0.9) {
                    const audio = document.createElement('audio');
                    audio.setAttribute('id', 'bg-music');
                    audio.setAttribute('autoplay', '');
                    audio.setAttribute('loop', '');
                    audio.volume = volume;
                    audio.innerHTML = `
                        <source src="${src}" type="audio/mp3">
                        Your browser does not support the audio element.
                    `;
                    document.body.appendChild(audio);
                }

                if (existingAudio) {
                    const source = existingAudio.querySelector('source');
                    const isMelancholyPlaying = source && source.getAttribute('src').includes('pac_melancholy_hill.mp3');

                    existingAudio.pause();
                    existingAudio.remove();

                    if (isMelancholyPlaying) {
                        playMusic('assets/musics/pac_game_bg_music.mp3', 0.6);
                        return;
                    }
                }

                playMusic('assets/musics/pac_melancholy_hill.mp3', 0.9);
            });
        });

        /* -------------------- ROOM 2 -------------------- */
        const cds = document.querySelectorAll('.cd');
        const backpack = document.querySelector('.backpack-text');

        cds.forEach(cd => {
            cd.addEventListener('mouseover', () => cd.style.color = 'white');
            cd.addEventListener('mouseout', () => cd.style.color = '');
        });

        if (backpack) {
            backpack.addEventListener('mouseover', () => backpack.style.color = 'white');
            backpack.addEventListener('mouseout', () => backpack.style.color = '');
        }

    } else {
        window.location.href = 'page_troll.html';
    }
});
