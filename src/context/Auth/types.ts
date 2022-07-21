import {GoogleUser} from '~/@types/dtos/user';

export interface AuthContextProps {
  loading?: boolean;
  googleUser?: GoogleUser;
  handleGoogleSignIn?: () => Promise<void>;
  handleGoogleSignOut?: () => Promise<void>;
}
