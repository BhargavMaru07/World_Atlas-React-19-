import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
          path: "country/:id",
          element: <CountryDetail />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Info of All Future Flags in createBrowserRouter
// v7_relativeSplatPath: Changes relative route resolution within splat (*) routes.
// v7_skipActionErrorRevalidation: Skips revalidation after 4xx/5xx action errors.
// v7_startTransition: Wraps route state updates in React.startTransition, optimizing for concurrent rendering.
// v7_fetcherPersist: Alters the persistence behavior of fetchers (e.g., fetcher-based loaders).
// v7_normalizeFormMethod: Normalizes form submission methods to uppercase (POST, GET, etc.).
// v7_partialHydration: Changes the hydration behavior of the RouterProvider to enable partial hydration for faster page loads.
