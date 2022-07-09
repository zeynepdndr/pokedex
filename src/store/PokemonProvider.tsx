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
      return { isLoggedIn: true };
    case "ADD_ITEMS":
      return { items: action.payload };
    case "SELECT_ITEM":
      return { selectedItem: action.payload };

    default:
      return state;
  }
};

const PokemonProvider = (props) => {
  const [pokemonState, dispathPokemonAction] = useReducer(
    pokemonReducer,
    defaultPokemonState
  );
  const selectItemHandler = (item) => {
    dispathPokemonAction({ type: "SELECT_ITEM", payload: item });
  };
  const addItemsHandler = (items) => {
    dispathPokemonAction({ type: "ADD_ITEMS", payload: items });
  };
  const loginHandler = () => {
    dispathPokemonAction({ type: "LOGIN" });
  };

  const pokemonContext = {
    selectedItem: pokemonState.selectedItem,
    selectItem: selectItemHandler,
    items: pokemonState.items,
    isLoggedIn: pokemonState.isLoggedIn,
    addItems: addItemsHandler,
    loggedIn: loginHandler,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
