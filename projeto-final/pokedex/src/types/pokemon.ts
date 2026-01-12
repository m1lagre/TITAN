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

// Aqui definimos o Pokemon completo
export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[]; // É uma lista (array) de tipos
  sprites: {
    other: {
      "official-artwork": {
        front_default: string; // A URL da imagem bonita
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
  stats: PokemonStat[]; // Novo: Lista de status (força, defesa...)
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
