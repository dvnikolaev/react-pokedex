import React from "react";
import { connect } from 'react-redux';

import { fetchPokemons } from "../../store/actionCreators/pokemon";
import "../../assets/stylesheets/TheButton.css";

const TheButton = ({ children, url, fetchPokemons, className }) => {
  const getPokemons = () => {
    fetchPokemons(url);
  }

  if(!url) {
    return null;
  }

  return (
    <button className={`button__page ${className}`} onClick={getPokemons}>
      {children}
    </button>
  );
};

const mapDispatchToProps = {
  fetchPokemons
}


export default connect(null, mapDispatchToProps)(TheButton);
