import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="flex justify-between p-4 max-w-screen-xl mx-auto">
        <h1 className="font-bold"><Link to="/">آگهی فروش مسکن</Link></h1>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/create-poster">ایجاد آگهی</Link>
          </li>
          <li>
            <Link to="/register">ثبت نام</Link>
          </li>
          <li>
            <Link to="/login">ورود</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
