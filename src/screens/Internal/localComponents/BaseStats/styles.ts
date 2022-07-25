import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
`;
export const PokemonBoxStats = styled.View`
  flex-direction: row;
  height: 50%;
`;
export const PokemonStatsInfo = styled.View`
  justify-content: space-between;
  width: 25%;
`;

export const PokemonStatsInfoResults = styled.View`
  justify-content: space-between;
  width: 10%;
`;
export const PokemonStatBar = styled.View`
  width: 10%;
  height: 2px;
  background-color: green;
  position: static;
  top: 8px;
`;
export const PokemonTextStyle = styled(Text).attrs({
  color: '#5c6a70',
})``;
