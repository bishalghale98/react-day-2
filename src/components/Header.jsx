import { Link } from "react-router-dom";
import navMenu from "../constants/navMenu";

const navBar = () => {
  return (
    <div className="shadow-lg">
      <header className=" container m-auto ">
        <div className="  flex justify-around items-center h-28 ">
          <h1 className="text-5xl font-extrabold inline-block">Bishal Store</h1>

          <nav className="flex gap-8 container m-auto justify-center">
            {navMenu.map((menu) => {
              return (
                <Link to={menu.route} key={menu.label}>
                  {menu.label}
                </Link>
              );
            })}
          </nav>
          <input
            type="search"
            name="search"
            id="searchinput"
            placeholder="search what you want"
            className="border-solid border-2 border-black p-2 rounded-lg flex-grow-1"
          />
        </div>
      </header>
    </div>
  );
};

export default navBar;
