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
