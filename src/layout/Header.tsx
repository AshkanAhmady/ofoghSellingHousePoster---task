import { Link } from "react-router-dom"
import {
  HomeIcon,
  PlusSmallIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation()

  console.log(location.pathname)

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="flex justify-between p-4 max-w-screen-xl mx-auto">
        <h1 className="font-bold"><Link to="/">آگهی فروش مسکن</Link></h1>
        <ul className="flex items-center gap-x-2">
          <li>
            <Link to="/">
              <HomeIcon className={`w-6 h-6 ${location.pathname === "/" ? "stroke-stone-800" : "stroke-stone-400"}`} />
            </Link>
          </li>
          <li>
            <Link to="/create-poster">
              <PlusSmallIcon className={`w-6 h-6 ${location.pathname === "/create-poster" ? "stroke-stone-800" : "stroke-stone-400"}`} />
            </Link>
          </li>
          <li>
            <Link to="/register">
              <UserPlusIcon className={`w-6 h-6 ${location.pathname === "/register" ? "stroke-stone-800" : "stroke-stone-400"}`} />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <ArrowLeftOnRectangleIcon className={`w-6 h-6 ${location.pathname === "/login" ? "stroke-stone-800" : "stroke-stone-400"}`} />
            </Link>
          </li>
          <li
            className="hidden"
          >
            <Link to="#">
              <ArrowRightOnRectangleIcon className="w-6 h-6 stroke-red-500" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
