import type { PokemonDetails } from "../types/pokemon";

interface PokemonStatsProps {
  stats: PokemonDetails["stats"];
}

const statNames: Record<string, string> = {
  hp: "HP",
  attack: "Ataque", 
  defense: "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  speed: "Velocidade",
};

export function PokemonStats({ stats }: PokemonStatsProps) {
  const total = stats.reduce((acc, curr) => acc + curr.base_stat, 0);

  return (
    <div
      className="
      flex flex-col justify-between box-border
      /* MOBILE */
      w-full mt-[24px] px-[24px] pb-[24px] gap-[24px]
      /* DESKTOP */
      lg:w-[1190px] lg:h-[817px] lg:mt-[48px] lg:px-[48px] lg:pb-[48px] lg:gap-0
    "
    >
      {/* Lista de Stats */}
      <div className="flex flex-col w-full gap-[16px] lg:gap-[32px]">
        <div
          className="
          font-['Inter'] font-semibold flex items-end text-[#5D5D5D]
          /* MOBILE */
          text-[24px] h-[30px]
          /* DESKTOP */
          lg:text-[32px] lg:h-[53px]
        "
        >
          Estatísticas de Batalha
        </div>

        {stats.map((stat) => {
          const isBlue =
            stat.stat.name === "special-attack" ||
            stat.stat.name === "special-defense";
          const barColor = isBlue ? "bg-[#6493EB]" : "bg-[#F04037]";

          return (
            <div
              key={stat.stat.name}
              className="
                flex flex-col justify-between w-full
                /* MOBILE */
                h-[50px]
                /* DESKTOP */
                lg:h-[65px]
              "
            >
              <div className="flex justify-between items-center w-full h-[29px]">
                <span className="text-sm lg:text-xl font-bold text-slate-500 capitalize">
                  {statNames[stat.stat.name] || stat.stat.name}
                </span>
                <span className="text-lg lg:text-2xl font-bold text-slate-800">
                  {stat.base_stat}
                </span>
              </div>

              
              <div className="w-full h-[12px] lg:h-[20px] bg-[#E2E8F0] rounded-full overflow-hidden">
                
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Caixa de TOTAL */}
      <div
        className="
        flex justify-between items-center rounded-[16px] bg-[#E8E8E8] text-[#5D5D5D]
        /* MOBILE */
        w-full h-[60px] p-[16px]
        /* DESKTOP */
        lg:h-[86px] lg:p-[24px]
      "
      >
        <span className="text-xl lg:text-2xl font-bold">Total</span>
        <span className="text-2xl lg:text-4xl font-bold text-[#373737]">
          {total}
        </span>
      </div>
    </div>
  );
}
