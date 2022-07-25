import {useNavigation} from '@react-navigation/native';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';

const usePokemonCardController = ({item}: RoutePokemonDTO) => {
  const {navigate} = useNavigation();

  const handleNavigateToInternal = () => {
    navigate('Internal', {item});
  };

  return {
    handleNavigateToInternal,
  };
};

export default usePokemonCardController;
