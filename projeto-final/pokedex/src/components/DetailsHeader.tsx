import type { PokemonDetails } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";

interface PokemonHeaderProps {
  pokemon: PokemonDetails;
  color: string;
}

export function PokemonHeader({ pokemon, color }: PokemonHeaderProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="
          relative flex-shrink-0 backdrop-blur-md
          /* MOBILE */
          w-full h-[236px]
          /* DESKTOP */
          lg:w-[1190px] lg:h-[528px]
        "
    >
      {/* Linha 1: ID e Tipos */}
      <div
        className="
        w-full flex justify-between items-start box-border
        /* MOBILE */
        h-[60px] pt-[24px] px-[24px]
        /* DESKTOP */
        lg:h-[108px] lg:pt-[48px] lg:px-[48px]
      "
      >
        <span className="font-bold text-white/60 text-xl lg:text-3xl">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        <div className="flex gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              style={{
                backgroundColor: typeColors[t.type.name],
                color: "#FFFFFF",
              }}
              className="
                flex items-center justify-center rounded-full capitalize font-bold shadow-sm
                /* MOBILE */
                h-[24px] px-[12px] text-xs
                /* DESKTOP */
                lg:h-[34px] lg:px-[16px] lg:text-sm
              "
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2: Nome */}
      <div
        className="
        w-full flex items-center box-border
        /* MOBILE */
        h-[40px] px-[24px] mt-[4px] gap-[8px]
        /* DESKTOP */
        lg:h-[58px] lg:pl-[48px] lg:mt-[8px] lg:gap-[10px]
      "
      >
        <h1
          className="font-bold capitalize truncate text-[#5D5D5D]"
          style={{ lineHeight: "100%" }}
        >
          {/* Tamanho da fonte responsivo via Tailwind classes arbitrárias ou style inline condicional */}
          <span className="text-[32px] lg:text-[56px]">{pokemon.name}</span>
        </h1>
      </div>

      {/* Imagem */}
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="
          absolute z-10 drop-shadow-2xl object-contain
          
          /* MOBILE: Centralizada e menor */
          w-[180px] h-[180px]
          bottom-[-20px] left-1/2 -translate-x-1/2
          
          /* DESKTOP: Gigante e na direita */
          lg:w-[475px] lg:h-[388px] 
          lg:top-[108px] lg:left-[357px] 
          lg:bottom-auto lg:translate-x-0
        "
      />
    </div>
  );
}
