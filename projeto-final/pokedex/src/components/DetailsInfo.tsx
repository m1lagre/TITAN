import type { PokemonDetails } from "../types/pokemon";

interface PokemonInfoProps {
  pokemon: PokemonDetails;
}

export function PokemonInfo({ pokemon }: PokemonInfoProps) {
  return (
    <div
      className="
      flex flex-col justify-center
      /* MOBILE */
      w-full mt-[40px] px-[24px] gap-[24px]
      /* DESKTOP */
      lg:w-[1190px] lg:h-[244px] lg:px-[48px] lg:mt-[20px] lg:gap-[32px]
    "
    >
      {/* Títulos (Físico e Habilidades) */}
      <div
        className="
        flex items-center justify-between
        /* MOBILE */
        w-full h-auto
        /* DESKTOP */
        lg:w-[801px] lg:h-[38px]
      "
      >
        <h2 className="text-xl lg:text-3xl font-bold text-slate-800">Físico</h2>
        <h2 className="text-xl lg:text-3xl font-bold text-slate-800">
          Habilidades
        </h2>
      </div>

      {/* Conteúdo */}
      <div
        className="
        flex
        /* MOBILE: Coluna */
        flex-col gap-6 w-full h-auto
        /* DESKTOP: Linha */
        lg:flex-row lg:items-start lg:justify-between lg:w-[1094px] lg:h-[174px] lg:gap-0
      "
      >
        {/* Coluna Física (Altura/Peso) */}
        <div
          className="
          flex
          /* MOBILE: Linha (um ao lado do outro) para economizar espaço vertical */
          flex-row gap-3 w-full
          /* DESKTOP: Coluna */
          lg:flex-col lg:w-[570px] lg:gap-[16px] lg:h-[174px]
        "
        >
          {/* Altura */}
          <div
            className="
            flex justify-between items-center bg-[#F6F8FC] rounded-[16px]
            /* MOBILE */
            flex-1 p-[16px] h-[60px]
            /* DESKTOP */
            lg:w-[570px] lg:h-[79px] lg:p-[24px] lg:flex-none
          "
          >
            <span className="text-sm lg:text-xl font-bold text-slate-500">
              Altura
            </span>
            <span className="text-sm lg:text-xl font-bold text-slate-800">
              {pokemon.height / 10} m
            </span>
          </div>

          {/* Peso */}
          <div
            className="
            flex justify-between items-center bg-[#F6F8FC] rounded-[16px]
            /* MOBILE */
            flex-1 p-[16px] h-[60px]
            /* DESKTOP */
            lg:w-[570px] lg:h-[79px] lg:p-[24px] lg:flex-none
          "
          >
            <span className="text-sm lg:text-xl font-bold text-slate-500">
              Peso
            </span>
            <span className="text-sm lg:text-xl font-bold text-slate-800">
              {pokemon.weight / 10} kg
            </span>
          </div>
        </div>

        {/* Coluna Habilidades */}
        <div
          className="
          flex flex-wrap content-start
          /* MOBILE */
          gap-2 w-full
          /* DESKTOP */
          lg:w-[476px] lg:h-[174px] lg:gap-[16px]
        "
        >
          {pokemon.abilities.map((a) => (
            <div
              key={a.ability.name}
              className="
                border-2 border-[#9B9B9B] bg-[#E8E8E8] rounded-[16px] flex justify-center items-center
                /* MOBILE */
                flex-1 min-w-[100px] h-[50px] px-2
                /* DESKTOP */
                lg:w-[195px] lg:h-[77px] lg:px-[16px] lg:flex-none
              "
            >
              <span className="text-sm lg:text-lg font-bold text-slate-600 capitalize truncate">
                {a.ability.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
