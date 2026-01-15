import { useState, useEffect } from "react";

// Nome do evento que vamos disparar quando alguém favoritar
const FAVORITES_UPDATED = "favorites-updated";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("pokedex_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Função que recarrega os dados do LocalStorage
    function updateState() {
      const saved = localStorage.getItem("pokedex_favorites");
      setFavorites(saved ? JSON.parse(saved) : []);
    }

    // O hook fica ouvindo: "Alguém gritou que os favoritos mudaram?"
    window.addEventListener(FAVORITES_UPDATED, updateState);

    // Opcional: ouve mudanças feitas em outras abas do navegador
    window.addEventListener("storage", updateState);

    return () => {
      window.removeEventListener(FAVORITES_UPDATED, updateState);
      window.removeEventListener("storage", updateState);
    };
  }, []);

  function toggleFavorite(id: number) {
    // 1. Ler o que já está salvo direto do "banco" (localStorage)
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

    // 2. Salva a nova lista
    localStorage.setItem("pokedex_favorites", JSON.stringify(newList));

    // 3. AVISA TODO MUNDO! (Dispara o evento)
    // Isso faz a Home ouvir e se atualizar instantaneamente
    window.dispatchEvent(new Event(FAVORITES_UPDATED));
  }

  function isFavorite(id: number) {
    return favorites.includes(id);
  }

  return { favorites, toggleFavorite, isFavorite };
}
