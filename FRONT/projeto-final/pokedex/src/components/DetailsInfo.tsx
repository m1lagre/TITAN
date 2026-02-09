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
      {/* Conteúdo */}
      <div
        className="
        
          flex flex-col gap-6 w-full h-auto
          /* DESKTOP */
          lg:flex-row lg:items-start lg:justify-between lg:w-[1094px] lg:h-[174px] lg:gap-0
        "
      >
        {/* Coluna Física */}
        <div
          className="
            w-full
            /* DESKTOP */
            lg:w-[570px]
          "
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#5D5D5D] mb-4">
            Informações Físicas
          </h2>

          <div
            className="

            flex flex-col w-full gap-[12px]
            /* DESKTOP */
            lg:flex-col lg:gap-[16px]
            "
          >
            {/* Altura */}
            <div className="flex justify-between items-center bg-[#E8E8E8] rounded-[16px] flex-1 p-[16px] h-[60px] lg:w-[570px] lg:h-[79px] lg:p-[24px] lg:flex-none">
              <span className="text-sm lg:text-xl font-bold text-[#5D5D5D]">
                Altura
              </span>
              <span className="text-sm lg:text-xl font-bold text-[#373737]">
                {pokemon.height / 10} m
              </span>
            </div>

            {/* Peso */}
            <div className="flex justify-between items-center bg-[#E8E8E8] rounded-[16px] flex-1 p-[16px] h-[60px] lg:w-[570px] lg:h-[79px] lg:p-[24px] lg:flex-none">
              <span className="text-sm lg:text-xl font-bold text-[#5D5D5D]">
                Peso
              </span>
              <span className="text-sm lg:text-xl font-bold text-[#373737]">
                {pokemon.weight / 10} kg
              </span>
            </div>
          </div>
        </div>

        {/* Coluna Habilidades */}
        <div className="w-full lg:w-[476px]">
          <h2 className="text-xl lg:text-3xl font-bold text-[#5D5D5D] mb-4">
            Habilidades
          </h2>

          <div
            className="
              flex flex-wrap content-start
              gap-2 w-full
              /* DESKTOP */
              lg:h-[174px] lg:gap-[16px]
            "
          >
            {pokemon.abilities.map((a) => (
              <div
                key={a.ability.name}
                className="
                  border-2 border-[#9B9B9B] bg-[#E8E8E8] rounded-[16px]
                  flex justify-center items-center
                  flex-1 min-w-[100px] h-[50px] px-2
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
    </div>
  );
}
