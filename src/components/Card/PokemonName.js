import React from "react";

const PokemonName = ({ name }) => {
  if (!name) {
    return null;
  }

  return <h2 className="card__name">{name.toUpperCase()}</h2>;
};

export default PokemonName;
