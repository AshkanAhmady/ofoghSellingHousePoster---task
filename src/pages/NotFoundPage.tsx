import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not_found">
            <h1>404</h1>
            <h3>صفحه پیدا نشد</h3>
            <Link to="/">برگشت به لیست آگهی ها</Link>
        </div>
    );
};

export default NotFound;