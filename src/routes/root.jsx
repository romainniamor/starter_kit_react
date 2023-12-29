import { NavLink, Outlet, Link } from "react-router-dom";
//template for root
function Root() {
  //define style for navlink and active navlink
  const getNavLinkClass = (isActive) =>
    `py-3 px-4 rounded-md dark:text-stone-100 text-stone-900 ${
      isActive
        ? "bg-stone-300 dark:bg-stone-800"
        : "hover:bg-stone-300 dark:hover:bg-stone-800"
    }`;
  return (
    <div className="w-full flex gap-5 ">
      <nav className="flex flex-col gap-2 h-full w-48">
        <NavLink className={({ isActive }) => getNavLinkClass(isActive)} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => getNavLinkClass(isActive)}
          to="/create"
        >
          Create
        </NavLink>
        <NavLink
          className={({ isActive }) => getNavLinkClass(isActive)}
          to="/popular"
        >
          Popular
        </NavLink>
      </nav>
      <div className="grow flex h-full dark:text-stone-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Root;
