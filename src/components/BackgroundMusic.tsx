import React, { useEffect } from 'react';

const BackgroundMusic = ({ musicSrc }: {musicSrc: string}) => {
  useEffect(() => {
    const audio = new Audio(musicSrc);

    // Démarrer la musique automatiquement
    audio.play();

    // Nettoyer l'audio lorsque le composant est démonté
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [musicSrc]);

  return null; // Ce composant ne rend rien dans l'interface utilisateur
};

export default BackgroundMusic;
