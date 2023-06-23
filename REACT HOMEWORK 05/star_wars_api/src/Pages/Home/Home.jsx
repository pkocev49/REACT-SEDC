import { useEffect, useState } from "react";
import "./Home.css";
import FilmsCard from "../../components/FilmsCard/FilmsCard";

const Home = () => {
  const URL = "https://swapi.dev/api/films/";
  const [films, setFilms] = useState(null);

  const fetchFilms = async () => {
    try {
      const response = await fetch(URL);
      const res = await response.json();
      console.log("res", res);
      setFilms(res.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (films === null) {
      fetchFilms();
    }
  }, []);

  return (
    <div>
      <h1 className="heading">Films</h1>
      {films ? (
        <div className="films">
          {films.map((film) => (
            <FilmsCard key={film.title} film={film} />
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

export default Home;
