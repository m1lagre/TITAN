import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonById } from "../services/pokeApi";
import type { PokemonDetails as PokemonDetailsType } from "../types/pokemon";
import { ArrowLeft } from "lucide-react";

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

const statNames: Record<string, string> = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  speed: "Velocidade",
};

export function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getPokemonById(id);
        setPokemon(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPokemon();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fee993]">
        Carregando...
      </div>
    );
  if (!pokemon) return <div>Não encontrado</div>;

  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] || "#4BBA93";

  return (
    <div className="min-h-screen w-full bg-[#fee993] flex flex-col items-center justify-start pt-10 pb-10 overflow-x-hidden">
      <Link
        to="/"
        className="self-start ml-10 mb-5 flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-slate-400 hover:bg-white transition-all font-bold text-slate-700"
      >
        <ArrowLeft size={20} /> Voltar
      </Link>

      {/* CARD GIGANTE (PAI) */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: "1198px",
          height: "1687px",
          borderRadius: "32px",
          background:
            "linear-gradient(359.9deg, #2BA379 0.08%, rgba(169, 210, 135, 0.8) 50%)",
          boxShadow: "0px 4px 100px 0px #00000052",
          padding: "12px",
        }}
      >
        {/* MIOLO BRANCO */}
        <div
          className="w-full h-full relative overflow-hidden flex flex-col"
          style={{
            backgroundColor: "#FFFEF7",
            borderRadius: "20px",
          }}
        >
          {/* 1. CABEÇALHO (VERDE/COR DO TIPO) */}
          <div
            style={{
              width: "1190px",
              height: "528px",
              backgroundColor: color,
              backdropFilter: "blur(500px)",
            }}
            className="relative flex-shrink-0"
          >
            <div
              className="flex flex-col items-start justify-center px-12"
              style={{ width: "1190px", height: "174px", gap: "8px" }}
            >
              <span className="text-2xl font-bold text-white/80">
                #{String(pokemon.id).padStart(3, "0")}
              </span>
              <div className="flex justify-between w-full items-center">
                <h1 className="text-6xl font-bold text-white capitalize">
                  {pokemon.name}
                </h1>
                <div className="flex gap-4">
                  {pokemon.types.map((t) => (
                    <span
                      key={t.type.name}
                      className="px-6 py-2 rounded-full bg-white/30 text-white text-xl font-bold capitalize backdrop-blur-md"
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="absolute z-10 drop-shadow-2xl"
              style={{
                width: "475px",
                height: "388px",
                top: "108px",
                left: "357px",
              }}
            />
          </div>

          {/* 2. ÁREA DE CONTEÚDO BRANCA */}

          {/* DIV 1: Físico e Habilidades (CONTAINER GERAL) */}
          <div
            style={{
              width: "1190px",
              height: "244px",
              paddingRight: "48px",
              paddingLeft: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              gap: "32px", // Gap vertical entre titulos e conteudo
            }}
          >
            {/* TÍTULOS */}
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

            {/* CONTEÚDO (DADOS) */}
            <div
              style={{
                width: "1094px",
                height: "174px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between", // Garante que fiquem nas pontas se sobrar espaço
              }}
            >
              {/* --- COLUNA ESQUERDA: FÍSICO (570px) --- */}
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
                  <span className="text-xl font-bold text-slate-500">
                    Altura
                  </span>
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

              {/* --- COLUNA DIREITA: HABILIDADES (476px) --- */}
              <div
                style={{
                  width: "476px",
                  height: "174px",
                  display: "flex",
                  flexDirection: "row", // Garante lado a lado
                  flexWrap: "wrap", // Permite quebrar linha se não couber
                  alignContent: "flex-start",
                  gap: "16px", // Gap entre os cards de habilidade
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
                      padding: "0 16px", // Padding lateral menor para textos grandes não vazarem
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

          {/* DIV 2: Estatísticas de Batalha (CONTAINER GERAL) */}
          <div
            style={{
              width: "1190px",
              height: "817px",
              paddingRight: "48px",
              paddingBottom: "48px",
              paddingLeft: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Separa a lista do total
              marginTop: "48px", // Gap entre seção fisica e stats
            }}
          >
            {/* --- PARTE 1: LISTA DE STATS --- */}
            <div
              style={{
                width: "1094px",
                height: "635px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {/* Título da Seção */}
              <div
                style={{
                  width: "1094px",
                  height: "53px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "120%",
                  color: "#2B2B2B", // Cor escura padrão para contraste
                  display: "flex",
                  alignItems: "flex-end", // Vertical align bottom
                }}
              >
                Estatísticas de Batalha
              </div>

              {/* Lista de Barras */}
              {pokemon.stats.map((stat) => {
                const isSpecial = stat.stat.name.includes("special");
                const barColor = isSpecial ? "bg-blue-500" : "bg-red-500";

                return (
                  <div
                    key={stat.stat.name}
                    style={{
                      width: "1094px",
                      height: "65px",
                      display: "flex",
                      flexDirection: "column", // Organiza label e barra verticalmente
                      justifyContent: "center",
                      gap: "8px", // Pequeno gap interno
                    }}
                  >
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-bold text-slate-500 capitalize">
                        {statNames[stat.stat.name] || stat.stat.name}
                      </span>
                      <span className="text-2xl font-bold text-slate-800">
                        {stat.base_stat}
                      </span>
                    </div>

                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${barColor}`}
                        style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- PARTE 2: TOTAL --- */}
            <div
              style={{
                width: "1094px",
                height: "86px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#6493EB", // Azul do total (pode ajustar a cor se quiser)
                color: "white", // Texto branco para contraste
              }}
            >
              <span className="text-2xl font-bold">Total</span>
              <span className="text-4xl font-bold">
                {pokemon.stats.reduce((acc, curr) => acc + curr.base_stat, 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
