import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=908fd2e1b82f416194920aa8301ce27d&language=en-US&page=1
        `
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, []);
  return (
    <div className="p-5">
      <div className="text-2xl m-5 text-center font-bold ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-2 ">
        {movies.map((movieObj, index) => {
          return (
            <MovieCard
              key={index}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}
// Popular Movies:https://api.themoviedb.org/3/movie/popular?api_key=908fd2e1b82f416194920aa8301ce27d&language=en-US&page=1';
