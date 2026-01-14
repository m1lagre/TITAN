import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonById } from "../services/pokeApi";
import type { PokemonDetails as PokemonDetailsType } from "../types/pokemon";
import { ChevronLeft } from "lucide-react";
import { typeColors } from "../utils/typeColors";

import { PokemonHeader } from "../components/DetailsHeader";
import { PokemonInfo } from "../components/DetailsInfo";
import { PokemonStats } from "../components/DetailsStats";

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
        <div className="text-2xl font-bold text-slate-600 animate-pulse">
          Carregando...
        </div>
      </div>
    );

  if (!pokemon) return <div>Não encontrado</div>;

  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] || "#4BBA93";

  return (
    <div className="min-h-screen w-full bg-[#fee993] flex justify-center overflow-x-hidden">
      {/* CONTAINER MESTRE */}
      <div
        className="
        /* COMUM */
        flex flex-col relative mx-auto

        /* MOBILE (Figma) */
        w-full max-w-[423px]
        mt-[128px] gap-[24px] px-[16px]

        /* DESKTOP (Figma) */
        lg:max-w-[1198px]
        lg:mt-[64px] lg:gap-[48px] lg:px-0
      "
      >
        {/* BOTÃO VOLTAR */}
        <Link
          to="/"
          className="
            bg-white border-2 border-[#2B2B2B] rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform
            
            /* MOBILE */
            w-[50px] h-[50px] p-0
            
            /* DESKTOP */
            lg:w-[301px] lg:h-[64px] lg:gap-[16px] lg:p-[16px]
          "
        >
          <ChevronLeft className="text-[#2B2B2B]" size={24} strokeWidth={2.5} />
          {/* Texto só aparece no Desktop */}
          <span className="hidden lg:block font-bold text-xl text-[#2B2B2B]">
            Voltar para a galeria
          </span>
        </Link>

        {/* CARD DOS DETALHES (Container com Borda Gradiente) */}
        <div
          className="
            rounded-[32px] 
            shadow-[0px_4px_100px_0px_#00000052] 
            flex-shrink-0
            bg-gradient-to-t from-[rgba(169,210,135,0.8)] to-[#2BA379]

            /* MOBILE */
            w-full
            min-h-[991px]    /* height: 991px */
            p-[6px]          /* border-width: 6px */
            
            /* DESKTOP */
            lg:w-[1198px] 
            lg:h-[1687px] 
            lg:p-[12px]      /* border-width desktop */
          "
        >
          {/* MIOLO BRANCO */}
          <div className="w-full h-full relative overflow-hidden flex flex-col bg-[#FFFEF7] rounded-[24px]">
            {/* Componentes Internos */}
            <PokemonHeader pokemon={pokemon} color={color} />
            <PokemonInfo pokemon={pokemon} />
            <PokemonStats stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </div>
  );
}
