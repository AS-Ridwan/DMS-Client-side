import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map((route) => (
            <Route path={route.path} element={<route.Component />}></Route>
          ))}
          <Route element={<PrivateRoute />}>
            {PrivateRoutes.map((route) => (
              <Route path={route.path} element={<route.Component />}></Route>
            ))}
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
