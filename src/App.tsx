import { useState } from "react";
import WatchList from "./Component/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { type MovieType } from "./types/types";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Movies from "./Component/Movies";
// https://api.themoviedb.org/3/movie/550?api_key=908fd2e1b82f416194920aa8301ce27d
// 908fd2e1b82f416194920aa8301ce27d

function App() {
  const [watchlist, setWatchList] = useState<MovieType[]>([]);

  const handleAddtowatchlist = (selectedMovie: MovieType) => {
    setWatchList((prevWatchlist) => [...prevWatchlist, selectedMovie]);
  };

  const handleremovetowatchlist = (selectedMovie: MovieType) => {
    setWatchList((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id != selectedMovie.id)
    );
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtowatchlist={handleAddtowatchlist}
                  handleremovetowatchlist={handleremovetowatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
