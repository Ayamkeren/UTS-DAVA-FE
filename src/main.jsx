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
    path: "/UTS-DAVA-FE/",
    element: <App />,
  },
  {
    path: "/UTS-DAVA-FE/fish",
    element: <Fish />,
  },
  {
    path: "/UTS-DAVA-FE/transaction",
    element: <Transaction />,
  },
  {
    path: "/UTS-DAVA-FE/customer",
    element: <Customer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
