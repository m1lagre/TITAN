import type { Pokemon } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const mainType = pokemon.types[0].type.name;
  // Se não achar a cor, usa cinza.
  const color = typeColors[mainType] ?? "#666666";

  return (
    <div
      // APLICA A COR DA BORDA DINAMICAMENTE
      style={{ borderColor: color }}
      className="
        /* MEDIDAS EXATAS */
        w-[425px] 
        h-[500px] 
        rounded-[32px] 
        border-[4px]  /* Reduzi levemente para 4px para ficar mais elegante */
        
        /* ESTILO DO CARTÃO */
        bg-white      /* ISSO GARANTE O FUNDO BRANCO */
        relative 
        flex flex-col items-center /* IMPORTANTE: Alinha tudo no centro */
        justify-between            /* Distribui o espaço */
        
        /* INTERAÇÃO */
        cursor-pointer 
        transition-all duration-300
        hover:scale-105 
        hover:shadow-xl
        overflow-hidden
      "
    >
      {/* 1. CABEÇALHO (ID e Badges) */}
      <div className="w-full flex justify-between items-start px-8 pt-8 z-10">
        <span style={{ color: color }} className="font-bold text-xl">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>

        <div className="flex gap-2">
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              style={{ backgroundColor: typeColors[typeInfo.type.name] }}
              className="text-sm text-white px-4 py-1 rounded-full capitalize font-bold shadow-sm"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* 2. ÁREA DA IMAGEM COM O "GLOW" (AURA) */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        {/* --- AURA COLORIDA (O Segredo do Design) --- 
            Essa bola fica ATRÁS da imagem (z-0) e cria o fundo colorido suave.
        */}
        <div
          style={{ backgroundColor: color }}
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-40 z-0"
        />

        {/* IMAGEM DO POKEMON 
            z-10 garante que ela fique NA FRENTE da aura
        */}
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-64 h-64 object-contain drop-shadow-lg z-10 relative"
        />
      </div>

      {/* 3. NOME (Rodapé Limpo) */}
      <div className="pb-8 z-10">
        <span className="text-3xl font-extrabold capitalize tracking-wide text-slate-700">
          {pokemon.name}
        </span>
      </div>
    </div>
  );
}
