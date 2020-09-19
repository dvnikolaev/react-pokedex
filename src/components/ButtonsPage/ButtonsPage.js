import React from "react";
import { connect } from "react-redux";

import TheButton from "./TheButton";

const ButtonsPage = ({ prev, next }) => {
  return (
    <div className="buttons__page">
      <TheButton url={prev} className="button__page-prev">Назад</TheButton>
      <TheButton url={next} className="button__page-next">Далее</TheButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prev: state.pokemons.prev,
    next: state.pokemons.next,
  };
};

export default connect(mapStateToProps)(ButtonsPage);
