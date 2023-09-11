import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <Link to={`/movie/${index}`} key={index} className="col-md-4 mb-4">
          {/* <Link to={`/movie/${index}`} key={index} className="col-md-4 mb-4"> */}
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ movies }) => {
//   return (
//     <div className="row">
//       {movies.map((movie, index) => (
//         <MovieCard key={index} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;
