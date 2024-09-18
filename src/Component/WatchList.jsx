import BackgroundImage from "../Component/Images/tour-img05.jpg";
export default function WatchList() {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4 ">
          Actions
        </div>

        <div className="bg-gray-400/50 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center">
          Actions
        </div>
      </div>
      <div className="flex justify-center my-4 ">
        <input
          type="text"
          placeholder="search movie"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={BackgroundImage}
                  alt="image"
                />
                <div className="mx-10">the matrix </div>
              </td>
              <td>8.6</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-400">delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
