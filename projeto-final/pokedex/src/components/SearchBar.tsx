import { Search } from "lucide-react";

// 1. A interface é a mesma: ele precisa dos dados para funcionar
interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div
      className="
        flex-1 
        h-[78px] 
        bg-[#FFFEF7]
        rounded-[50px] 
        border border-[#CDCDCD]
        flex items-center 
        px-[32px] 
        py-[24px] 
        gap-[24px]
        shadow-sm
      "
    >
      <Search style={{ color: "#9B9B9B" }} className="w-6 h-6" />

      <input
        type="text"
        placeholder="Pesquise seu Pokémon aqui..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          flex-1
          h-full 
          bg-transparent 
          outline-none
          border-none 
          text-[#9B9B9B]
          placeholder:text-slate-400 
          font-['Inter'] 
          font-medium 
          text-[20px]
        "
      />
    </div>
  );
}
