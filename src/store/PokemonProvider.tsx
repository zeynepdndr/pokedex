import { useReducer } from "react";
import PokemonContext from "./pokemon-context";

const defaultPokemonState = {
  selectedItem: null,
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { items: action.payload };

    case "SELECT_ITEM":
      return { selectedItem: action.payload };

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const PokemonProvider = (props) => {
  const [pokemonState, dispatchBookAction] = useReducer(
    pokemonReducer,
    defaultPokemonState
  );
  const selectItemHandler = (item) => {
    dispatchBookAction({ type: "SELECT_ITEM", payload: item });
  };
  const removeItemFromBookHandler = (id) => {
    dispatchBookAction({ type: "REMOVE_ITEM", payload: id });
  };

  const pokemonContext = {
    selectedItem: pokemonState.selectedItem,
    selectItem: selectItemHandler,
    removeItem: removeItemFromBookHandler,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
