import type { PokemonDetails } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";

interface PokemonHeaderProps {
  pokemon: PokemonDetails;
  color: string;
}

export function PokemonHeader({ pokemon, color }: PokemonHeaderProps) {
  return (
    <div
      style={{
        backgroundImage: `
     radial-gradient(
      circle at 50% 50%,
      ${color} 0%,
      rgba(255,255,255,0.65) 100%,
      rgba(255,255,255,0.85) 40%
    )
  `,
      }}
      className="
      relative shrink-0 overflow-hidden
      
      backdrop-blur-[160px]
      w-full h-[236px]
      lg:w-[1190px] lg:h-[528px]
"
    >
      <div
        className="
        w-full flex justify-between items-start box-border
        /* MOBILE */
        pt-[24px] px-[24px]
        /* DESKTOP */
        lg:pt-[48px] lg:px-[48px]
  "
      >
        {/* ESQUERDA: ID + NOME (mesma div) */}
        <div className="flex flex-col gap-[4px]">
          <span className="font-bold text-[#5D5D5D] text-xl lg:text-3xl">
            #{String(pokemon.id).padStart(3, "0")}
          </span>

          <div className="lg:hidden w-[142px] h-[54px]">
            <h1 className="font-['Inter'] font-bold capitalize truncate text-[#373737] text-[19px] leading-[130%]">
              {pokemon.name}
            </h1>
          </div>

          {/* desktop o nome é maior */}
          <h1 className="hidden lg:block font-bold capitalize truncate text-[#373737] text-[56px] leading-[130%]">
            {pokemon.name}
          </h1>
        </div>

        {/* TIPOS */}
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

      {/* Imagem */}
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="
          absolute z-10 drop-shadow-2xl object-contain
          
          /* MOBILE */
          w-[208px]
          h-[208px]
          top-[30px]
          bottom-[-20px] 

          left-1/2           /* Manda pro meio da tela */
          -translate-x-1/2   
          
          /* DESKTOP */
          lg:w-[475px] lg:h-[388px] 
          lg:top-[108px] lg:left-[357px] 
          lg:bottom-auto 
          lg:translate-x-0   
        "
      />
    </div>
  );
}
