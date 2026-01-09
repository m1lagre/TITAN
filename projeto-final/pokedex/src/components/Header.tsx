import { Search } from "lucide-react"; // Ícone de lupa (se instalou lucide-react)

// IMPORTANDO AS IMAGENS
// O Vite entende que estamos puxando arquivos da pasta assets
import logoImg from "../assets/Pokedex.png";
import heroImg from "../assets/ash.png";

const colors = {
  dexBlue: "#3D7DCA",
};

export function Header() {
  return (
    <div className="w-full flex justify-center mt-6 px-4 overflow-x-hidden">
      {/* HEADER PAI (1760px) */}
      <header
        className="
        w-[1760px] 
        h-[530px] 
        rounded-[50px] 
        border border-[#FFFFFF]
        bg-[#F8F8F880] 
        relative shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]
        flex-shrink-0
        
      "
      >
        {/* ASH (Posição Absoluta mantida conforme seu código) */}
        <img
          src={heroImg}
          alt="Ash e Pokémons"
          className="absolute top-[8px] h-[498px] w-[420px] left-[1134px] object-contain z-0"
        />

        {/* DIV DE CONTEÚDO (O FILHO) - CORREÇÕES AQUI
            1. Adicionei 'flex flex-col': Agora o 'gap-[95px]' vai funcionar e empurrar a barra para baixo.
            2. z-10: Garante que fique acima de qualquer imagem de fundo.
        */}
        <div className="absolute w-[1590px] h-[387px] top-[118px] left-[85px] flex flex-col gap-[95px] z-10">
          {/* ITEM 1: LOGO */}
          <div className="flex justify-start">
            <img
              src={logoImg}
              alt="Pokédex Logo"
              className="w-[817px] h-[214px] object-contain"
            />
          </div>

          {/* ITEM 2: BARRA DE PESQUISA - CORREÇÕES VISUAIS
             1. bg-white: Fundo branco explícito.
             2. border-slate-200: Define uma cor cinza suave para a borda (tira o preto).
          */}
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
              className="
                flex-1
                h-full 
                bg-transparent 
                border-none 
                text-[#9B9B9B]
                placeholder:text-slate-400 
                font-['Inter'] 
                font-medium 
                text-[20px]
                text-colo
              "
            />
          </div>
        </div>
      </header>
    </div>
  );
}
