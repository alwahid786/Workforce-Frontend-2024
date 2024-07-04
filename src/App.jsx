import { Suspense, lazy } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalLoader from "./components/layout/GlobalLoader";
const Users = lazy(() => import("./pages/users"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgetPassword = lazy(() => import("./pages/auth/ForgetPassword"));
const Home = lazy(() => import('./pages/users/dashboard/home/Home'))

function App() {
  const loader = <GlobalLoader />;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={loader}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/forget-password"
          element={
            <Suspense fallback={loader}>
              <ForgetPassword />
            </Suspense>
          }
        />
        <Route
          path="/users"
          element={
            <Suspense fallback={loader}>
              <Users />
            </Suspense>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Suspense fallback={loader}>
            <Home />
          </Suspense> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
