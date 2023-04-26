import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import SinglePosterPage from "./pages/SinglePosterPage";
import PosterListPage from "./pages/PosterListPage";
import NotFound from "./pages/NotFoundPage";
import CreatePoster from "./pages/CreatePosterPage";
import { Navigate } from "react-router";
import { useUser } from "context/authContext/UserProvider";
import EditPosterPage from "pages/EditPosterPage";


export const IsAuthed = ({ children }: any) => {
  const user = useUser()

  return (user ? children : <Navigate to="/login" />);
}

export const IsGuest = ({ children }: any) => {
  const user = useUser()
  return (!user ? children : <Navigate to="/" />);
}


const routes = [
  { path: "/poster/edit/:id", element: <IsAuthed><EditPosterPage /></IsAuthed> },
  { path: "/poster/:id", element: <SinglePosterPage /> },
  { path: "/create-poster", element: <IsAuthed><CreatePoster /></IsAuthed> },
  { path: "/login", element: <IsGuest><LoginPage /></IsGuest> },
  { path: "/register", element: <IsGuest><RegisterPage /></IsGuest> },
  { path: "/", element: <PosterListPage /> },
  { component: <NotFound /> },
];

export default routes;