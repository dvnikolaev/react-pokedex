import axios from 'axios';
import {pokeapi} from "../../api/pokeapi";
import { FETCH_POKEMONS, FETCH_POKEMON, SELECT_POKEMON, FETCH_CATEGORY } from "../actions/pokemon";

export const fetchPokemons = (url = '?limit=25&offset=0') => async dispatch => {
  const { data } = await pokeapi.get(`/pokemon${url}`);
  const prev = data.previous ? data.previous.substring(data.previous.indexOf('?offset')) : null;
  const next = data.next ? data.next.substring(data.next.indexOf('?offset')) : null;

  dispatch({
    type: FETCH_POKEMONS,
    payload: {
      results: data.results,
      prev,
      next
    }
  })
}

export const fetchPokemon = (name) => async dispatch => {
  const { data } = await pokeapi.get(`/pokemon/${name}`);

  dispatch({
    type: FETCH_POKEMON,
    payload: data
  })
}

export const selectPokemon = pokemon => {
  if (pokemon) {
    document.getElementsByClassName('page__body')[0].style.overflow = 'hidden';
  } else {
    document.getElementsByClassName('page__body')[0].style.overflow = '';
  }

  return {
    type: SELECT_POKEMON,
    payload: pokemon
  }
}

export const fetchCategory = (url) => async dispatch => {
  const { data } = await axios.get(url);
  const pokemons = data.pokemon.map(item => {
    return item.pokemon;
  });

  dispatch({
    type: FETCH_CATEGORY,
    payload: {
      results: pokemons,
      prev: null,
      next: null
    }
  })
}