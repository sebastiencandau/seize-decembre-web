// App.tsx
import React, { useState, useEffect } from 'react';
import MenuChapterOne from './views/Menu/MenuChapterOne';
import Conversation from './views/Conversation/Conversation';
import { narativeIndicationsForChapter } from './utils/chapters.utils';
import NarativeScreen from './components/NarativeScreen';
import SignInComponent from './auth/SignInComponent';
import { Button } from 'react-bootstrap';
import { UserData } from './interfaces/user.interface';
import { getChapterInFirebase, getChoicesInFirebase, getPlayerNameInFirebase, getUserId, updateChapterInFirestore, updateChoicesInFirestore } from './services/firebase.services';
import { database } from './auth/firebaseConfig';
import { json } from 'stream/consumers';
import { ClipLoader } from 'react-spinners';

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
    if (!fetchedChapter) {
      console.log('GROSCACA');
      startGameToZero();
    } else {
      setChapter(fetchedChapter);
      setIndicationState(true);
    }
    setLoading(false);
  };

  const startConversation = async () => {
    setLoading(true);

    setIndicationState(false);
    const fetchedChapter = await getChapterInFirebase();
    localStorage.setItem('chapter', JSON.stringify(fetchedChapter!));
    setChapter(fetchedChapter!);

    const fetchedChoices = await getChoicesInFirebase();
    localStorage.setItem('choices', JSON.stringify(fetchedChoices));

    const fetchedPlayerName = await getPlayerNameInFirebase();
    localStorage.setItem('playerName', JSON.stringify(fetchedPlayerName));
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
    updateChapterInFirestore(1);
    localStorage.setItem('chapter', "1");
    setChapter(1);
    startGame();
    setLoading(false);
  };

  const fetchUserData = async () => {
    setLoading(true);
    if (!localStorage.getItem('user')) {
      const userId = getUserId();
      console.log(userId);

      if (userId) {
        try {
          const userDoc = await database.collection('users').doc(userId).get();

          if (userDoc.exists) {
            const fetchedUserData = userDoc.data() as UserData;
            localStorage.setItem('user', JSON.stringify(fetchedUserData));
            setUser(fetchedUserData);
          } else {
            console.log("Utilisateur non trouvé dans la base de données.");
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
              setChapter(await getChapterInFirebase())
              setStarted(true)}}>Jouer</button>}
          </div>
        )
      }
      {
        started &&
        <>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <ClipLoader color="#000" loading={loading} size={35} />
            </div>
          )}
          {started && !loading && (
            <>
              {indicationsState ? (
                <div>
                  <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop />
                  <NarativeScreen startConversation={startConversation} currentIndications={narativeIndicationsForChapter(chapter!)!} />
                </div>
              ) : !chapterStarted && (chapter === undefined || (chapter >= 1 && chapter <= 6) || chapter === 999) ? (
                <div>
                  <audio autoPlay src={require('./assets/musics/max_and_chloe.mp3')} id="audio" loop />
                  <MenuChapterOne gameState={gameStarted} chapter={chapter} startGame={startGame} />
                </div>
              ) : (
                <Conversation setGameState={setGameStarted} chapter={chapter!} stopChapter={stopChapter} playerName={localStorage.getItem('playerName')!} />
              )}
            </>
          )}
        </>
      }
    </div>
  );
};

export default App;
