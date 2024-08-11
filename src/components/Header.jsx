/* eslint-disable react-hooks/rules-of-hooks */
import { Link, NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { logoutUser } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

    localStorage.removeItem("authToken");
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="  bg-black">
      <header className="container mx-auto sticky">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only text-white">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden lg:flex lg:gap-x-12 text-white">
            {navMenu
              .filter((menu) => menu.auth === isAuth)
              .map((menu) => {
                return (
                  <NavLink
                    to={menu.route}
                    key={menu.label}
                    className={linkClass}
                  >
                    {menu.label}
                  </NavLink>
                );
              })}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {isAuth ? (
                <div className="flex gap-4 ml[-200px}">
                  <div className="bg-black">|</div>
                  <button
                    className="px-5 py-2 bg-blue-400 rounded-lg text-white hover:bg-blue-500 "
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </div>
              ) : null}
            </div>
          </nav>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500">
                <div className="space-y-2 py-6">
                  {navMenu
                    .filter((menu) => menu.auth === isAuth)
                    .map((menu) => {
                      return (
                        <NavLink
                          to={menu.route}
                          key={menu.label}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white  hover:bg-gray-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {menu.label}
                        </NavLink>
                      );
                    })}
                </div>

                <div className=" lg:flex lg:flex-1 lg:justify-end">
                  {isAuth ? (
                    <div className="py-6">
                      <button
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-black hover:bg-gray-50"
                        onClick={logout}
                      >
                        Log Out
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default navBar;
