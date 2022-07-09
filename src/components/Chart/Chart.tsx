import { useContext, useEffect, useState } from "react";
import PokemonContext from "../../store/pokemon-context";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = () => {
  // const dataPointValues = props.dataPoints.map((item) => parseInt(item.value));
  // const maxValue = Math.max(...dataPointValues);
  const pokemonCtx = useContext(PokemonContext);

  console.log("pokemonCtx:", pokemonCtx);

  const [dataPoints, setDataPoints] = useState<number[] | null>([]);

  const saveDataPointsHandler = () => {
    if (
      pokemonCtx &&
      pokemonCtx !== undefined &&
      pokemonCtx.items &&
      pokemonCtx.items !== undefined
    ) {
      const values = pokemonCtx?.items.map((item) =>
        parseInt(item["weight"]["minimum"])
      );
      setDataPoints(pokemonCtx.items);
      console.log("did");
    }
  };

  useEffect(() => {
    saveDataPointsHandler();
    console.log("dataPo:", dataPoints);
  }, [pokemonCtx.selectedItem]);

  return (
    <div className="chart">
      {dataPoints?.map((item) => (
        <ChartBar
          key={item["id"]}
          maxValue={20}
          value={parseInt(item["weight"]["minimum"])}
          label={item["name"]}
        />
      ))}
    </div>
  );
};

export default Chart;
