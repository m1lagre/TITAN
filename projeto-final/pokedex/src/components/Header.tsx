import logoImg from "../assets/Pokedex.png";
import heroImg from "../assets/ash.png";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

export function Header({ search, setSearch }: HeaderProps) {
  return (
    <div className="w-full flex justify-center mt-6 px-4 overflow-x-hidden">
      <header className="w-[1760px] h-[530px] rounded-[50px] border border-[#FFFFFF] bg-[#F8F8F880] relative shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)] flex-shrink-0">
        {/* Imagem do Ash */}
        <img
          src={heroImg}
          alt="Ash e Pokémons"
          className="absolute top-[8px] h-[498px] w-[420px] left-[1134px] object-contain z-0"
        />

        {/* Conteúdo da Esquerda */}
        <div className="absolute w-[1590px] h-[387px] top-[118px] left-[85px] flex flex-col gap-[95px] z-10">
          <div className="flex justify-start">
            <img
              src={logoImg}
              alt="Pokédex Logo"
              className="w-[817px] h-[214px] object-contain"
            />
          </div>

          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </header>
    </div>
  );
}
