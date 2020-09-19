import React from "react";
import { connect } from 'react-redux';

import { fetchPokemons, fetchCategory } from "../../store/actionCreators/pokemon";

const CategoriesListItem = ({ category, url, active, setActive, fetchPokemons, fetchCategory }) => {
  const renderClassNameActive = () => {
    return active === category ? "categories-lsit__button-text--active" : "";
  };

  const fetchCategoryPokemon = () => {
    if (category !== active) {
      setActive(category);

      if(!url) {
        fetchPokemons();
      } else {
        fetchCategory(url);
      }
    }
  }

  return (
    <li className="categories-list__item">
      <button 
        onClick={fetchCategoryPokemon}
        className="categories-list__button">
        <span
          className={`categories-lsit__button-text ${renderClassNameActive()}`}>
          {category}
        </span>
      </button>
    </li>
  );
};

export default connect(null, { fetchPokemons, fetchCategory })(CategoriesListItem);
