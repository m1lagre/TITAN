export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

// Pokemon completo
export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[]; 
  sprites: {
    other: {
      "official-artwork": {
        front_default: string; 
      };
    };
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: PokemonStat[]; 
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
}
