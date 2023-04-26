import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "context/authContext/UserProvider";
import PostersProvider from "context/posterContext/PosterProvider";

function App() {
  return (
    <UserProvider>
      <PostersProvider>
        <Layout>
          <Routes>
            {routes.map((route, index) => <Route key={index} {...route} />)}
          </Routes>
          <ToastContainer />
        </Layout>
      </PostersProvider>
    </UserProvider>
  );
}

export default App;
