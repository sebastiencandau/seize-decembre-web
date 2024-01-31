// SignInComponent.tsx
import React from 'react';
import { signInWithGoogle } from './authService';

interface SignInProps {
  onSignIn: () => void;
}

const SignInComponent: React.FC<SignInProps> = ({ onSignIn }) => {
  const handleSignInClick = async () => {
    await signInWithGoogle();
    // Appeler la fonction onSignIn après la connexion
    onSignIn();
  };

  return (
    <div>
      <button onClick={handleSignInClick}>Se connecter avec Google</button>
    </div>
  );
};

export default SignInComponent;
