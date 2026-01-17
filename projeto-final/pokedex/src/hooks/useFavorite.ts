import { useState, useEffect } from "react";

const FAVORITES_UPDATED = "favorites-updated";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("pokedex_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {

    function updateState() {
      const saved = localStorage.getItem("pokedex_favorites");
      setFavorites(saved ? JSON.parse(saved) : []);
    }


    window.addEventListener(FAVORITES_UPDATED, updateState);

    window.addEventListener("storage", updateState);

    return () => {
      window.removeEventListener(FAVORITES_UPDATED, updateState);
      window.removeEventListener("storage", updateState);
    };
  }, []);

  function toggleFavorite(id: number) {
    // Ler o que já está salvo direto localStorage
    const saved = localStorage.getItem("pokedex_favorites");
    const currentList = saved ? JSON.parse(saved) : [];

    let newList;
    if (currentList.includes(id)) {
      // Remove
      newList = currentList.filter((favId: number) => favId !== id);
    } else {
      // Adiciona
      newList = [...currentList, id];
    }

    //  Salva a nova lista
    localStorage.setItem("pokedex_favorites", JSON.stringify(newList));


    window.dispatchEvent(new Event(FAVORITES_UPDATED));
  }

  function isFavorite(id: number) {
    return favorites.includes(id);
  }

  return { favorites, toggleFavorite, isFavorite };
}
