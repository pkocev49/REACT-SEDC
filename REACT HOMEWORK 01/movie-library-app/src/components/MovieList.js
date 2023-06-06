import "./MovieList.css";

const MoviesList = () => {
  const subHeading = "Most popular movies list";
  const welcomeMessage = "Welcome to my Movie Library App ";
  const popularMovies = [
    {
      id: 1,
      movieName: "John Wick",
      img: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    },
    {
      id: 2,
      movieName: "Home Alone 2",
      img: "https://c8.alamy.com/comp/BKD3W7/home-alone-2-lost-in-new-york-1992-poster-hm2-064-BKD3W7.jpg",
    },
    {
      id: 3,
      movieName: "Avengers",
      img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      id: 4,
      movieName: "Spider-Man",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg",
    },
    {
      id: 5,
      movieName: "Juzni Vetar-Na Granici",
      img: "https://m.media-amazon.com/images/M/MV5BM2ViYTAyNzMtZjA0NC00ZDYxLWI2OGQtMGQ3MmU4ODRlN2FhXkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 6,
      movieName: "Fast and Furious 5",
      img: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul30/image-170517-slfc2kl58i.jpg",
    },
    {
      id: 7,
      movieName: "Fast X",
      img: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 8,
      movieName: "Venom",
      img: "https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 9,
      movieName: "Kimetsu no Yaiba-The Movie: Mugen Train",
      img: "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
    },
    {
      id: 10,
      movieName: "Dumb and Dumber",
      img: "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="headerDiv">
        <h1>{welcomeMessage}</h1>
        <p>{subHeading}</p>
      </div>

      <ul className="ulContainer">
        {popularMovies.map((movie) => {
          return (
            <li className="liContainer" key={movie.id}>
              {movie.movieName}
              <img src={movie.img} alt={movie.movieName} width="150px" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
