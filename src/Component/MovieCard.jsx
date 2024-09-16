export default function MovieCard({ poster_path, name }) {
  // console.log(`https://image.tmdb.org/t/p/original/${poster_path})`)
  return (
    <div
      className="h-[40vh] w-[175px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}
