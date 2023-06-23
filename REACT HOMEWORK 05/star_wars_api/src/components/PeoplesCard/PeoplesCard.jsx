import { useNavigate } from "react-router";
const PeoplesCard = (props) => {
  const { people, id } = props;
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/people/${id + 1}`)}>
      <div>Name:{people.name}</div>
      <div>Height:{people.height}</div>
      <div>Gender:{people.gender}</div>
      <div>Birth Year:{people.birth_year}</div>
    </div>
  );
};

export default PeoplesCard;
