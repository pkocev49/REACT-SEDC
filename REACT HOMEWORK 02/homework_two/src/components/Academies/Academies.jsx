import "./Academies.css";
import React from "react";
export const Academies = ({ academies, name }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="div-arr">
        {academies.map((academy) => (
          <div key={academy.id} className="inner-div">
            <h3>Name: {academy.name}</h3>
            <p>{academy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
