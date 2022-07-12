interface NextEvolution {
  num: string;
  name: string;
}

export interface PokemonDTO {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[];
  weaknesses: string[];
  next_evolution: NextEvolution[];
}
