import React from "react";

import Loader from "../Loader/Loader";

const PokemonAvatar = ({ pokemon }) => {
  if (!pokemon.sprites) {
    return (
      <figure className="card__figure">
        <Loader />
      </figure>
    );
  }
  return (
    <figure className="card__figure">
      <img
        alt={pokemon.name}
        src={pokemon.sprites.other["official-artwork"].front_default}
        className="card__image"
      />
      <div className="card__image-circle"></div>
    </figure>
  );
};

export default PokemonAvatar;
