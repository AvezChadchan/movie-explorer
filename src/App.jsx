import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoiveCard from "./components/MoiveCard";
import Favourites from "./components/Favourites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <MoiveCard />
        </>
      ),
    },
    {
      path: "/favourite",
      element: (
        <>
          <Navbar />
          <Favourites />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <h2>About Page</h2>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <h2>Contact Page</h2>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
