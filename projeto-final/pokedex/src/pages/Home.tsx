import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "../components/PokemonCard";
import { Header } from "../components/Header";

const BACKGROUND_COLOR = "bg-gradient-to-r from-[#fee993] to-[#d6e8fe]";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (error) {
        console.error("Erro na API:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // --- CORREÇÃO: DIVIDIR EM GRUPOS DE 3 ---
  const chunkedPokemons = [];
  for (let i = 0; i < pokemons.length; i += 3) {
    chunkedPokemons.push(pokemons.slice(i, i + 3));
  }

  if (loading)
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${BACKGROUND_COLOR}`}
      >
        <div className="text-2xl font-bold text-slate-600 animate-pulse">
          Carregando Pokédex...
        </div>
      </div>
    );

  return (
    <div
      className={`min-h-screen w-full font-sans pb-32 flex flex-col items-center overflow-x-hidden ${BACKGROUND_COLOR}`}
    >
      <Header />

      {/* CONTAINER PRINCIPAL */}
      <main className="flex flex-col items-center w-full mt-16 gap-8">
        {/* Mapeando as linhas (Cada 'row' tem 3 pokemons) */}
        {chunkedPokemons.map((row, index) => (
          <div
            key={index}
            className="
              /* LAYOUT DA FILEIRA (Conforme seu print do Figma) */
              w-[1760px]         /* Width Fixed */
              h-[530px]          /* Height Hug/Fixed */
              
              flex               /* Layout Horizontal */
              flex-row 
              gap-[20px]         /* Gap exato do Figma */
              
              items-center       /* Centraliza verticalmente */
              justify-center     /* Centraliza o grupo de 3 no meio dos 1760px */
            "
          >
            {row.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
