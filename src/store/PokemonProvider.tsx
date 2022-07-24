import { useReducer } from "react";
import PokemonContext from "./pokemon-context";

const defaultPokemonState = {
  selectedItem: null,
  items: [],
  isLoggedIn: false,
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "ADD_ITEMS":
      return { ...state, items: action.payload };
    case "SELECT_ITEM":
      return { ...state, selectedItem: action.payload };

    default:
      return state;
  }
};

const PokemonProvider = (props) => {
  const [pokemonState, dispatchPokemonAction] = useReducer(
    pokemonReducer,
    defaultPokemonState
  );
  const selectItemHandler = (item) => {
    dispatchPokemonAction({ type: "SELECT_ITEM", payload: item });
  };
  const addItemsHandler = (items) => {
    dispatchPokemonAction({ type: "ADD_ITEMS", payload: items });
  };
  const loginHandler = () => {
    dispatchPokemonAction({ type: "LOGIN" });
  };

  const pokemonContext = {
    selectedItem: pokemonState.selectedItem,
    selectItem: selectItemHandler,
    items: pokemonState.items,
    isLoggedIn: pokemonState.isLoggedIn,
    addItems: addItemsHandler,
    onLogin: loginHandler,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
