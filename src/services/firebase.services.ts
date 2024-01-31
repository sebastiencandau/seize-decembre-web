import { firebase, database } from '../auth/firebaseConfig';

export const updateChapterInFirestore = async (chapterData: number) => {
    const user = firebase.auth().currentUser;

    if (user) {
        try {
            const userDocRef = firebase.firestore().collection('users').doc(user.uid);

            // Mettez à jour le champ 'chapter' dans le document de l'utilisateur
            await userDocRef.update({
                chapter: chapterData
            });

            console.log('Chapitre mis à jour avec succès dans Firestore.');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du chapitre dans Firestore :', error);
        }
    }
};

export const updatePlayerNameInFirestore = async (playerName: string) => {
    const user = firebase.auth().currentUser;
  
    if (user) {
        try {
            const userDocRef = firebase.firestore().collection('users').doc(user.uid);
  
            // Mettez à jour le champ 'chapter' dans le document de l'utilisateur
            await userDocRef.update({
                playerName
            });
  
            console.log('Chapitre mis à jour avec succès dans Firestore.');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du chapitre dans Firestore :', error);
        }
    }
  };

export const updateChoicesInFirestore = async (choices: string[]) => {
    const user = firebase.auth().currentUser;
  
    if (user) {
        try {
            const userDocRef = firebase.firestore().collection('users').doc(user.uid);
  
            // Mettez à jour le champ 'chapter' dans le document de l'utilisateur
            await userDocRef.update({
                choices
            });
  
            console.log('Chapitre mis à jour avec succès dans Firestore.');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du chapitre dans Firestore :', error);
        }
    }
  };

  export const getChapterInFirebase = async (): Promise<number | undefined> => {
    const user = firebase.auth().currentUser;
    
    if (user) {
        const userData = await firebase.firestore().collection('users').doc(user.uid).get();
        return userData.exists ? userData.data()?.chapter : undefined;
    }

    return undefined;
}

export const getChoicesInFirebase = async (): Promise<string[] | undefined> => {
    const user = firebase.auth().currentUser;
    
    if (user) {
        const userData = await firebase.firestore().collection('users').doc(user.uid).get();
        return userData.exists ? userData.data()?.choices : undefined;
    }

    return undefined;
}

export const getPlayerNameInFirebase = async (): Promise<string | undefined> => {
    const user = firebase.auth().currentUser;
    
    if (user) {
        const userData = await firebase.firestore().collection('users').doc(user.uid).get();
        return userData.exists ? userData.data()?.playerName : undefined;
    }

    return undefined;
}


export const getUserId = () => {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  };