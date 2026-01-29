import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import "./index.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardOverview from "./components/DashbordOverview";
// import CallLogs from "./components/CallLogs";
//import Appointments from "./components/Appointments";
//import Settings from "./components/Settings";
import CallLogs from "./pages/CallLogs";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <DashboardOverview></DashboardOverview> },
      {
        path: "calls",
        element: <CallLogs></CallLogs>
      },
      {
        path:"appointments",
        element:<Appointments></Appointments>
      },
      {
        path: "settings",
        element:<Settings></Settings>
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
