import { useState } from "react";
import Banner from "./Component/Banner";
import Movies from "./Component/Movies";
import Navbar from "./Component/Navbar";
import WatchList from "./Component/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// https://api.themoviedb.org/3/movie/550?api_key=908fd2e1b82f416194920aa8301ce27d
// 908fd2e1b82f416194920aa8301ce27d

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtowatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleremovetowatchlist = (movieObj) => {
    let filteredwatchlist = watchlist.filter((Movies) => {
      return Movies.id != movieObj.id;
    });
    setWatchList(filteredwatchlist);
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
