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
  const BACKGROUND_COLOR = "bg-gradient-to-r from-[#fee892] to-[#d6e9ff]";

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
    <div
      className={`min-h-screen w-full flex justify-center overflow-x-hidden ${BACKGROUND_COLOR}`}
    >
      {/* CONTAINER MESTRE */}
      <div
        className="
        /* COMUM */
        flex flex-col relative mx-auto

        /* MOBILE (Figma) */
        w-full max-w-[423px]
        px-[16px]
        mt-[64px] gap-[16px]
        mb-[24px]

        /* DESKTOP (Figma) */
        lg:max-w-[1198px]
        lg:mt-[64px] lg:gap-[48px] lg:px-0
      "
      >
        {/* BOTÃO VOLTAR */}
        <Link
          to="/"
          className={`
            /* COMUM */
            
            
            border-2 border-[#5D5D5D]
            rounded-[999999px]
            flex items-center justify-center
            gap-[16px]
            p-[16px]
            ${BACKGROUND_COLOR}

            transition-transform hover:scale-105

            /* MOBILE */
            w-[222px] h-[48px] left-[16px] top-[64px]

            /* DESKTOP */
            lg:w-[301px] lg:h-[64px] lg:p-[16px]
          `}
        >
          <ChevronLeft
            className="text-[#2B2B2B] w-6 h-6 lg:w-8 lg:h-8"
            strokeWidth={2.5}
          />
          <div
            className="
          /* COMUM */
          pr-[8px]
          gap-[10px]
          flex items-center
              
          /* MOBILE */
          w-[150px] h-[19px]  

          /* DESKTOP */
          lg:w-[221px] lg:h-[29px] 
          "
          >
            <span
              className="
            /* COMUM */
            color-[#452C91]
            font-['Inter'] font-medium
            tracking-[0%] align-bottom
            


            /* MOBILE */
            inline-block w-[142px] h-[19px]
            text-[16px] leading-[120%] 
            
            /* DESKTOP */
            lg:w-[213px] lg:h-[29px]
            lg:text-[24px]
            
            "
            >
              Voltar para galeria
            </span>
          </div>
        </Link>

        {/* CARD DOS DETALHES (Container com Borda Gradiente) */}
        <div
          style={{
            backgroundImage: `
      linear-gradient(
        to top,
        ${color},
        ${color} 60%,
        ${color}
      )
    `,
          }}
          className="
    rounded-[32px]
    shadow-[0px_4px_100px_0px_#00000052]
    flex-shrink-0

    /* MOBILE */
    w-full
    min-h-[991px]
    p-[6px]

    /* DESKTOP */
    lg:w-[1198px]
    lg:h-[1687px]
    lg:p-[12px]
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
