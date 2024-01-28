import React, { useEffect, useState } from 'react';
import  {narrative}  from '../utils/chapterTwo/chapterTwoIntroduction.utils';


const NarativeScreenIntroChapterTwo = ({/*changeChapter*/}) => {
  /*
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1591648999768-a5ea83ff503a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MzQ0NDA0NXx8ZW58MHx8fHx8&w=1000&q=80'; // Remplacez par votre URL d'image
  const [backgroundMusic, setBackgroundMusic] = useState<Audio.Sound>();
  const lucieDrawingPng = require('../../assets/lucie_drawing.png');

  const startMusic = async () => {
        const { sound } = await Audio.Sound.createAsync( require('../../assets/musics/chapter_one_ending_music.mp3'));
        sound.playAsync();
        setBackgroundMusic(sound); 
  }

  React.useEffect(() => {
    startMusic();
  }, []);


  const currentText = narrative[currentIndex];

  return (
    <ImageBackground
    source={{ uri: backgroundImageUrl }}
    style={styles.backgroundImage}
    blurRadius={10}
  >
    <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
        <View style={styles.container}>
          <Text style={styles.narrativeText}>{currentText}</Text>
        </View>
        { narrative.length === currentIndex &&
          <Image source={{uri: lucieDrawingPng}} style={styles.choiceImage} />
        }
        <TouchableOpacity onPress={() => {
          if(narrative.length === currentIndex){
            backgroundMusic.stopAsync();
            changeChapter();
          } else {setCurrentIndex(currentIndex + 1)}
        }} style={styles.button}>
          <Text style={styles.buttonText}>{narrative.length === currentIndex ? "Commencer le chapitre 2" : "Suivant ➔"}</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>

  );
  */
 return (
  <div>
    <p>RIEN</p>
  </div>
 )
};

export default NarativeScreenIntroChapterTwo;
