import {useNavigation} from '@react-navigation/native';
import {useMemo} from 'react';
import {RoutePokemonDTO} from '../../../../@types/dtos/pokemonDTO';
import {colorByTypes} from '../../../../utils/apiMockData';

const usePokemonCardController = ({item}: RoutePokemonDTO) => {
  const {navigate} = useNavigation();

  const handleNavigateToInternal = () => {
    navigate('Internal', {item});
  };

  const getBackgroundColorByType = useMemo(() => {
    if (!item) {
      return;
    }
    return colorByTypes[item.type[0]];
  }, [item]);

  return {
    handleNavigateToInternal,
    getBackgroundColorByType,
  };
};

export default usePokemonCardController;
