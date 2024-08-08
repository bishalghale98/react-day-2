import { NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";

const navBar = () => {
  const { user } = useSelector((state) => state.auth);

  const isAuth = user ? true : false;

  const dispatch = useDispatch();

  const linkClass = ({ isActive }) => {
    return isActive
      ? "text-red-500 bg-slate-900 px-5 py-2 rounded font-bold font-semibold"
      : "px-5 py-2";
  };

  function logout() {
    dispatch(logoutUser());
  }

  return (
    <div className="shadow-lg mb-12">
      <header className=" container m-auto ">
        <div className="  flex justify-between items-center h-28 w-35%  ">
          <div className="text-5xl font-bold">Bishal</div>

          <nav className="flex gap-8 container m-auto justify-center w-40%">
            {navMenu
              .filter((menu) => menu.auth === isAuth)
              .map((menu) => {
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

            {isAuth ? (
              <div className="flex gap-4 ml[-200px}">
                <div className="bg-black">|</div>
                <button
                  className="px-5 py-2 bg-blue-400 rounded-lg text-white hover:bg-blue-500"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            ) : null}
          </nav>
          <input
            type="search"
            name="search"
            id="searchinput"
            placeholder="search what you want"
            className="border py-2 px-3 rounded"
          />
        </div>
      </header>
    </div>
  );
};

export default navBar;
