
const MovieCard = ({ title, poster }) => {
  return (
    <div className="movicard">
      <img src={poster} alt={title} />
      <p className="title">{title}</p>
    </div>
  );
};

export default MovieCard;
