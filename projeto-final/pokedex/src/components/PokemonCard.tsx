import type { Pokemon } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] ?? "#666666";

  return (
    // CONTAINER PRINCIPAL DO CARD
    <Link to={`/pokemon/${pokemon.id}`}>
      <div
        // Mantendo seu fix de fundo branco e cor da borda
        style={{ borderColor: color, backgroundColor: "#FFFFFF" }}
        className="
          /* MEDIDAS GERAIS */
          w-[425px] 
          h-[500px] 
          rounded-[32px] 
          border-[4px]
          
          /* IMPORTANTE: relative para ser a referência dos filhos absolutos */
          relative 
          overflow-hidden
          
          /* Interação */
          cursor-pointer 
          transition-all duration-300
          hover:scale-105 
          hover:shadow-xl
        "
      >
        {/* --- AURA / GLOW (O Fundo Colorido) --- 
            Estratégia: Posicionar exatamente onde a imagem vai ficar, 
            mas atrás dela (z-0) e com muito desfoque.
        */}
        <div
          style={{ backgroundColor: color }}
          className="
            absolute 
            top-[92px] left-[64px]  /* Mesma posição da imagem */
            w-[296px] h-[296px]     /* Mesmo tamanho da imagem */
            rounded-full 
            blur-[60px]             /* Desfoque forte para criar a aura */
            opacity-60 
            z-0                     /* Fica atrás de tudo */
          "
        />

        {/* --- 3. HEADER DIV (ID e Tipos) --- 
            Medidas: w: 361; h: 34; top: 32px; left: 32px; justify-between;
        */}
        <div
          className="
          absolute 
          top-[32px] left-[32px] 
          w-[361px] h-[34px] 
          flex justify-between items-center
          z-20 /* Fica na frente da imagem e da aura */
        "
        >
          <span
            style={{ color: "#9B9B9B" }}
            className="font-['Inter'] font-bold text-xl"
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </span>

          <div className="flex gap-2">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                style={{
                  backgroundColor: typeColors[typeInfo.type.name],
                  color: "#FFFFFF",
                }}
                className="h-[34px]              /* Height: 34px */
                  px-[16px]             /* Padding Left/Right: 16px */
                  rounded-full          /* Radius: '1000000px' */
                  
                  /* ALINHAMENTO DO TEXTO */
                  flex items-center justify-center  /* Centraliza o texto na altura fixa */
                  
                  /* ESTILO DE TEXTO */
                  text-sm 
                  capitalize 
                  font-bold 
                  shadow-sm"
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* --- 1. IMAGEM DO POKEMON --- 
            Medidas: 296x296; top 92px; left 64px;
        */}
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="
            absolute 
            top-[92px] left-[64px] 
            w-[296px] h-[296px] 
            object-contain 
            drop-shadow-lg 
            z-10 /* Fica na frente da aura (z-0), mas atrás do header/footer (z-20) */
          "
        />

        {/* --- 2. NOME DO POKEMON (Footer Div) --- 
            Medidas: w: 425; h: 112; top: 388px; padding: 32px;
            Obs: O arredondamento inferior já é feito pelo container principal que tem overflow-hidden.
        */}
        <div
          className="
          absolute 
          top-[388px] left-0
          w-[425px] h-[112px] 
          flex items-center justify-center /* Centraliza o texto do nome */
          z-20
        "
        >
          <span className=" font-['Inter'] font-bold text-[28px] leading-[1.2] capitalize text-slate-700">
            {pokemon.name}
          </span>
        </div>
      </div>
    </Link> // <--- 3. FECHAMENTO DO LINK AQUI EMBAIXO
  );
}
