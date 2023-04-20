import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => <Route key={index} {...route} />)}
      </Routes>
        <ToastContainer />
    </Layout>
  );
}

export default App;
