import React from 'react';
import useAuth from '~/hooks/useAuth';
import SignedInRoutes from './StackNavigatorRoutes/SignedInRoutes';
import SignInRoutes from './StackNavigatorRoutes/SignInRoutes';

const Routes = () => {
  const {googleUser} = useAuth();

  return googleUser !== undefined ? <SignedInRoutes /> : <SignInRoutes />;
};

export default Routes;
