import axios from "axios";
import type { Pokemon } from "../types/pokemon";
import type { PokemonDetails } from "../types/pokemon";

// Cria uma conexão padrão com o site da API
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// Essa função vai buscar uma lista de Pokemons
// O "async" diz que essa função demora um pouco (busca na internet)
export async function getPokemons(): Promise<Pokemon[]> {
  // 1. Pega a lista simples (só nome e link) dos 20 primeiros
  const response = await api.get("/pokemon?limit=500");

  // 2. Aqui está o truque!
  // A lista inicial não tem a foto nem o tipo.
  // Então, para CADA pokemon da lista, a gente faz uma nova busca nos detalhes dele.

  const promises = response.data.results.map(
    async (result: { url: string }) => {
      // Busca os detalhes usando a URL específica de cada pokemon
      const pokemonDetails = await axios.get(result.url);
      return pokemonDetails.data;
    }
  );

  // 3. O Promise.all espera TODAS as buscas terminarem para entregar tudo junto
  const detailedPokemons = await Promise.all(promises);

  return detailedPokemons;
}

export async function getPokemonById(
  id: string | number
): Promise<PokemonDetails> {
  // 1. O Axios faz o get direto na URL
  const response = await axios.get<PokemonDetails>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  // 2. Com Axios, a resposta já vem pronta dentro de .data
  // Não precisa fazer aquele passo extra de .json()
  return response.data;
}

export default api;
