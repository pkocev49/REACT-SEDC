import "./Card.css";

const Card = ({ title, heading, content, img }) => {
  return (
    <div className="card-conteiner">
      <h2>{title}</h2>
      <h3>{heading}</h3>
      <p>{content}</p>
      <img src={img} alt="" width="200px" height="200px" />
    </div>
  );
};

export default Card;
