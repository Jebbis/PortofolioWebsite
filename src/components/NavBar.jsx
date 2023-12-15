import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DarkModeContext } from "../providers/themeProvider";
import { useScrollTop } from "../hooks/use-scroll-top";
import cn from "classnames";

function NavBar() {
  const { darkMode } = useContext(DarkModeContext);
  const scrolled = useScrollTop();
  const location = useLocation();
  return (
    <div
      className={cn("z-50 fixed top-0 flex items-center w-full p-9", {
        "bg-black/70": darkMode && location.pathname === "/",
        "bg-[#F5F7F9]": !darkMode && location.pathname !== "/",
        "border-b shadow-sm": scrolled,
      })}
    >
      <header className="header">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
        >
          <p className="blue-gradient_text">LH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : `${
                    !darkMode || location.pathname !== "/"
                      ? "text-black"
                      : "text-white"
                  }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : `${
                    !darkMode || location.pathname !== "/"
                      ? "text-black"
                      : "text-white"
                  }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : `${
                    !darkMode || location.pathname !== "/"
                      ? "text-black"
                      : "text-white"
                  }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
