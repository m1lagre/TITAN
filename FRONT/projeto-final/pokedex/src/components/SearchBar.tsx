import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div
      className="

        w-full
        bg-[#FFFEF7]
        rounded-[50px]
        border border-[#CDCDCD]
        flex items-center
        shadow-sm

        /* MOBILE */
        h-[59px]
        px-[24px]
        py-[8px]
        gap-[16px]

        /* DESKTOP  */
        lg:w-[1590px]
        lg:h-[78px]
        lg:px-[32px]
        lg:py-[24px]
        lg:gap-[24px]
      "
    >
      <Search style={{ color: "#9B9B9B" }} className="w-5 h-5 lg:w-6 lg:h-6" />

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
          
          text-[16px] lg:text-[20px]
        "
      />
    </div>
  );
}
