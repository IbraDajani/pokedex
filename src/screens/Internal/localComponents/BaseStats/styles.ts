import styled from 'styled-components/native';

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

export interface PropsStats {}
