import { useEffect, useState } from "react";
import "./People.css";
import PeoplesCard from "../../components/PeoplesCard/PeoplesCard";

const People = () => {
  const URL = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPeople = async () => {
    setIsLoading(true);
    try {
      const response1 = await fetch(`${URL}?page=${page}`);
      const response2 = await fetch(`${URL}?page=${page + 1}`);
      const data1 = await response1.json();
      const data2 = await response2.json();
      const allPeople = [...data1.results, ...data2.results];
      setPeople(allPeople);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, [page]);

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="heading">
        <h1>Star Wars Characters</h1>
      </div>
      {isLoading ? (
        <div className="loading">
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
      ) : (
        <div className="people">
          {people.map((p, index) => (
            <PeoplesCard key={index} people={p} id={index} />
          ))}
        </div>
      )}
      <div className="btnDiv">
        <button className="prev" onClick={prevPage}>
          Previous
        </button>
        <button className="next" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default People;
