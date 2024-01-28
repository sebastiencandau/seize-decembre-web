import React, { useState, useEffect } from 'react';
import { choicesDescription } from '../../utils/chapters.utils';
import './MenuChapterOne.css'; // Importer le fichier CSS

const MenuChapterOne = ({gameState, chapter, startGame, restartGame }: any) => {
  const [playerName, setPlayerName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [choicesModalVisible, setChoicesModalVisible] = useState(false);
  const [choicesList, setChoicesList] = useState<any>([]);
  const [gameStarted, setGameStarted] = useState(gameState)

  const handlePress = () => {
    console.log('test');
    if (localStorage.getItem('playerName')) {
      startGame();
    } else {
      setModalVisible(true);
    }
  };

  const handleStartGame = () => {
    localStorage.setItem('choices', JSON.stringify([]));
    localStorage.setItem('playerName', playerName);
    setModalVisible(false);
    handlePress();
  };


  const handlePressRestart = async () => {
    await localStorage.clear();
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

    <div className="menu-container">
      {
        !gameStarted && (
          <div>
            <h1>Seize décembre</h1>
            <button onClick={() => setGameStarted(true)}>Jouer</button>
          </div>
        ) ||
        !choicesModalVisible && (
          <>
            <h1>Seize décembre</h1>
            <h2>Chapitre 1: Lucie</h2>
            <div className="button-container">
              {
                (chapter < 6 || chapter === 999) &&
                <button onClick={handlePress}>{chapter === 1 || chapter === undefined ? 'Commencer' : 'Continuer'}</button>
                || <button onClick={handlePress}>{`> CHAPITRE 2 <`}</button>
              }

              <button onClick={handlePressRestart}>Recommencer le chapitre</button>
              {chapter === 6 &&
                <button onClick={handlePressChoices}>Mes choix</button>
              }
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
        )
      }


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

    </div>
  );
};

export default MenuChapterOne;
