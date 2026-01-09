export const typeColors: Record<string, string> = {
  grass: "#57C101cc",
  fire: "#E65000cc",
  water: "#3C77FFcc",
  poison: "#8D3A3Ccc",
  bug: "#ADA131cc",
  normal: "#868C6Ccc",
  electric: "#F0C000cc",
  ground: "#D9982Ecc",
  fairy: "#DC7272cc",
  fighting: "#E60000cc",
  psychic: "#FE4DA5cc",
  rock: "#5E4F4Fcc",
  ghost: "#2C1A7Acc",
  ice: "#009EBEcc",
  steel: "#B87777cc",
  flying: "#955CB9cc",
  dragon: "#5B0FBFcc",
};

// Função auxiliar para evitar erro se o tipo não existir
export const getTypeColor = (type: string) => typeColors[type] || "#666666";
