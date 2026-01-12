import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: PokemonListProps) {
  // Aquela lógica de agrupar de 3 em 3 vem pra cá (perceba que agora é responsabilidade visual)
  const chunkedPokemons = [];
  for (let i = 0; i < pokemons.length; i += 3) {
    chunkedPokemons.push(pokemons.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center w-full gap-8">
      {/* Mensagem de "Não encontrado" agora fica aqui, responsabilidade da lista */}
      {pokemons.length === 0 && (
        <div className="text-xl text-slate-500 font-bold mt-10">
          Nenhum Pokémon encontrado.
        </div>
      )}

      {chunkedPokemons.map((row, index) => (
        <div
          key={index}
          className="w-[1760px] h-[530px] flex flex-row gap-[20px] items-center justify-center"
        >
          {row.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}

          {/* Dica de Design: Se a última linha tiver menos de 3, 
              isso aqui ajuda a manter o alinhamento se usar justify-start, 
              mas com justify-center o React se vira bem. */}
        </div>
      ))}
    </div>
  );
}
