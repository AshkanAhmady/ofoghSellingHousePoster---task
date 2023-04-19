import { ChildsComponentsType } from "../types";
import Header from "./Header";

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center">
      <Header />
      <div className="flex-1 w-full p-4 max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
