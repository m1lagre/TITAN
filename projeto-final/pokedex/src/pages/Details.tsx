import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonById } from "../services/pokeApi";
import type { PokemonDetails as PokemonDetailsType } from "../types/pokemon";
import { ChevronLeft } from "lucide-react";

// Importando os novos componentes
import { PokemonHeader } from "../components/DetailsHeader";
import { PokemonInfo } from "../components/DetailsInfo";
import { PokemonStats } from "../components/DetailsStats";

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

        {/* CARD DOS DETALHES (Container com Borda Gradiente) */}
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
            {/* Componente 1: Cabeçalho */}
            <PokemonHeader pokemon={pokemon} color={color} />

            {/* Componente 2: Info Física e Habilidades */}
            <PokemonInfo pokemon={pokemon} />

            {/* Componente 3: Estatísticas */}
            <PokemonStats stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </div>
  );
}
