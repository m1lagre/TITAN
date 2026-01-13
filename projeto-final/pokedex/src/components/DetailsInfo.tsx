import type { PokemonDetails } from "../types/pokemon";

interface PokemonInfoProps {
  pokemon: PokemonDetails;
}

export function PokemonInfo({ pokemon }: PokemonInfoProps) {
  return (
    <div
      style={{
        width: "1190px",
        height: "244px",
        padding: "0 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "20px",
        gap: "32px",
      }}
    >
      {/* Títulos */}
      <div
        style={{
          width: "801px",
          height: "38px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="text-3xl font-bold text-slate-800">
          Informações Físicas
        </h2>
        <h2 className="text-3xl font-bold text-slate-800">Habilidades</h2>
      </div>

      {/* Conteúdo */}
      <div
        style={{
          width: "1094px",
          height: "174px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Coluna Física */}
        <div
          style={{
            width: "570px",
            height: "174px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "570px",
              height: "79px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "#F6F8FC",
            }}
          >
            <span className="text-xl font-bold text-slate-500">Altura</span>
            <span className="text-xl font-bold text-slate-800">
              {pokemon.height / 10} m
            </span>
          </div>
          <div
            style={{
              width: "570px",
              height: "79px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "#F6F8FC",
            }}
          >
            <span className="text-xl font-bold text-slate-500">Peso</span>
            <span className="text-xl font-bold text-slate-800">
              {pokemon.weight / 10} kg
            </span>
          </div>
        </div>

        {/* Coluna Habilidades */}
        <div
          style={{
            width: "476px",
            height: "174px",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            gap: "16px",
          }}
        >
          {pokemon.abilities.map((a) => (
            <div
              key={a.ability.name}
              style={{
                width: "195px",
                height: "77px",
                borderRadius: "16px",
                border: "2px solid #9B9B9B",
                backgroundColor: "#E8E8E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 16px",
              }}
            >
              <span className="text-lg font-bold text-slate-600 capitalize truncate">
                {a.ability.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
