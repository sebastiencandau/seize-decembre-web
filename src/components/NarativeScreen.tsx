// NarativeScreen.tsx

import React, { useEffect, useState } from 'react';
import './NarativeScreen.css';

interface NarativeScreenProps {
  currentIndications: string[];
  chapter: number;
  startConversation(): void;
}

const NarativeScreen: React.FC<NarativeScreenProps> = ({chapter, startConversation, currentIndications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === currentIndications.length) {
          clearInterval(interval);
          startConversation();
        }
        return newIndex;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [currentIndications, startConversation]);

  const currentIndication = currentIndications[currentIndex];

  return (
    <div className={chapter < 6 ? 'container-ch1' : chapter > 6 ? 'container-ch2' : ''}>
      <div className="overlay">
        <p className="narrative-text">{currentIndication}</p>
      </div>
    </div>
  );
};

export default NarativeScreen;
