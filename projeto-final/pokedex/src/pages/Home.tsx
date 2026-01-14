import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";

const BACKGROUND_COLOR = "bg-gradient-to-r from-[#fee993] to-[#d6e8fe]";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
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

  const filteredPokemons = pokemons.filter((pokemon) => {
    const searchLower = search.toLowerCase();
    return (
      pokemon.name.toLowerCase().includes(searchLower) ||
      pokemon.id.toString().includes(searchLower)
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
    // 1. FUNDO GERAL (A cor de fundo ocupa a tela toda)
    <div
      className={`min-h-screen w-full flex justify-center ${BACKGROUND_COLOR}`}
    >
      {/* 2. DIV PAI (O Layout que você me passou) */}
      <div
        className="
          flex flex-col items-center
          relative

          /* --- MOBILE  --- */
          w-full max-w-[423px]  
          min-h-[871px]        
          mt-[64px]           
          px-[16px]       
          gap-[40px]         

          /* --- DESKTOP  --- */
          lg:max-w-[1920px] 
          lg:min-h-[2487px] 
          lg:mt-0 
          lg:px-0 
          lg:gap-0
          
        "
      >
        {/* Cabeçalho */}
        <Header search={search} setSearch={setSearch} />

        {/* Main Content (Lista de Pokemons) */}
        <main
          className="
            flex flex-col items-center w-full 
            
            /* MOBILE:
               Removemos 'mt' e 'pb' aqui, pois o GAP do pai (40px) 
               já empurra a lista para baixo do header.
            */
            pb-8 

            /* DESKTOP:
               Mantemos as margens originais do desktop.
            */
            lg:mt-16 lg:pb-16
          "
        >
          <PokemonList pokemons={filteredPokemons} />
        </main>
      </div>
    </div>
  );
}
