import React from "react";

// {
//   id: "UG9rZW1vbjowMDE=",
//   number: "001",
//   name: "Bulbasaur",
//   image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
//   classification: "Seed Pokémon",
//   weight: {
//     minimum: "6.04kg",
//     maximum: "7.76kg",
//   },
//   height: {
//     minimum: "0.61m",
//     maximum: "0.79m",
//   },
// },
const PokemonContext = React.createContext({
  selectedItem: {
    name: "",
    number: "",
    classification: "",
    image: "",
    weight: {},
    height: {},
  },
  items: [],
  selectItem: (id) => {},
  addItems: (items) => {},
  onLogin: () => {},
  isLoggedIn: false,
});

export default PokemonContext;
