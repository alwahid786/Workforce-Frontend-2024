import { Suspense, lazy } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalLoader from "./components/layout/GlobalLoader";
const User = lazy(() => import("./pages/user"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgetPassword = lazy(() => import("./pages/auth/ForgetPassword"));
const Home = lazy(() => import("./pages/user/dashboard/home/Home"));
const ActiveDevices = lazy(() =>
  import("./pages/user/dashboard/activeDevices/ActiveDevices")
);
const Workforce = lazy(() =>
  import("./pages/user/dashboard/workforce/Workforce")
);
const DeviceData = lazy(() =>
  import("./pages/user/dashboard/deviceData/DeviceData")
);
const VehiclesData = lazy(() =>
  import("./pages/user/dashboard/vehiclesData/VehiclesData")
);
const Sos = lazy(() =>
  import("./pages/user/dashboard/sos/Sos")
);
const Projects = lazy(() => import("./pages/user/projects/Projects"));
const Realtime = lazy(() => import("./pages/user/maps/realtime/Realtime"));
const Geofence = lazy(() => import("./pages/user/maps/geofence/Geofence"));
const Vehicles = lazy(() => import("./pages/user/vehicles/Vehicles"));
const Users = lazy(() => import("./pages/user/users/Users"));
const Sensors = lazy(() => import("./pages/user/sensors/Sensors"));
const Violations = lazy(() => import("./pages/user/violations/Violations"));
const ScoreCard = lazy(() => import("./pages/user/scoreCard/ScoreCard"));
const Plans = lazy(() => import("./pages/user/plansAndPricing/Plans"));
const Transactions = lazy(() =>
  import("./pages/user/plansAndPricing/Transactions")
);
const UpdateProfile = lazy(() => import("./pages/user/settings/UpdateProfile"));

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
          path="/user"
          element={
            <Suspense fallback={loader}>
              <User />
            </Suspense>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route
            path="home"
            element={
              <Suspense fallback={loader}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="active-devices"
            element={
              <Suspense fallback={loader}>
                <ActiveDevices></ActiveDevices>
              </Suspense>
            }
          />
          <Route
            path="workforce"
            element={
              <Suspense fallback={loader}>
                <Workforce></Workforce>
              </Suspense>
            }
          />
          <Route
            path="device-data"
            element={
              <Suspense fallback={loader}>
                <DeviceData></DeviceData>
              </Suspense>
            }
          />
          <Route
            path="vehicles-data"
            element={
              <Suspense fallback={loader}>
                <VehiclesData></VehiclesData>
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={loader}>
                <Projects></Projects>
              </Suspense>
            }
          />
          <Route
            path="realtime"
            element={
              <Suspense fallback={loader}>
                <Realtime></Realtime>
              </Suspense>
            }
          />
          <Route
            path="geofence"
            element={
              <Suspense fallback={loader}>
                <Geofence></Geofence>
              </Suspense>
            }
          />
          <Route
            path="vehicles"
            element={
              <Suspense fallback={loader}>
                <Vehicles></Vehicles>
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense fallback={loader}>
                <Users></Users>
              </Suspense>
            }
          />
          <Route
            path="sensors"
            element={
              <Suspense fallback={loader}>
                <Sensors></Sensors>
              </Suspense>
            }
          />
          <Route
            path="violations"
            element={
              <Suspense fallback={loader}>
                <Violations></Violations>
              </Suspense>
            }
          />
          <Route
            path="score-card"
            element={
              <Suspense fallback={loader}>
                <ScoreCard></ScoreCard>
              </Suspense>
            }
          />
          <Route
            path="plans"
            element={
              <Suspense fallback={loader}>
                <Plans></Plans>
              </Suspense>
            }
          />
          <Route
            path="transactions"
            element={
              <Suspense fallback={loader}>
                <Transactions></Transactions>
              </Suspense>
            }
          />
          <Route
            path="update-profile"
            element={
              <Suspense fallback={loader}>
                <UpdateProfile></UpdateProfile>
              </Suspense>
            }
          />
          <Route
            path="Sos"
            element={
              <Suspense fallback={loader}>
                <Sos></Sos>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
