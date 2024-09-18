import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

export default function Movies({
  handleAddtowatchlist,
  handleremovetowatchlist,
  WatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setpageNo(pageNo + 1);
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
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtowatchlist={handleAddtowatchlist}
              handleremovetowatchlist={handleremovetowatchlist}
              WatchList={WatchList}
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
