import {useMemo} from 'react';
import {RoutePokemonDTO} from '~/@types/dtos/pokemonDTO';
import {colorByTypes} from '~/utils/apiMockData';

const useColorByType = ({item}: RoutePokemonDTO) => {
  const getBackgroundColorByType = useMemo(() => {
    if (!item) {
      return;
    }
    return colorByTypes?.[item?.type?.[0]];
  }, [item]);
  return {getBackgroundColorByType};
};

export default useColorByType;
