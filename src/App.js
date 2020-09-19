import React from "react";

import "./assets/stylesheets/App.css";

import PokemonsList from "./components/PokemonsList";
import ButtonsPage from "./components/ButtonsPage/ButtonsPage";
import Search from "./components/Search/Search";
import Categories from "./components/Categories/Categories";

const App = () => {
  return (
    <div>
      <Search />
      <Categories />
      <ButtonsPage />
      <PokemonsList />
    </div>
  );
};

export default App;
