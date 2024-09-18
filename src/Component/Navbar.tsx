import Logo from "../Component/Images/travelLogo.png";
import{Link} from "react-router-dom"
// to avoid the reloading you can use the link tag instead of anchor tag
// it is taking the single page and reloading the component.

const Navbar = () => {
  return (
   <div className="flex border space-x-8 items-center pl-3 py-4">
    <img className='w-[50px]'src={Logo} alt=""/>
    <Link to="/" className="text-blue-500 text-3xl font-bold">Movies</Link>
    <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">WatchList</Link>
   </div>
  )
}

export default Navbar
