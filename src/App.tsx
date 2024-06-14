import { loader as HomeLoader } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as productsid } from "./pages/productsid";
import {
  HomeLayout,
  Home,
  Productsid,
  Error,
  Cart
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/products/:id",
          element: <Productsid />,
          loader: productsid,
        },
        {
          path: "/cart",
          element: <Cart />,
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
