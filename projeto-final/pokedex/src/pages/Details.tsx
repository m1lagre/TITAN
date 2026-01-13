import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonById } from "../services/pokeApi";
import type { PokemonDetails as PokemonDetailsType } from "../types/pokemon";
import { ChevronLeft } from "lucide-react";

// Cores dos Tipos (Usadas nas pílulas)
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

// Tradução dos Stats
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
    <div className="min-h-screen w-full bg-[#fee993] flex justify-center overflow-x-hidden">
      {/* CONTAINER MESTRE */}
      <div
        style={{
          width: "1198px",
          height: "1799px",
          marginTop: "64px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          position: "relative",
        }}
      >
        {/* BOTÃO VOLTAR */}
        <Link
          to="/"
          style={{
            width: "301px",
            height: "64px",
            gap: "16px",
            borderWidth: "2px",
            borderRadius: "9999px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderColor: "#2B2B2B",
            textDecoration: "none",
          }}
          className="hover:scale-105 transition-transform shadow-sm"
        >
          <ChevronLeft size={32} color="#2B2B2B" strokeWidth={2.5} />
          <span className="font-bold text-xl text-[#2B2B2B]">
            Voltar para a galeria
          </span>
        </Link>

        {/* CARD DOS DETALHES */}
        <div
          style={{
            width: "1198px",
            height: "1687px",
            borderRadius: "32px",
            background:
              "linear-gradient(359.9deg, #2BA379 0.08%, rgba(169, 210, 135, 0.8) 50%)",
            boxShadow: "0px 4px 100px 0px #00000052",
            padding: "12px",
            flexShrink: 0,
          }}
        >
          {/* MIOLO BRANCO */}
          <div
            className="w-full h-full relative overflow-hidden flex flex-col"
            style={{ backgroundColor: "#FFFEF7", borderRadius: "20px" }}
          >
            {/* 1. CABEÇALHO COLORIDO */}
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
                {/* ID (Branco levemente transparente) */}
                <span className="text-3xl font-bold text-white/60">
                  #{String(pokemon.id).padStart(3, "0")}
                </span>

                {/* TIPOS (Estilo Sólido igual ao Card) */}
                <div className="flex gap-2">
                  {pokemon.types.map((t) => (
                    <span
                      key={t.type.name}
                      style={{
                        backgroundColor: typeColors[t.type.name], // Cor do tipo
                        color: "#FFFFFF",
                      }}
                      className="
                                        h-[34px] 
                                        px-[16px] 
                                        rounded-full 
                                        flex items-center justify-center 
                                        text-sm 
                                        capitalize 
                                        font-bold 
                                        shadow-sm
                                    "
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linha 2: Nome (COR ESCURA AGORA) */}
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
                  style={{
                    fontSize: "56px",
                    lineHeight: "100%",
                    color: "#5D5D5D", // <--- COR ALTERADA PARA CINZA ESCURO
                  }}
                >
                  {pokemon.name}
                </h1>
              </div>

              {/* Imagem */}
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

            {/* 2. CONTEÚDO BRANCO (Mantido igual) */}
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
                <h2 className="text-3xl font-bold text-slate-800">
                  Habilidades
                </h2>
              </div>
              <div
                style={{
                  width: "1094px",
                  height: "174px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
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
                    <span className="text-xl font-bold text-slate-500">
                      Peso
                    </span>
                    <span className="text-xl font-bold text-slate-800">
                      {pokemon.weight / 10} kg
                    </span>
                  </div>
                </div>
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

            {/* 3. ESTATÍSTICAS (Layout Corrigido) */}
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

                {pokemon.stats.map((stat) => {
                  // Lógica de Cores: Ataque/Defesa Especial = AZUL. Resto = VERMELHO.
                  const isBlue =
                    stat.stat.name === "special-attack" ||
                    stat.stat.name === "special-defense";
                  const barColor = isBlue ? "bg-[#6493EB]" : "bg-[#F04037]"; // Azul e Vermelho específico

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
                      {/* Texto (Label e Valor) */}
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

                      {/* Barra de Progresso */}
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

              {/* DIV TOTAL - Corrigido */}
              <div
                style={{
                  width: "100%", // <--- 100% resolve o vazamento (respeita o padding do pai)
                  height: "86px",
                  display: "flex",
                  justifyContent: "space-between", // <--- Agora isso vai funcionar
                  alignItems: "center",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor: "#6493EB",
                  color: "white",
                  boxSizing: "border-box", // Garante que o padding não estoure a div
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
    </div>
  );
}
