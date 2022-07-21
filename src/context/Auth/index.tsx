import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {createContext, useCallback, useEffect, useState} from 'react';
import {GoogleUser} from '~/@types/dtos/user';
import {AuthContextProps} from './types';

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({children}: any) => {
  /**
   * States
   */

  const [loading, setLoading] = useState<boolean>(false);
  const [googleUser, setGoogleUser] = useState<GoogleUser>();

  /**
   * Callbacks
   */

  const handleGoogleSignIn = useCallback(async () => {
    try {
      setLoading(true);
      const {user} = await GoogleSignin.signIn();
      setGoogleUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleGoogleSignOut = useCallback(async () => {
    try {
      setLoading(true);
      await GoogleSignin.signOut();
      setGoogleUser(undefined);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Effects
   */

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:
        '224819431993-mgcka63re3b5juit5js2gslrlrgi0qvc.apps.googleusercontent.com',
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleUser,
        handleGoogleSignIn,
        handleGoogleSignOut,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
