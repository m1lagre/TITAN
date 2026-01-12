import React from "react"; // <--- Resolve o erro "React refers to a UMD global"
import ReactDOM from "react-dom/client"; // <--- Resolve o erro "Cannot find name ReactDOM"
import "./index.css";

// Importando o Roteador
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando as Páginas
import { Home } from "./pages/Home";
// Verifique se o nome do seu arquivo é 'Details.tsx' ou 'PokemonDetails.tsx'
// e ajuste o import abaixo se necessário:
import { PokemonDetails } from "./pages/Details";

// 1. Criando as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
]);

// 2. Renderizando APENAS o RouterProvider (Apaguei o <App /> antigo)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
