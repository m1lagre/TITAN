import type { PokemonDetails } from "../types/pokemon";

interface PokemonStatsProps {
  stats: PokemonDetails["stats"]; // Pegando a tipagem direto da interface
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
  // Calcula o total
  const total = stats.reduce((acc, curr) => acc + curr.base_stat, 0);

  return (
    <div
      style={{
        width: "1190px",
        height: "817px",
        padding: "0 48px 48px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "635px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "53px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "32px",
            display: "flex",
            alignItems: "flex-end",
          }}
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
              style={{
                width: "100%",
                height: "65px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "29px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="text-xl font-bold text-slate-500 capitalize">
                  {statNames[stat.stat.name] || stat.stat.name}
                </span>
                <span className="text-2xl font-bold text-slate-800">
                  {stat.base_stat}
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "20px",
                  backgroundColor: "#E2E8F0",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  className={`h-full ${barColor}`}
                  style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          width: "100%",
          height: "86px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "16px",
          padding: "24px",
          backgroundColor: "#6493EB",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        <span className="text-2xl font-bold">Total</span>
        <span className="text-4xl font-bold">{total}</span>
      </div>
    </div>
  );
}
