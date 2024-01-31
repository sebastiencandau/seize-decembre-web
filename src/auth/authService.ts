// src/auth/authService.ts
import { UserData } from '../interfaces/user.interface';
import { firebase, database } from './firebaseConfig';

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

const signInWithGoogle = async () => {
    try {
        const result = await auth.signInWithPopup(googleProvider);

        const userData: UserData = {
            playerName: null,
            chapter: null,
            choices: null,
        };

        await db.collection('users').doc(result.user?.uid).set(userData);
    } catch (error: any) {
        console.error(error.message);
    }
};

const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error: any) {
        console.error(error.message);
    }
};

export { signInWithGoogle, signOut };
