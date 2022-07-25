import React from 'react';
import useAuth from '~/hooks/useAuth';
import SignedInRoutes from './SignedInRoutes';
import SignInRoutes from './SignInRoutes';

const Routes = () => {
  const {googleUser} = useAuth();

  return googleUser === undefined ? <SignedInRoutes /> : <SignInRoutes />;
};

export default Routes;
