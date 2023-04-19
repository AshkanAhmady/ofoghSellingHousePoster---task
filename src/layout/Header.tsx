const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="flex justify-between p-4 max-w-screen-xl mx-auto">
        <h1 className="font-bold">آگهی فروش مسکن</h1>
        <ul className="flex items-center gap-x-6">
          <li>
            ثبت نام
          </li>
          <li>
            ورود
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
