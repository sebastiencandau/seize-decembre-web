// NarativeScreen.tsx

import React, { useEffect, useState } from 'react';
import './NarativeScreen.css';

interface NarativeScreenProps {
  currentIndications: string[];
  startConversation(): void;
}

const NarativeScreen: React.FC<NarativeScreenProps> = ({ startConversation, currentIndications }) => {
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
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndications, startConversation]);

  const currentIndication = currentIndications[currentIndex];

  return (
    <div className="container">
      <div className="overlay">
        <p className="narrative-text">{currentIndication}</p>
      </div>
    </div>
  );
};

export default NarativeScreen;
