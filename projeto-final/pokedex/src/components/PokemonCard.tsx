import type { Pokemon } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] ?? "#666666";

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="w-full flex justify-center">
      <div
        style={{ borderColor: color, backgroundColor: "#FFFFFF" }}
        className="
    /* --- MOBILE (FIGMA) --- */
    w-[204px]
    h-[271px]
    rounded-[24px]
    border-[4px]

    /* --- DESKTOP (FIGMA) --- */
    lg:w-[425px]
    lg:h-[500px]
    lg:rounded-[32px]
    lg:border-[4px]

    /* --- COMUNS --- */
    relative
    overflow-hidden
    cursor-pointer
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl
  "
      >
        {/* AURA/GLOW (Ajustada para o novo tamanho menor) */}
        <div
          style={{ backgroundColor: color }}
          className="
            absolute rounded-full z-0 opacity-60 
            blur-[40px] lg:blur-[60px]
            /* Mobile */
            w-[150px] h-[150px] top-[40px] left-[20px]
            /* Desktop */
            lg:top-[92px] lg:left-[64px] lg:w-[296px] lg:h-[296px]
          "
        />

        {/* HEADER (ID e Tipos) */}
        <div
          className="
            absolute flex justify-between items-center z-20 
            /* Mobile */
            w-[85%] top-[12px] left-[12px]
            /* Desktop */
            lg:top-[32px] lg:left-[32px] lg:w-[361px] lg:h-[34px]
        "
        >
          <span
            style={{ color: "#9B9B9B" }}
            className="font-['Inter'] font-bold text-xs lg:text-xl"
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </span>
          <div className="flex gap-1 lg:gap-2">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                style={{
                  backgroundColor: typeColors[typeInfo.type.name],
                  color: "#FFFFFF",
                }}
                className="
                  flex items-center justify-center rounded-full capitalize font-bold shadow-sm
                  /* Mobile: Pequeno */
                  h-[20px] px-[8px] text-[9px]
                  /* Desktop: Grande */
                  lg:h-[34px] lg:px-[16px] lg:text-sm
                "
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGEM  */}
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="
          absolute
          top-[48px]
          left-1/2
          -translate-x-1/2
          w-[120px] h-[120px]
          object-contain z-10

          lg:top-[92px]
          lg:left-[64px]
          lg:translate-x-0
          lg:w-[296px] lg:h-[296px]
          "
        />

        {/* NOME (Rodapé) */}
        <div
          className="
    absolute left-0 bottom-0
    flex items-center justify-center
    z-20

    /* MOBILE (FIGMA) */
    w-full
    h-[84px]
    px-[16px]
    rounded-b-[20px]

    /* DESKTOP (FIGMA) */
    lg:w-[425px]
    lg:h-[112px]
    lg:px-[32px]
    lg:rounded-b-[32px]
  "
        >
          <span
            className="
      font-['Inter']
      font-bold
      capitalize
      text-[#5D5D5D]
      text-center
      leading-[120%]

      /* MOBILE */
      text-[20px]

      /* DESKTOP */
      lg:text-[28px]
    "
          >
            {pokemon.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
