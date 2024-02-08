import React, { useState, useEffect } from 'react';
import { choicesDescription } from '../../utils/chapters.utils';
import './MenuChapterTwo.css'; // Importer le fichier CSS
import SignInComponent from '../../auth/SignInComponent';
import { getPlayerNameInFirebase, updateChapterInFirestore, updateChoicesInFirestore, updatePlayerNameInFirestore } from '../../services/firebase.services';
import { signOut } from '../../auth/authService';

const MenuChapterTwo = ({ handleLogout, loading, gameState, chapter, startGame, restartGame }: any) => {
  const [playerName, setPlayerName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [choicesModalVisible, setChoicesModalVisible] = useState(false);
  const [choicesList, setChoicesList] = useState<any>([]);
  const [gameStarted, setGameStarted] = useState(gameState)

  const handlePress = async () => {
    const name = await getPlayerNameInFirebase();
    if (name) {
      startGame();
    } else {
      setModalVisible(true);
    }
  };

  const handleStartGame = () => {
    updateChoicesInFirestore([]);
    updatePlayerNameInFirestore(playerName);
    setModalVisible(false);
    handlePress();
  };


  const handlePressRestart = async () => {
    await localStorage.clear();
    localStorage.clear();
    updateChapterInFirestore(1);
    updateChoicesInFirestore([]);
    updatePlayerNameInFirestore(null);
    handlePress();
  };

  const handlePressChoices = async () => {

    setChoicesList(await choicesDescription());

    setChoicesModalVisible(true);
  };

  useEffect(() => {
    if (gameStarted === true) {
      // Code pour gérer l'autoplay ici
      const audio = document.getElementById('audio') as HTMLAudioElement;
      audio.play().catch(error => {
        // Gérer l'erreur liée à la lecture automatique
        console.error('Erreur de lecture automatique :', error);
      });
    }
  },);

  return (
    <div className="menu-container-ch2">
      {loading ? (
        // Afficher uniquement si loading est vrai
        <div>Loading...</div>
      ) : (
        // Afficher le contenu lorsque loading est faux
        <>
          <div className="logout-icon" style={{ color: 'black', }} onClick={() => handleLogout()}>
            <p>⟨ se déconnecter</p>
          </div>
          {!choicesModalVisible && (
            <>
              <h1>Seize décembre</h1>
              <h2>Chapitre 2: Aveuglés</h2>
              <div className="button-container">
                {chapter < 10 ? (
                  <button onClick={handlePress}>{chapter === 7 || !chapter ? 'Commencer' : 'Continuer'}</button>
                ) : (
                  <button>{`> CHAPITRE 3: bientôt disponible <`}</button>
                )}
                <button onClick={handlePressRestart}>Recommencer le jeu</button>
                <button onClick={handlePressChoices}>Mes choix</button>
              </div>
              {modalVisible && (
                <div className="modal-container">
                  <div className="modal">
                    <div className="modal-content">
                      <div className='modal-content-title'>
                        <h1>Entrez votre nom:</h1>
                        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                      </div>
                      <button onClick={handleStartGame}>Commencer</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Modale pour les choix */}
          {choicesModalVisible && (
            <div className='choices-container'>
              <h2>Mes choix</h2>
              <div className="choices-list-container">
                <ul className="choices-list">
                  {choicesList.map((choice: any, index: number) => (
                    <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                      <p>{choice.desc}</p>
                      <img src={choice.img} alt={`Choice ${index + 1}`} />
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => setChoicesModalVisible(false)}>Fermer</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MenuChapterTwo;
