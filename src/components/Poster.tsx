import { Link } from "react-router-dom";

const Poster: React.FC<any> = ({ poster }) => {

    return (
        <div className="w-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5 h-full flex flex-col justify-between">
                <h5 className="mb-2 text-xl tracking-tight text-stone-900 dark:text-white">{poster.address}</h5>
                <div className="w-full flex justify-end">
                    <Link to={`/poster/${poster.id}`} className="inline-flex items-center px-3 py-2 gap-x-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span>بیشتر</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Poster;