import type { Pokemon } from "../types/pokemon";
import { typeColors } from "../utils/typeColors";

// ---------------------------------------------------------------------------
// 1. DEFINIÇÃO DA INTERFACE (TYPESCRIPT)
// ---------------------------------------------------------------------------
// Aqui criamos um "contrato". Estamos dizendo ao componente:
// "Você SÓ pode aceitar um objeto chamado 'pokemon' que siga o formato da interface Pokemon".
// Isso impede que alguém tente passar um texto ou número solto para o card.
interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  // -------------------------------------------------------------------------
  // 2. LÓGICA DE CORES
  // -------------------------------------------------------------------------
  // A API devolve uma lista de tipos (ex: ['fire', 'flying']).
  // Pegamos sempre o primeiro (índice 0) para ser a cor principal do card.
  const mainType = pokemon.types[0].type.name;

  // Aqui buscamos a cor exata no nosso dicionário 'typeColors'.
  // O '??' é um operador de segurança: se o tipo não existir no dicionário,
  // usamos uma cor cinza (#666666) para o site não quebrar.
  const borderColor = typeColors[mainType] ?? "#666666";

  return (
    // -----------------------------------------------------------------------
    // 3. ESTRUTURA DO CARD (JSX)
    // -----------------------------------------------------------------------
    <div
      // APLICAÇÃO DE ESTILO DINÂMICO:
      // Usamos 'style={{ borderColor }}' porque o Tailwind não consegue adivinhar
      // cores que vêm de variáveis JavaScript. Para cores dinâmicas, style inline é mais seguro.
      style={{ borderColor: borderColor }}
      // CLASSES TAILWIND (ESTILIZAÇÃO):
      // w-full: Ocupa a largura disponível da coluna do grid.
      // bg-white: Fundo branco (conforme design).
      // rounded-xl: Bordas arredondadas médias.
      // border-4: Borda grossa colorida.
      // cursor-pointer: Mãozinha ao passar o mouse.
      // relative: Permite posicionar coisas (como o ID) de forma absoluta dentro dele.
      // transition-all hover:scale-105: Efeito suave de zoom ao passar o mouse.
      className="
        w-full bg-white rounded-xl border-4 
        flex flex-col items-center 
        relative overflow-hidden cursor-pointer 
        transition-all duration-300 hover:scale-105 hover:shadow-xl
      "
    >
      {/* CABEÇALHO DO CARD 
         Contém o ID (#001) na esquerda e os Tipos na direita.
      */}
      <div className="w-full flex justify-between items-center px-3 pt-2">
        {/* ID DO POKEMON */}
        <span style={{ color: borderColor }} className="font-bold text-xs">
          {/* TRATAMENTO DE STRING:
             Transforma o número 1 em "#001".
             .toString() -> vira texto "1"
             .padStart(3, '0') -> preenche com zeros à esquerda até ter 3 dígitos.
          */}
          #{pokemon.id.toString().padStart(3, "0")}
        </span>

        {/* LISTA DE TIPOS (BADGES) */}
        <div className="flex gap-1">
          {/* Mapeamos a lista de tipos para criar uma "etiqueta" para cada um.
             Ex: Se for [Grass, Poison], cria dois <span>.
          */}
          {pokemon.types.map((typeInfo) => (
            <span
              key={typeInfo.type.name} // O React exige uma chave única (key) em listas.
              style={{ backgroundColor: typeColors[typeInfo.type.name] }}
              className="text-[10px] text-white px-2 py-0.5 rounded-full capitalize font-medium"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* IMAGEM DO POKEMON 
         Centralizada e com tamanho fixo para não quebrar o layout.
      */}
      <div className="w-full flex justify-center py-2">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-28 h-28 object-contain z-10" // z-10 garante que a imagem fique "acima" de decorações
        />
      </div>

      {/* RODAPÉ COM O NOME 
         Fundo colorido ocupando toda a largura inferior.
      */}
      <div
        style={{ backgroundColor: borderColor }}
        className="w-full py-1.5 flex justify-center items-center mt-auto"
      >
        <span className="text-white font-bold capitalize text-sm tracking-wide">
          {pokemon.name}
        </span>
      </div>
    </div>
  );
}
