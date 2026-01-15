import logoImg from "../assets/Pokedex1.png";
import heroImg from "../assets/ash.png";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

export function Header({ search, setSearch }: HeaderProps) {
  return (
    <div className="w-full flex justify-center">
      <header
        className="
          
      relative
      w-full
      max-w-[1760px]
      h-auto
      rounded-[28px]
      border border-[#FFFFFF]
      bg-[#F8F8F880]
      shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]

      /* MOBILE */
      mt-6
      px-4
      py-6

      /* DESKTOP */
      lg:w-[1760px]
      lg:h-[530px]
      lg:rounded-[50px]
      lg:px-0
      lg:py-0
      lg:mt-0
        "
      >
        {/* --- IMAGEM DO ASH (Oculta no Mobile) --- */}
        <img
          src={heroImg}
          alt="Ash e Pokémons"
          className="
            hidden lg:block
            absolute
            lg:top-[8px] lg:left-[1134px]
            lg:w-[498px] lg:h-[420px]
            object-contain
            z-0
          "
        />

        {/* (Logo + frase + Busca) */}
        <div
          className="
            z-10
            relative w-full h-auto flex flex-col items-center px-4 
            lg:absolute lg:top-[118px] lg:left-[85px]
            lg:w-[1590px] lg:h-[387px]
            lg:items-start lg:px-0
            lg:gap-0
          "
        >
          <img
            src={logoImg}
            alt="Pokédex Logo"
            className="object-contain w-auto max-w-[375px] h-auto  lg:w-auto lg:max-w-[772px]"
          />

          <div className="h-[16px] lg:h-[40px]" />
          <h2
            className="
                font-['Inter']
                font-extrabold
                text-[16px]
                leading-[120%]
                text-center
                text-transparent
                bg-clip-text
                bg-gradient-to-r from-[#E6B800] to-[#4A90E2]

                /* MOBILE */
                w-[364px]
                h-[19px]

                /* DESKTOP (FIGMA) */
                lg:text-[32px]
                lg:w-[756px]
                lg:h-[38px]
                lg:max-w-none
              "
          >
            Descubra e explore seus Pokémons favoritos!
          </h2>
          <div className="h-[24px] lg:h-[64px]" />

          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full lg:w-[1590px]">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
