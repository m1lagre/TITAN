import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}

export function PokemonList({ pokemons }: PokemonListProps) {
  if (pokemons.length === 0) {
    return null;
  }

  return (
    <div
      className="
        w-full 
        max-w-[423px] lg:max-w-[1760px]
        px-4
        grid
        gap-[15px]
        grid-cols-2
        justify-items-center
        pb-10

        lg:grid-cols-3
        lg:gap-[20px]
      "
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
