import axios from "axios";
import type { Pokemon } from "../types/pokemon";
import type { PokemonDetails } from "../types/pokemon";


const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});


export async function getPokemons(): Promise<Pokemon[]> {
  
  const response = await api.get("/pokemon?limit=200");



  const promises = response.data.results.map(
    async (result: { url: string }) => {
      
      const pokemonDetails = await axios.get(result.url);
      return pokemonDetails.data;
    }
  );

  
  const detailedPokemons = await Promise.all(promises);

  return detailedPokemons;
}

export async function getPokemonById(
  id: string | number
): Promise<PokemonDetails> {

  const response = await axios.get<PokemonDetails>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );


  return response.data;
}

export default api;
