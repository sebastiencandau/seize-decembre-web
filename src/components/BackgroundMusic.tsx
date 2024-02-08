import React, { useEffect, useState } from 'react';

const BackgroundMusic = ({ chapter }: {chapter: number}) => {

  const [url, setUrl] = useState<string>();

  useEffect(() => {
    if(chapter < 6){
      setUrl('max_and_chloe')
    } else if(chapter === 6){
      setUrl('chapter_one_ending_music')
    } else if(chapter > 6) {
      setUrl('labyrinthe_of_pan');
    }
  }, [chapter]);

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <>
    { url &&
            <audio autoPlay src={require(`../assets/musics/${url}.mp3`)} id="audio" loop />

    }
    </>
  );
};

export default BackgroundMusic;