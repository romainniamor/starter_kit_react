import { useState } from "react";

function SignUp() {
  const [formMode, setFormMode] = useState("signup");

  const toggleFormMode = () => {
    setFormMode(formMode === "signup" ? "login" : "signup");
    console.log("formMode", formMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formMode);
  };

  const inputStyle = () => {
    return "mt-2 border-2 w-full bg-stone-900 border-neutral-200 dark:border-neutral-900 rounded-md py-3 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500";
  };
  return (
    <div className="w-full h-full bg-stone-900/90 fixed left-0 top-0 z-10 flex justify-center items-center text-stone-300">
      <div className="w-4/12 p-10 border-2 border-stone-900  bg-stone-950 opacity-1 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-10 mb-10"
        >
          <h1 className="text-center text-4xl font-hello ">
            {formMode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <label htmlFor="username" className="text-stone-200 ">
            Username
            <input
              type="text"
              name="username"
              id="usename"
              placeholder="Your Username..."
              className={inputStyle()}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password..."
              className={inputStyle()}
            />
          </label>
          {formMode === "signup" && (
            <label htmlFor="confirmPassword">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password..."
                className={inputStyle()}
              />
            </label>
          )}
          <div className="w-full h-5  text-orange-500">error message</div>
          <button
            type="submit"
            className="mt-1 text-stone-100 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 py-2 px-4 rounded-lg"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={toggleFormMode}
            className=" text-stone-100 border-2 border-orange-500 hover:border-orange-600 active:bg-orange-600 py-2 px-4 rounded-lg"
          >
            {formMode === "signup" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
