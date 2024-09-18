import WatchList from "./WatchList";

export default function MovieCard({
  poster_path,
  name,
  handleAddtowatchlist,
  movieObj,
  handleremovetowatchlist,
  WatchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < WatchList.length; i++) {
      if (WatchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  // console.log(`https://image.tmdb.org/t/p/original/${poster_path})`)
  return (
    <div
      className="h-[40vh] w-[175px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleremovetowatchlist(movieObj)}
          className="m-4 flex justify-center flex-col w-8 h-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtowatchlist(movieObj)}
          className="m-4 flex justify-center flex-col w-8 h-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}
