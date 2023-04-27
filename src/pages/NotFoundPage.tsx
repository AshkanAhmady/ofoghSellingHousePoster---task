import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className=" mt-10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl font-bold">404</h1>
            <h3 className="text-3xl">صفحه پیدا نشد</h3>
            <Link className="bg-blue-500 flex-1 text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/">برگشت به لیست آگهی ها</Link>
        </div>
    );
};

export default NotFound;