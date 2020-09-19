import React from "react";

const PokemonType = ({ types }) => {
  if (!types) {
    return null;
  }

  const renderType = types.map((type) => {
    return <span key={type.slot}> {type.type.name}</span>;
  });

  return <h3 className="card__types">Types:{renderType}</h3>;
};

export default PokemonType;
