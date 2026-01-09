import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { PokemonCard } from "../components/PokemonCard";
import { Header } from "../components/Header";

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
      pokemon.name.toLowerCase().includes(searchLower) ||
      pokemon.id.toString().includes(searchLower)
    );
  });

  // 3. Usamos 'filteredPokemons' aqui em vez de 'pokemons'
  const chunkedPokemons = [];
  for (let i = 0; i < filteredPokemons.length; i += 3) {
    chunkedPokemons.push(filteredPokemons.slice(i, i + 3));
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
      {/* 4. Passamos o estado e a função para o Header */}
      <Header search={search} setSearch={setSearch} />

      <main className="flex flex-col items-center w-full mt-16 gap-8">
        {/* Tratamento para busca sem resultados */}
        {filteredPokemons.length === 0 && (
          <div className="text-xl text-slate-500 font-bold mt-10">
            Nenhum Pokémon encontrado.
          </div>
        )}

        {chunkedPokemons.map((row, index) => (
          <div
            key={index}
            className="w-[1760px] h-[530px] flex flex-row gap-[20px] items-center justify-center"
          >
            {row.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
            {/* Dica: Se a última linha tiver menos de 3 itens, o justify-center vai centralizá-los. 
               Se quiser que fiquem alinhados à esquerda, mude justify-center para justify-start na última linha.
            */}
          </div>
        ))}
      </main>
    </div>
  );
}
