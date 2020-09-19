import { FETCH_POKEMONS, FETCH_POKEMON, SELECT_POKEMON, FETCH_CATEGORY } from "../actions/pokemon";

const initialState = {
  pokemons: [],
  otherPokemons: [],
  next: null,
  prev: null,
  selectedPokemon: null
}

const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.results,
        prev: action.payload.prev,
        next: action.payload.next
      }
    case FETCH_POKEMON:
      return {
        ...state,
        pokemons: [action.payload],
        prev: null,
        next: null
      }
    case SELECT_POKEMON:
      return {...state, selectedPokemon: action.payload}
    case FETCH_CATEGORY:
      return {
        ...state,
        pokemons: action.payload.results,
        prev: action.payload.prev,
        next: action.payload.next
      }
    default:
      return state;
  }
}

export default pokemonReducer;