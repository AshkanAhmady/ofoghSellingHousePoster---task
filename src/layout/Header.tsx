import { Link, useNavigate } from "react-router-dom"
import {
  HomeIcon,
  PlusSmallIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom'
import { toast } from "react-toastify";
import { useUser, useUserActions } from "context/authContext/UserProvider";
import DarkModeBtn from "components/DarkModeBtn";

const Header = () => {
  const user = useUser()
  const location = useLocation()
  const dispatch: any = useUserActions()
  const navigate = useNavigate()

  const logoutHandler = () => {
    toast.success("با موفقیت از حساب کاربری خود خارج شدید")
    dispatch({ type: "REMOVE_USER_DATA" })
    navigate("/")
  }

  return (
    <header className="bg-white duration-150 dark:bg-gray-800 shadow-md w-full">
      <nav className="flex justify-between p-4 max-w-screen-xl mx-auto">
        <DarkModeBtn />
        <h1 className="font-bold text-xl text-gray-800 duration-150 dark:text-white"><Link to="/">آگهی فروش مسکن</Link></h1>
        <ul className="flex items-center gap-x-2">
          <li>
            <Link to="/">
              <HomeIcon className={`w-6 h-6 duration-150 ${location.pathname === "/" ? "stroke-gray-800 dark:stroke-white" : "stroke-gray-300 dark:stroke-gray-500"}`} />
            </Link>
          </li>
          {user && <li>
            <Link to="/create-poster">
              <PlusSmallIcon className={`w-6 h-6 duration-150 ${location.pathname === "/create-poster" ? "stroke-gray-800 dark:stroke-white" : "stroke-gray-300 dark:stroke-gray-500"}`} />
            </Link>
          </li>}
          {!user && <li>
            <Link to="/register">
              <UserPlusIcon className={`w-6 h-6 duration-150 ${location.pathname === "/register" ? "stroke-gray-800 dark:stroke-white" : "stroke-gray-300 dark:stroke-gray-500"}`} />
            </Link>
          </li>}
          {!user && <li>
            <Link to="/login">
              <ArrowLeftOnRectangleIcon className={`w-6 h-6 duration-150 ${location.pathname === "/login" ? "stroke-gray-800 dark:stroke-white" : "stroke-gray-300 dark:stroke-gray-500"}`} />
            </Link>
          </li>}
          {user && <li className="cursor-pointer" onClick={logoutHandler}>
            <ArrowRightOnRectangleIcon className="w-6 h-6 duration-150 stroke-red-500" />
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
