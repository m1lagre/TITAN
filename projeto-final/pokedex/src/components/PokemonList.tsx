import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: PokemonListProps) {
  if (pokemons.length === 0) {
    return (
      <div className="text-xl text-slate-500 font-bold mt-10">
        Nenhum Pokémon encontrado.
      </div>
    );
  }

  return (
    <div
      className="
        w-full 
        /* MOBILE: Largura máxima do seu design mobile (opcional, mas bom pra alinhar) */
        max-w-[423px] lg:max-w-[1760px]
        px-4
        grid
        /* AQUI ESTÁ O GAP DE 15PX DO FIGMA */
        gap-[15px]
        /* AQUI DEFINE 2 POR LINHA */
        grid-cols-2
        lg:grid-cols-3
        lg:gap-[20px]
        justify-items-center
        pb-10
      "
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
