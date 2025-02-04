import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Meal from "./components/Meal";
import Mealinfo from "./components/Mealinfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SaveRecipe from "./components/SaveRecipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/meal/:name",
      element: (
        <div>
          <Navbar /> <Meal /> <Footer />
        </div>
      ),
    },
    {
      path: "/mealinfo/:id",
      element: (
        <div>
          <Navbar /> <Mealinfo /> <Footer />
        </div>
      ),
    },
    {
      path: "/save-recipe",
      element: (
        <div>
          <SaveRecipe /> <Footer />
        </div>
      ),
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
