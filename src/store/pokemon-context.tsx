import React from "react";

const PokemonContext = React.createContext({
  selectedItem: { name: "", number: "" },
  selectItem: (id) => {},
  removeItem: (id) => {},
});

export default PokemonContext;
