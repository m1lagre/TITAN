import { useEffect, useState, useRef } from "react";
import { getPokemons } from "../services/pokeApi";
import type { Pokemon } from "../types/pokemon";
import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { useFavorites } from "../hooks/useFavorite";
import { Loader } from "../components/Loader";

const BACKGROUND_COLOR = "bg-gradient-to-r from-[#fee892] to-[#d6e9ff]";

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ESTADO DO SCROLL: Começa com 12
  const [visibleCount, setVisibleCount] = useState(12);
  const sensorRef = useRef<HTMLDivElement>(null);

  const { favorites } = useFavorites();

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

  // Reseta para 12 se pesquisar algo novo
  useEffect(() => {
    setVisibleCount(12);
  }, [search]);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const searchLower = search.toLowerCase().trim();
    if (searchLower === "fav") {
      return favorites.includes(pokemon.id);
    }
    return (
      pokemon.name.toLowerCase().includes(searchLower) ||
      pokemon.id.toString().includes(searchLower)
    );
  });

  // SENSOR
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Carregando mais...");
          setVisibleCount((prev) => prev + 12);
        }
      },
      { rootMargin: "100px" }
    );
    if (sensorRef.current) observer.observe(sensorRef.current);
    return () => observer.disconnect();
  }, [loading, filteredPokemons, visibleCount]);

  // lista nova que só tem os itens do 0 até o visibleCount (12)
  const visiblePokemons = filteredPokemons.slice(0, visibleCount);

if (loading) {
  return (
    <Loader
      message="Carregando Pokédex..."
      backgroundClassName={BACKGROUND_COLOR}
    />
  );
}
  return (
    <div
      className={`min-h-screen w-full flex justify-center ${BACKGROUND_COLOR}`}
    >
      <div className="flex flex-col items-center relative w-full max-w-[423px] min-h-[871px] mt-[40px] px-[16px] gap-[40px] lg:max-w-[1920px] lg:min-h-[2487px] lg:mt-0 lg:px-0 lg:gap-0">
        <Header search={search} setSearch={setSearch} />

        <main className="flex flex-col items-center w-full pb-8 lg:mt-16 lg:pb-16">
          {search === "fav" && filteredPokemons.length === 0 && (
            <div className="text-center text-slate-600 font-bold mt-10 text-xl">
              Você ainda não tem favoritos. <br /> Clique no ❤️ das cartas!
            </div>
          )}

          {search !== "fav" && filteredPokemons.length === 0 && !loading && (
            <div className="text-center text-slate-500 font-bold mt-10 text-xl">
              Nenhum Pokémon encontrado.
            </div>
          )}

          <PokemonList pokemons={visiblePokemons} />

          {visibleCount < filteredPokemons.length && (
            <div
              ref={sensorRef}
              className="w-full h-20 mt-8 flex justify-center items-center"
            >
              <div className="w-6 h-6 border-4 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
