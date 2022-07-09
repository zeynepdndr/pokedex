import { useContext, useState } from "react";
import PokemonContext from "../../store/pokemon-context";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
  // const dataPointValues = props.dataPoints.map((item) => parseInt(item.value));
  // const maxValue = Math.max(...dataPointValues);
  const pokemonCtx = useContext(PokemonContext);

  const [dataPoints, setDataPoints] = useState([]);

  if (
    pokemonCtx &&
    pokemonCtx !== undefined &&
    pokemonCtx.items &&
    pokemonCtx.items !== undefined
  ) {
    const values = pokemonCtx?.items.map((item) =>
      parseInt(item["weight"]["minimum"])
    );
    // setDataPoints(pokemonCtx.items);
  }

  return (
    <div className="chart">
      <ChartBar key={1} maxValue={100} value={10} label={""} />
    </div>
  );
};

export default Chart;
