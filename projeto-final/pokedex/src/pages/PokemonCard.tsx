// import type { Pokemon } from "../types/pokemon";
// import { typeColors } from "../utils/typeColors";

// interface PokemonCardProps {
//   pokemon: Pokemon;
// }

// export function PokemonCard({ pokemon }: PokemonCardProps) {
//   // Pega a cor baseada no tipo principal
//   const mainType = pokemon.types[0].type.name;
//   const color = typeColors[mainType] || "#A8A878"; // Cor padrão se não achar

//   return (
//     <div
//       // Usamos style inline para a cor da borda, pois ela muda dinamicamente
//       style={{ borderColor: color }}
//       className="
//         w-full bg-white rounded-2xl border-4
//         flex flex-col items-center p-2
//         hover:shadow-xl transition-all cursor-pointer relative
//       "
//     >
//       {/* Cabeçalho do Card: ID e Tipos */}
//       <div className="w-full flex justify-between items-start px-2 mt-1">
//         <span style={{ color: color }} className="font-bold text-xs">
//           #{String(pokemon.id).padStart(3, "0")}
//         </span>

//         {/* Badges de Tipo */}
//         <div className="flex gap-1">
//           {pokemon.types.map((t) => (
//             <span
//               key={t.type.name}
//               style={{ backgroundColor: typeColors[t.type.name] }}
//               className="text-[10px] text-white px-2 py-0.5 rounded-full capitalize font-medium"
//             >
//               {t.type.name}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Imagem Centralizada */}
//       <div className="w-full flex justify-center -mt-4 mb-2">
//         <img
//           src={pokemon.sprites.other["official-artwork"].front_default}
//           alt={pokemon.name}
//           className="w-32 h-32 object-contain z-10"
//         />
//         {/* Pequeno brilho/fundo atrás da imagem (opcional, igual ao design) */}
//         <div
//           style={{ backgroundColor: color }}
//           className="absolute top-16 w-24 h-24 rounded-full opacity-20 blur-xl"
//         />
//       </div>

//       {/* Nome no Rodapé (Fundo colorido igual ao design) */}
//       <div
//         style={{ backgroundColor: color }}
//         className="w-full rounded-b-xl py-1 flex justify-center items-center mt-auto"
//       >
//         <span className="text-white font-bold capitalize text-sm">
//           {pokemon.name}
//         </span>
//       </div>
//     </div>
//   );
// }
