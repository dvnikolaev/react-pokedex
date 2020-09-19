import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../store/actionCreators/pokemon";

import Modal from "./Modal";
import CardPokemon from "./Card/CardPokemon";
import "../assets/stylesheets/PokemonsList.css";

const PokemonList = ({ fetchPokemons, pokemons }) => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  if (!pokemons) {
    return null;
  }
  const pokemonList = () => {
    if (!pokemons) {
      return null;
    }
    return pokemons.map((pokemon) => {
      return <CardPokemon name={pokemon.name} key={pokemon.name} />;
    });
  };

  return (
    <>
      <Modal></Modal>
      <div className="pokemon__list">{pokemonList()}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
  };
};

const mapDispatchToProps = {
  fetchPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
