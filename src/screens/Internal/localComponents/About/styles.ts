import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
`;
export const PokemonBoxStats = styled.View`
  flex-direction: row;
  height: 70%;
`;
export const PokemonStatsInfo = styled.View`
  justify-content: space-between;
  width: 30%;
`;

export const PokemonStatsInfoResults = styled.View`
  justify-content: space-between;
  width: 100%;
`;

export const PokemonTextStyle = styled(Text).attrs({
  color: '#5c6a70',
})``;
