import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import  Home from './pages/Home.jsx'
import Fish from "./components/CartFish";
import { Transaction } from "./pages/Transaction";
import Customer from "./cust/Customer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fish",
    element: <Fish />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
