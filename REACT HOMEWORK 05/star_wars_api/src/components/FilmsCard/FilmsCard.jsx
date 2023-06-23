import "./FilmCard.css";
const FilmsCard = (props) => {
  const { film } = props;
  return (
    <div className="filmCard">
      <div>
        <b>Ttile:{film.title}</b>
      </div>
      <div className="opening">Opening Crawl:{film.opening_crawl}</div>
      <div>Director: {film.director}</div>
      <div>Producer: {film.producer}</div>
      <div>
        <b>Release Date: {film.release_date}</b>
      </div>
    </div>
  );
};

export default FilmsCard;
