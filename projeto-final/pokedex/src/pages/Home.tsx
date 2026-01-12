import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";

const BACKGROUND_COLOR = "bg-gradient-to-r from-[#fee993] to-[#d6e8fe]";
export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Novo estado para a busca
  const [search, setSearch] = useState("");

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

  // 2. Lógica de Filtro (Nome ou ID)
  const filteredPokemons = pokemons.filter((pokemon) => {
    const searchLower = search.toLowerCase();
    // Verifica se o nome contem o texto OU se o ID contem o numero
    return (
      pokemon.name.toLowerCase().includes(searchLower) || // Verifica nome
      pokemon.id.toString().includes(searchLower) // Também verifica o ID como string
    );
  });

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
    <div className={`min-h-screen w-full ... ${BACKGROUND_COLOR}`}>
      {/* Cabeçalho com Busca */}
      <Header search={search} setSearch={setSearch} />

      <main className="flex flex-col items-center w-full mt-16 pb-16">
        {/* AQUI ESTÁ A MUDANÇA:
            A Home não sabe como o grid é desenhado. 
            Ela só diz: "PokemonList, toma aqui os dados filtrados e se vira".
        */}
        <PokemonList pokemons={filteredPokemons} />
      </main>
    </div>
  );
}
