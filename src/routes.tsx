import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import SinglePosterPage from "./pages/SinglePosterPage";
import PosterListPage from "./pages/PosterListPage";
import NotFound from "./pages/NotFoundPage";
import CreatePoster from "./pages/CreatePosterPage";

const routes = [
  { path: "/poster/:id", element: <SinglePosterPage/> },
  { path: "/create-poster", element: <CreatePoster/> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/", element: <PosterListPage /> },
  { component: <NotFound /> },
];

export default routes;