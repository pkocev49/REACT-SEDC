import { useEffect, useState } from "react";
import PlanetsCard from "../../components/PlanetsCard/PlanetsCard";
import "./Planets.css";
const Planets = () => {
  const URL = "https://swapi.dev/api/planets";
  const [planets, setPlanets] = useState(null);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(URL);
      const res = await response.json();
      console.log("res", res);
      setPlanets(res.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (planets === null) {
      fetchPlanets();
    }
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>Planets</h1>
      </div>
      {planets ? (
        <div className="planets">
          {planets.map((planet, index) => (
            <PlanetsCard key={index} planet={planet} />
          ))}
        </div>
      ) : (
        <div className="loading">
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
      )}
    </div>
  );
};

export default Planets;
