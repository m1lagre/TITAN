# 📘 Pokédex — React + PokeAPI

Este projeto é uma **Pokédex completa**, desenvolvida em **React com TypeScript**, que consome dados da **PokeAPI** e oferece uma experiência rica de navegação, busca, favoritos e visualização detalhada dos Pokémons.

---

## 🚀 Funcionalidades

- 📋 Listagem de Pokémons
- 🔍 Busca por nome ou ID
- ❤️ Sistema de favoritos (persistente)
- ♾️ Scroll infinito
- 📄 Página de detalhes do Pokémon
- 🎨 Interface responsiva (Mobile e Desktop)
- 🌈 Cores dinâmicas baseadas no tipo do Pokémon

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **React Router**
- **Axios**
- **Tailwind CSS**
- **PokeAPI**
- **LocalStorage**
- **IntersectionObserver API**

---

## 🧠 Arquitetura do Projeto

O projeto está organizado em camadas bem definidas:

src/

├─ pages/ → Páginas principais (Home e Details)

├─ components/ → Componentes reutilizáveis

├─ hooks/ → Hooks customizados

├─ services/ → Comunicação com API

├─ utils/ → Funções auxiliares

├─ types/ → Tipagens TypeScript


### Home (`/`)
- Busca todos os Pokémons da API
- Possui busca dinâmica
- Implementa scroll infinito
- Mostra mensagens de UX para estados vazios
- Permite favoritar Pokémons

### Details (`/pokemon/:id`)
- Busca dados completos de um Pokémon
- Mostra informações físicas, habilidades e estatísticas
- Layout e cores baseadas no tipo principal

---

## ❤️ Sistema de Favoritos

- Utiliza **LocalStorage**
- Implementado através de um **hook customizado**
- Sincroniza favoritos entre componentes usando eventos customizados

---

## 🌐 Consumo da API

- Axios configurado com `baseURL`
- Listagem geral + requisições paralelas com `Promise.all`
- Busca individual por ID

---

## ▶️ Como executar o projeto

```bash
npm install
npm run dev
