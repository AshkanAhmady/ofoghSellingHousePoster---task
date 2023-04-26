import { Link } from "react-router-dom";
import {
    ArrowRightIcon
} from "@heroicons/react/24/outline";

const Poster: React.FC<any> = ({ poster }) => {

    return (
        <div className="w-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{poster.address}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{poster.description}</p>
                <div className="w-full flex justify-end">
                    <Link to={`/poster/${poster.id}`} className="inline-flex items-center px-3 py-2 gap-x-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <ArrowRightIcon className={`w-4 h-4 stroke-white`} />
                        <span>بیشتر</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Poster;