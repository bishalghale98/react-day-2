import { NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";

const navBar = () => {
  const linkClass = ({ isActive }) => {
    return isActive
      ? "text-red-500 bg-slate-900 px-5 py-2 rounded font-bold font-semibold"
      : "px-5 py-2";
  };

  return (
    <div className="shadow-lg">
      <header className=" container m-auto ">
        <div className="  flex justify-between items-center h-28 w-35%  ">
          <div className="text-5xl font-bold">Bishal</div>

          <nav className="flex gap-8 container m-auto justify-center w-40%">
            {navMenu.map((menu) => {
              return (
                <NavLink
                  NavLink
                  to={menu.route}
                  key={menu.label}
                  className={linkClass}
                >
                  {menu.label}
                </NavLink>
              );
            })}
          </nav>
          <input
            type="search"
            name="search"
            id="searchinput"
            placeholder="search what you want"
            className="border-solid border-2 border-black p-2 rounded-lg"
          />
        </div>
      </header>
    </div>
  );
};

export default navBar;
