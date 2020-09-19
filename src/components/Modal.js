import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { selectPokemon } from "../store/actionCreators/pokemon";

import "../assets/stylesheets/Modal.css";

const Modal = ({ pokemon, selectPokemon }) => {
  const renderStats = () => {
    return pokemon.stats.map((stat) => (
      <li key={stat.stat.name} className="stat-list__item">
        <span>{stat.stat.name}</span>
        <span>{stat.base_stat}</span>
      </li>
    ));
  };

  const renderModal = () => {
    if (!pokemon) {
      return null;
    }

    return (
      <div className="modal" onClick={() => selectPokemon(null)}>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <img
            alt={pokemon.name}
            src={pokemon.sprites.other["official-artwork"].front_default}
            className="modal__img"
          />
          <h2 className="modal__name">{pokemon.name.toUpperCase()}</h2>
          <ul className="stat-list">
            <li className="stat-list__item">
              <span>height</span>
              <span>{pokemon.height}</span>
            </li>
            <li className="stat-list__item">
              <span>weight</span>
              <span>{pokemon.weight}</span>
            </li>
            {renderStats()}
          </ul>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderModal(), document.querySelector("#modal"));
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemons.selectedPokemon,
  };
};

export default connect(mapStateToProps, { selectPokemon })(Modal);
