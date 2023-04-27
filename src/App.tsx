import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from "context/authContext/UserProvider";

function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Routes>
        <ToastContainer />
      </Layout>
    </UserProvider>
  );
}

export default App;
