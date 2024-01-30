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
          <div style={{color: 'black', fontWeight: 'bold' ,maxWidth: '50%', marginRight: 'auto', marginLeft: 'auto'}}>
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
