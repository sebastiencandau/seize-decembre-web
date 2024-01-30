// App.tsx
import React, { useState, useEffect } from 'react';
import MenuChapterOne from './views/Menu/MenuChapterOne';
import Conversation from './views/Conversation/Conversation';
import { narativeIndicationsForChapter } from './utils/chapters.utils';
import NarativeScreen from './components/NarativeScreen';

const App: React.FC = () => {
  const [chapter, setChapter] = useState<number>(localStorage.getItem('chapter') ? JSON.parse(localStorage.getItem('chapter')!) : 1);
  const [chapterStarted, setChapterStarted] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [indicationsState, setIndicationState] = useState(false);

  const startGame = () => {
    if (!localStorage.getItem('chapter')) {
      startGameToZero();
    } else {
      setIndicationState(true);
    }
  };

  const startConversation = () => {
    setIndicationState(false);
    const fetchedChapter = localStorage.getItem('chapter');
    setChapter(JSON.parse(fetchedChapter!));
    setChapterStarted(true);
  };

  const stopChapter = () => {
    setChapter(JSON.parse(localStorage.getItem('chapter')!))
    setChapterStarted(false);
    setGameStarted(true);
  };

  const startGameToZero = async () => {
    localStorage.setItem('chapter', "1");
    setChapter(1);
    startGame();
  };


  // baisse progressive du volume de la musique lors du lancement du chapitre
  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement | null;

    if(chapterStarted === true){
      if (audio) {
        // Initial volume set to 1 (full volume)
        audio.volume = 1;
  
        // Fade out the audio during component unmount or when chapter changes
        const fadeOutInterval = setInterval(() => {
          if (audio.volume > 0.1) {
            audio.volume -= 0.1;
          } else {
            clearInterval(fadeOutInterval);
            audio.pause(); // Pause the audio once faded out
          }
        }, 500);
  
        // Clear the interval when the component unmounts or when chapter changes
        return () => clearInterval(fadeOutInterval);
      }
    } else {
      audio!.volume = 1;
    }
  
  }, [chapterStarted]);

  // Render based on conditions
  return (
    <div>
      {indicationsState ? (
        <div>
          <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop />
          <NarativeScreen startConversation={startConversation} currentIndications={narativeIndicationsForChapter(chapter)!} />
        </div>
      ) : !chapterStarted && (chapter === undefined || (chapter >= 1 && chapter <= 6) || chapter === 999) ? (
        <div>
          { (chapter <6 || chapter === 999) ? <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop /> :
          <audio autoPlay src={require('./assets/musics/chapter_one_ending_music.mp3')} id="audio" loop />
          }
          <MenuChapterOne gameState={gameStarted} chapter={chapter} startGame={startGame} />
        </div>
      ) : (
        <div>
          { (chapter <6 || chapter === 999) ? <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop /> :
          <audio autoPlay src={require('./assets/musics/chapter_one_ending_music.mp3')} id="audio" loop />
          }
        <Conversation setGameState={setGameStarted} chapter={chapter} stopChapter={stopChapter} playerName={localStorage.getItem('playerName')!} />
        </div>
      )}
    </div>
  );
};

export default App;
