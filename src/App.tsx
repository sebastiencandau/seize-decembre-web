// App.tsx
import React, { useState, useEffect } from 'react';
import MenuChapterOne from './views/Menu/MenuChapterOne';
import Conversation from './views/Conversation/Conversation';
import { narativeIndicationsForChapter } from './utils/chapters.utils';
import NarativeScreen from './components/NarativeScreen';
import SignInComponent from './auth/SignInComponent';
import { Button } from 'react-bootstrap';
import { UserData } from './interfaces/user.interface';
import { getChapterInFirebase, getChoicesInFirebase, getPlayerNameInFirebase, getUserId, updateChapterInFirestore, updateChoicesInFirestore, updatePlayerNameInFirestore } from './services/firebase.services';
import { database } from './auth/firebaseConfig';
import { json } from 'stream/consumers';
import { ClipLoader } from 'react-spinners';
import { signOut } from './auth/authService';
import ChapterIntroduction from './components/ChapterIntroduction';
import { narrative } from './utils/chapterTwo/chapterTwoIntroduction.utils';

const App: React.FC = () => {
  const [chapter, setChapter] = useState<number | undefined>();
  const [chapterStarted, setChapterStarted] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [started, setStarted] = useState(false);
  const [indicationsState, setIndicationState] = useState(false);
  const [user, setUser] = useState<UserData | null>();
  const [loading, setLoading] = useState(false); // Added loading state

  const startGame = async () => {
    setLoading(true);
    const fetchedChapter = await getChapterInFirebase();
    console.log(fetchedChapter);
    if (!fetchedChapter) {
      startGameToZero();
    } else {
      setChapter(fetchedChapter);
      setIndicationState(true);
    }
    setLoading(false);
  };

  const startChapterTwo = async () => {
    setLoading(true);
    const fetchedChapter = await getChapterInFirebase();
    console.log(fetchedChapter);
    if (!fetchedChapter) {
      startGameToZero();
    } else {
      setChapter(fetchedChapter);
      setIndicationState(true);
    }
    setLoading(false);
  }

  const startConversation = async () => {
    setLoading(true);

    setIndicationState(false);
    const fetchedChapter = await getChapterInFirebase();
    localStorage.setItem('chapter', JSON.stringify(fetchedChapter!));
    setChapter(fetchedChapter!);

    const fetchedChoices = await getChoicesInFirebase();
    localStorage.setItem('choices', JSON.stringify(fetchedChoices));

    const fetchedPlayerName = await getPlayerNameInFirebase();
    localStorage.setItem('playerName', fetchedPlayerName!);
    setChapterStarted(true);

    setLoading(false);
  };

  const stopChapter = async () => {
    setChapter(await getChapterInFirebase())
    setChapterStarted(false);
    setGameStarted(true);
  };

  const startGameToZero = async () => {
    setLoading(true);
    setChapter(1);
    updateChapterInFirestore(1);
    startGame();
    setLoading(false);
  };

  const fetchUserData = async () => {
    setLoading(true);
    if (!localStorage.getItem('user')) {
      const userId = getUserId();
      if (userId) {
        try {
          const userDoc = await database.collection('users').doc(userId).get();

          if (userDoc.exists) {
            const fetchedUserData = userDoc.data() as UserData;
            localStorage.setItem('user', JSON.stringify(fetchedUserData));
            setUser(fetchedUserData);
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
        }
      }
    } else {
      setUser(JSON.parse(localStorage.getItem('user')!))
    }
    setLoading(false);
  };

useEffect(() => {
  const audio = document.getElementById('audio') as HTMLAudioElement | null;

  if (audio) {
    if (chapterStarted) {
      audio.volume = 1; // Rétablir le volume à 1 au cas où il était précédemment diminué

      // Fade out progressif
      const fadeOutInterval = setInterval(() => {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1;
        } else {
          clearInterval(fadeOutInterval);
          audio.pause();
        }
      }, 500);

      return () => clearInterval(fadeOutInterval);
    } else {
      // Si chapterStarted n'est pas true, maintenir le volume à 1
      audio.volume = 1;
    }
  }
}, [chapterStarted]);


const handleLogout = () => {
  // Call the signOut method to handle user logout
  signOut();
  // Clear localStorage
  localStorage.clear();
  // Close the logout modal
  setUser(undefined);
  setStarted(false);
  // Redirect or perform additional actions as needed
};
  

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={!started || loading ? 'menu-container' : undefined}>
      {
        !started && (
          <div style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', maxWidth: '50%', marginRight: 'auto', marginLeft: 'auto' }}>
            <h1>Seize décembre</h1>
            <p>{`Ce jeu narratif vous offre une immersion totale. Chaque choix que vous faites influence le cours de l'histoire, 
            façonnant ainsi votre propre voyage. Mais attention, chaque décision a des conséquences, alors 
            choisissez avec précaution !`}</p>
            <p>{`Pour vivre pleinement cette expérience immersive, nous vous recommandons de jouer sur un ordinateur 💻. 
            Installez-vous confortablement, éliminez toute distraction et laissez-vous emporter par l'histoire captivante qui 
            vous attend. Activez le son 🎧 pour profiter pleinement de l'ambiance sonore envoûtante et plongez-vous dans l'univers 
            du jeu.`}</p>
            <p>{`Préparez-vous à vivre des émotions intenses, à être surpris et à prendre des décisions difficiles. L'aventure 
            commence dès que vous appuyez sur "Jouer". Êtes-vous prêt à découvrir ce que le destin
             vous réserve ?`}</p>
            {!user ? <SignInComponent onSignIn={fetchUserData} /> : <button onClick={async () => {
              const fetchedChapter = await getChapterInFirebase();
              setChapter(fetchedChapter)
              const fetchedPlayerName = await getPlayerNameInFirebase();
              if(fetchedPlayerName){
                localStorage.setItem('playerName', fetchedPlayerName);
              }
              localStorage.setItem('chapter', JSON.stringify(fetchedChapter));
              setStarted(true)
            }}>Jouer</button>}
          </div>
        )
      }
      {
        started &&
        <>
          {started && (
            <>
              {indicationsState ? (
                <>
                  {chapter === 6 ? (
                    <>
                    <audio autoPlay src={require('./assets/musics/chapter_one_ending_music.mp3')} id="audio" loop />
                    <ChapterIntroduction setIndicationState={setIndicationState} setChapter={setChapter} currentIndications={narrative} chapter={chapter}/>

                    </>
                  ) :
                    (
                      <>
                        <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop />
                        <div>
                          <NarativeScreen startConversation={startConversation} currentIndications={narativeIndicationsForChapter(chapter!)!} />
                        </div>
                      </>
                    )}
                </>
              ) : !chapterStarted && (!chapter || (chapter >= 1 && chapter <= 6) || chapter === 999) ? (
                  <>
                    {(!chapter || (chapter >= 1 && chapter < 6) || chapter === 999) ? <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop /> :
                      <audio autoPlay src={require('./assets/musics/chapter_one_ending_music.mp3')} id="audio" loop />
                    }
                    {loading && (
                      <>
                        <div style={{ textAlign: 'center' }}>
                          <ClipLoader color="#000" loading={loading} size={35} />
                        </div>
                      </>
                    )}
                    <MenuChapterOne startChapterTwo={startChapterTwo} handleLogout={handleLogout} loading={loading} gameState={gameStarted} chapter={chapter} startGame={startGame} />
                  </>
              ) : chapterStarted && (
                <>
                  {(!chapter || (chapter >= 1 && chapter <= 6) || chapter === 999) ? <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop /> :
                    <audio autoPlay src={require('./assets/musics/chapter_one_ending_music.mp3')} id="audio" loop />
                  }
                  <Conversation setGameState={setGameStarted} chapter={chapter!} stopChapter={stopChapter} playerName={localStorage.getItem('playerName')!} />
                </>
              )}
            </>
          )}
        </>
      }
    </div>
  )

}


export default App;
