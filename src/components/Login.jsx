import React from "react";
import useTheme from "../contexts/theme";

function Login() {
  const { theme } = useTheme();
  return (
    <button className="flex gap-2 justify-center items-center py-1  px-4 rounded-lg bg-stone-200 hover:bg-stone-300  dark:text-stone-200  dark:bg-stone-900 dark:hover:bg-stone-800">
      <span className="text-xs">Logout</span>
    </button>
  );
}

export default Login;
