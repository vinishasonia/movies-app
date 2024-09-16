import BackgroundImage from "../Component/Images/tour-img05.jpg";

function Banner() {
  return (

    <div className='h-[20vh] md:h-[95vh]  bg-cover bg-center flex items-end'style={{backgroundImage:`url(${BackgroundImage})`}}>
    <div className="text-white text-2xl  text-center w-full bg-blue-900/60 p-4">averangers game</div>
    </div>

  )
}

export default Banner
