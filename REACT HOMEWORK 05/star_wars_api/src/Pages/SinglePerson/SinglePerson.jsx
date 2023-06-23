import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./SinglePerson.css";

const SinglePerson = () => {
  const [singlePerson, setSinglePerson] = useState(null);
  const [homeWorld, setHomeWorld] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const fetchSinglePerson = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const res = await response.json();
      console.log("Result ", res);
      setSinglePerson(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHomeWorld = async () => {
    try {
      if (singlePerson && singlePerson.homeworld) {
        const response = await fetch(singlePerson.homeworld);
        const res = await response.json();
        console.log("Homeworld Result ", res);
        setHomeWorld(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSinglePerson();
  }, []);

  useEffect(() => {
    fetchHomeWorld();
  }, [singlePerson]);

  return (
    <div>
      <div className="button" onClick={() => navigate(-1)}>
        Back
      </div>
      {singlePerson ? (
        <div className="container">
          <div className="person">
            <div>Name: {singlePerson.name}</div>
            <div>Height: {singlePerson.height}</div>
            <div>Gender: {singlePerson.gender}</div>
            <div>Birth Year: {singlePerson.birth_year}</div>
          </div>
          {homeWorld ? (
            <div className="home-world">
              <h3>Homeworld:</h3>
              <div>Name: {homeWorld.name}</div>
              <div>Diameter: {homeWorld.diameter}</div>
              <div>Climate: {homeWorld.climate}</div>
              <div>Gravity: {homeWorld.gravity}</div>
              <div>Terrain: {homeWorld.terrain}</div>
              <div>Population: {homeWorld.population}</div>
            </div>
          ) : (
            <div>Loading homeworld data...</div>
          )}
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

export default SinglePerson;
