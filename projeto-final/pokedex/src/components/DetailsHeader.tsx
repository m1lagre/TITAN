import type { PokemonDetails } from "../types/pokemon";
interface PokemonHeaderProps {
  pokemon: PokemonDetails;
  color: string;
}

export function PokemonHeader({ pokemon, color }: PokemonHeaderProps) {
  // Cores fixas para as pílulas de tipo (copiado do seu código anterior)
  const typeColors: Record<string, string> = {
    fire: "#F57D31",
    grass: "#74CB48",
    water: "#6493EB",
    bug: "#A7B723",
    normal: "#AAA67F",
    poison: "#A43E9E",
    electric: "#F9CF30",
    ground: "#DEC16B",
    fairy: "#E69EAC",
    fighting: "#C12239",
    psychic: "#FB5584",
    rock: "#B69E31",
    ghost: "#70559B",
    ice: "#9AD6DF",
    dragon: "#7037FF",
  };

  return (
    <div
      style={{
        width: "1190px",
        height: "528px",
        backgroundColor: color,
        backdropFilter: "blur(500px)",
      }}
      className="relative flex-shrink-0"
    >
      {/* Linha 1: ID e Tipos */}
      <div
        style={{
          width: "100%",
          height: "108px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: "48px",
          paddingRight: "48px",
          paddingLeft: "48px",
          boxSizing: "border-box",
        }}
      >
        <span className="text-3xl font-bold text-white/60">
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
              className="h-[34px] px-[16px] rounded-full flex items-center justify-center text-sm capitalize font-bold shadow-sm"
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2: Nome */}
      <div
        style={{
          width: "100%",
          height: "58px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingLeft: "48px",
          marginTop: "8px",
          boxSizing: "border-box",
        }}
      >
        <h1
          className="font-bold capitalize truncate"
          style={{ fontSize: "56px", lineHeight: "100%", color: "#5D5D5D" }}
        >
          {pokemon.name}
        </h1>
      </div>

      {/* Imagem */}
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="absolute z-10 drop-shadow-2xl"
        style={{ width: "475px", height: "388px", top: "108px", left: "357px" }}
      />
    </div>
  );
}
