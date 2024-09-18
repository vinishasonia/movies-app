import { type MovieType } from "../types/types";

type MovieCardProps = {
  handleAddtowatchlist: (movie: MovieType) => void;
  movie: MovieType;
  handleremovetowatchlist: (movie: MovieType) => void;
  watchlist: MovieType[];
};

export default function MovieCard({
  handleAddtowatchlist,
  movie,
  handleremovetowatchlist,
  watchlist,
}: MovieCardProps) {
  function doesContain(currentMovie: MovieType) {
    return watchlist?.find((movie) => movie.id === currentMovie?.id);
  }

  return (
    <div
      className="h-[40vh] w-[175px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div
          onClick={() => handleremovetowatchlist(movie)}
          className="m-4 flex justify-center flex-col w-8 h-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtowatchlist(movie)}
          className="m-4 flex justify-center flex-col w-8 h-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 ">
        {movie.title}
      </div>
    </div>
  );
}
