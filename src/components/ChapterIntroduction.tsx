import { url } from 'inspector';
import React, { useState } from 'react';
import './ChapterIntroduction.css'
import { updateChapterInFirestore } from '../services/firebase.services';


const ChapterIntroduction: React.FC<any> = ({setIndicationState, setChapter, currentIndications, chapter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < currentIndications.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      updateChapterInFirestore(chapter + 1);
      localStorage.setItem('chapter', JSON.stringify(chapter + 1));
      setIndicationState(false);
    }
  };

  const currentIndication = currentIndications[currentIndex];

  return (
    <div className="container">
      <div className="overlay">
        <p className="narrative-text">{currentIndication}</p>
        <button onClick={handleNextClick}>{currentIndex === currentIndications.length -1 ? "Commencer le chapitre" : "Suivant"}</button>
      </div>
    </div>
  );
};

export default ChapterIntroduction;
