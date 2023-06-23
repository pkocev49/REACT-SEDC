import "./PlanetsCard.css";
const PlanetsCard = (props) => {
  const { planet } = props;
  return (
    <div>
      <div className="planet">
        <div>Name:{planet.name}</div>
        <div>Rotation Peiod:{planet.rotation_period}</div>
        <div>Orbital Period:{planet.orbital_period}</div>
        <div>Diameter:{planet.diameter}</div>
        <div>Climate:{planet.climate}</div>
        <div>Gravity:{planet.gravity}</div>
        <div>Terrain:{planet.terrain}</div>
        <div>Surface Water:{planet.surface_water}</div>
        <div>Population:{planet.population}</div>
      </div>
    </div>
  );
};

export default PlanetsCard;
