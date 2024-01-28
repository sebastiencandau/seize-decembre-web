import React, { useState, useEffect } from 'react';
import { choicesDescription } from '../../utils/chapters.utils';

const MenuChapterTwo = ({ changeChapter, startGame, chapter, restartGame }: any) => {
  const [playerName, setPlayerName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [restart, setRestart] = useState(false);
  const [choicesModalVisible, setChoicesModalVisible] = useState(false);
  const [choicesList, setChoicesList] = useState<any>([]);
  const [backgroundMusic, setBackgroundMusic] = useState<any>();

  const startMusic = async () => {
    if (chapter) {
      if (chapter === 6) {
        const sound = new Audio('https://example.com/chapter_one_ending_music.mp3');
        sound.play();
        setBackgroundMusic(sound);
      } else {
        const sound = new Audio('https://example.com/max_and_chloe.mp3');
        sound.play();
        setBackgroundMusic(sound);
      }
    }
  };

  useEffect(() => {
    startMusic();
  }, [chapter]);

  const handlePress = async () => {
    if (await localStorage.getItem('playerName')) {
      if (!restart) {
        startGame();
      } else {
        restartGame();
      }
    } else {
      setModalVisible(true);
    }
  };

  const handlePressRestart = async () => {
    await localStorage.clear();
    setRestart(true);
    handlePress();
  };

  const handleStartGame = async () => {
    backgroundMusic.stop();
    await localStorage.setItem('choices', JSON.stringify([]));
    await localStorage.setItem('playerName', playerName);
    setModalVisible(false);
    handlePress();
  };

  const handlePressChoices = async () => {
    const savedChoices = await localStorage.getItem('choices');
    if (savedChoices) {
      const choices = JSON.parse(savedChoices);
      setChoicesList(await choicesDescription());

      setChoicesModalVisible(true);
    }
  };

  return (
    <div>
      chapter !== 6 && (
        <div>
          <p>Seize décembre</p>
          <p>Chapitre 1: Lucie</p>
          <button onClick={handlePress}>{chapter === 1 || !chapter ? 'Commencer' : 'Continuer'}</button>
          <button onClick={handlePressRestart}>Recommencer le chapitre</button>
        </div>
      ) : (
        <div>
          <p>Seize décembre</p>
          <p>Chapitre 1: Lucie</p>
          <button onClick={handlePressChoices}>Voir mes choix</button>
          <button onClick={handlePressRestart}>Recommencer</button>
          <button onClick={changeChapter}>Lancer le chapitre 2</button>
        </div>
      )

      {modalVisible && (
        <div>
          <p>Entrez votre nom:</p>
          <input
            type="text"
            placeholder="Nom du joueur"
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleStartGame}>Commencer</button>
        </div>
      )}

      {choicesModalVisible && (
        <div>
          <p>Vos choix :</p>
          <div>
            {choicesList.map((choice: any, index: any) => (
              <div key={index}>
                {index % 2 === 0 ? (
                  <>
                    {choice.img && <img src={choice.img} alt="choice" />}
                    <p>{choice.desc}</p>
                  </>
                ) : (
                  <>
                    <p>{choice.desc}</p>
                    {choice.img && <img src={choice.img} alt="choice" />}
                  </>
                )}
              </div>
            ))}
          </div>
          <button onClick={() => setChoicesModalVisible(false)}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default MenuChapterTwo;
