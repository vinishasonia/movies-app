import { useEffect, useState } from "react";
import axios from "axios";
import { MovieType } from "../types/types";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

type MoviesProps = {
  handleAddtowatchlist: (movie: MovieType) => void;
  handleremovetowatchlist: (movie: MovieType) => void;
  watchlist: MovieType[];
};

export default function Movies({
  handleAddtowatchlist,
  handleremovetowatchlist,
  watchlist,
}: MoviesProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setpageNo((prevPageNo) => prevPageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=908fd2e1b82f416194920aa8301ce27d&language=en-US&page=${pageNo}
        `
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 text-center font-bold ">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-2 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleAddtowatchlist={handleAddtowatchlist}
              handleremovetowatchlist={handleremovetowatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}
// Popular Movies:https://api.themoviedb.org/3/movie/popular?api_key=908fd2e1b82f416194920aa8301ce27d&language=en-US&page=1';
