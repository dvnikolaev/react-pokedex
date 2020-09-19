import React, { useState } from "react";
import { connect } from "react-redux";

import "../../assets/stylesheets/Search.css";
import {
  fetchPokemon,
  fetchPokemons,
} from "../../store/actionCreators/pokemon";

const Search = ({ pokemons, fetchPokemon, fetchPokemons }) => {
  const [pokemon, setPokemon] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (pokemon.trim()) {
      fetchPokemon(pokemon.trim());
    } else if (!pokemons.length || pokemons.length === 1) {
      fetchPokemons();
    }
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Искать покемона"
        className="search__input"
        onChange={(e) => setPokemon(e.target.value)}
        value={pokemon}
      />
      <button type="submit" className="search__button">
        Искать
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
  };
};

const mapDispatchToProps = {
  fetchPokemon,
  fetchPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
