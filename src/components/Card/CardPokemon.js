import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { pokeapi } from "../../api/pokeapi";
import "../../assets/stylesheets/CardPokemon.css";
import { getClassForType } from "../../services";
import PokemonAvatar from "./PokemonAvatar";
import PokemonType from "./PokemonType";
import PokemonName from "./PokemonName";
import { selectPokemon } from "../../store/actionCreators/pokemon";

const CardPokemon = ({ name, selectPokemon }) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    let cleanupFunction = false;

    const fetchPokemon = async () => {
      try {
        const { data } = await pokeapi.get(`/pokemon/${name}`);
        if (!cleanupFunction) setPokemon(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchPokemon();

    return () => (cleanupFunction = true);
  }, []);

  let typeClass;

  if (pokemon.types) {
    typeClass = getClassForType(pokemon.types);
  }

  return (
    <button
      onClick={() => selectPokemon(pokemon)}
      className={`card ${typeClass}`}
    >
      <PokemonAvatar pokemon={pokemon} />
      <PokemonName name={pokemon.name} />
      <PokemonType types={pokemon.types} />
    </button>
  );
};

export default connect(null, { selectPokemon })(CardPokemon);
