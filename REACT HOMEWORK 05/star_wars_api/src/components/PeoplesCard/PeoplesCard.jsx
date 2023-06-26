import { useNavigate } from "react-router";
const PeoplesCard = (props) => {
  const { people, id } = props;
  const navigate = useNavigate();
  const modifiedId = id.replace("https://swapi.dev/api/people/", "");
  return (
    <div className="card" onClick={() => navigate(`/people/${modifiedId}`)}>
      <div>Name:{people.name}</div>
      <div>Height:{people.height}</div>
      <div>Gender:{people.gender}</div>
      <div>Birth Year:{people.birth_year}</div>
    </div>
  );
};

export default PeoplesCard;
