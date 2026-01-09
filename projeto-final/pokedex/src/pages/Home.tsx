import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "../components/PokemonCard";
import { Header } from "../components/Header";

// COR OFICIAL DO FIGMA/GUIA DE ESTILOS
// Esse é aquele tom creme clarinho que você mostrou na imagem "Main"
const BACKGROUND_GRADIENT_COLOR =
  "bg-gradient-to-r from-[#FFFDE7] to-[#E3F2FD]";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca os dados assim que a tela abre
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

  // Tela de Carregamento simples
  if (loading) {
    return (
      <div
        className={`min-h-screen flex justify-center items-center ${BACKGROUND_GRADIENT_COLOR}`}
      >
        <p className="text-xl font-bold text-slate-500 animate-pulse">
          Carregando Pokedéx...
        </p>
      </div>
    );
  }

  return (
    // CONTAINER PRINCIPAL
    // min-h-screen: Garante que o fundo creme vá até o final da tela, mesmo com pouco conteúdo.
    // font-sans: Aplica a fonte padrão bonita do Tailwind.
    <div className={`min-h-screen font-sans ${BACKGROUND_GRADIENT_COLOR}`}>
      {/* 1. O HEADER (Com Ash, Logo e Busca) fica no topo */}
      <Header />

      {/* 2. ÁREA DOS CARDS (GRID) */}
      {/* max-w-7xl mx-auto: Centraliza o conteúdo em telas grandes. */}
      {/* pt-20: PADDING SUPERIOR IMPORTANTE! 
         Como a barra de busca do Header flutua "meio dentro, meio fora", 
         precisamos empurrar os cards para baixo (80px/20rem) para eles não ficarem escondidos. */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        {/* GRID RESPONSIVO */}
        {/* Celular: 1 coluna | Tablet: 2 ou 3 colunas | PC: 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </div>
  );
}
