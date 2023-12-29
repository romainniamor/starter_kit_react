import { useState, useEffect } from "react";

import SwitchButton from "./components/SwitchTheme";
//import create browser router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useTheme from "./contexts/theme";
import Home from "./pages/home";
import Create from "./pages/create";
import Popular from "./pages/popular";
import Root from "./routes/root";
import PageError from "./pages/error";
import View from "./pages/home/viewClash";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { path: "", element: <Home /> },

      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      { path: "/clash", element: <View /> },
    ],
  },
]);

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(theme);
    console.log("Current theme: ", theme);
  }, [theme]);

  return (
    <div className="min-h-screen  relative w-full flex flex-col dark:bg-neutral-950 bg-stone-100 font-sans">
      <SignUp />
      <header>
        <nav className="w-full flex justify-between items-center px-10 py-2 gap-5 border-b-2 border-stone-200 dark:border-neutral-900">
          <h1 className=" text-xl text-stone-900 dark:text-stone-100">
            DevTally
          </h1>
          <div className="flex gap-2 ">
            <Login />
            <SwitchButton />
          </div>
        </nav>
      </header>

      <div className=" flex grow justify-center m-auto mt-5 w-3/5 ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
