import { useReducer } from "react";
import PokemonContext from "./pokemon-context";

const defaultPokemonState = {
  selectedItem: null,
  items: [],
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
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

  const pokemonContext = {
    selectedItem: pokemonState.selectedItem,
    selectItem: selectItemHandler,
    items: pokemonState.items,
    addItems: addItemsHandler,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
