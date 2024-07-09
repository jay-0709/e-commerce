import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../page/landingpage/LandingPage";
import Carts from "../page/carts/Carts";
import CheckoutPage from "../checkout/CheckoutPage";
import Success from "../success/Success";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
    {
        path: "/carts",
        element: <Carts />
    },
    {
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        path: "/success",
        element: <Success />
    }
  ]);

  export default router;