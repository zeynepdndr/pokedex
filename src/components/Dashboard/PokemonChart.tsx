import Chart from "../Chart/Chart";
import { useContext } from "react";
import PokemonContext from "../../store/pokemon-context";

const PokemonChart = (props) => {
  const pokemonCtx = useContext(PokemonContext);
  const { selectedItem: selectedPokemon, items: allPokemons } = pokemonCtx;

  console.log("pokemonCtx", allPokemons);

  const ık = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const chartData = Array.from(
    Array(allPokemons.length).keys(),
    (_, i) => i + 1
  );

  console.log("all", allPokemons);
  const entries = new Map();
  entries["bb"] = allPokemons[0]["name"];
  // const n = allPokemons.map((pokemon) => {
  //   // chartData[name].value += pokemon.weight;
  //   entries[`${pokemon.name}`] = pokemon;
  //   return entries;
  // });

  console.log("n:", entries);

  return <Chart dataPoints={chartData} />;
};

export default PokemonChart;
