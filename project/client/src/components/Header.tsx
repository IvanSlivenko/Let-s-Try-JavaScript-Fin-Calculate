import { type FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBtc, FaArrowUp, FaSignOutAlt } from "react-icons/fa";

const Header: FC = () => {
  // const isAuth = false;
  const isAuth =  true;

  const UpIcon = () => {
    return (
      <svg width="240" height="24">
        <text x="0" y="15" fill="currentColor" fontSize="14" fontWeight="bold">
          Uman Proger
        </text>
      </svg>
    );
  };

  return (
    <header className="flex  items-center  p-4 shadow-sm bg-slate-800 backdrop-blur-sm ">
      <Link to={"/"}>
        {/* <FaBtc size={20} /> */}
        {/* <FaArrowUp size={20} /> */}
        <UpIcon />
      </Link>
      {/* Menu */}
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/transactions"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Actions */}
      {isAuth ? (
        <button className="btn btn-red">
          <span>Вийти</span>
          <FaSignOutAlt/>
        </button>
      ) : (
        <Link to={'auth'} className="py-2 text-white/50 hover:text-white ml-auto"> Увійти / Зареєструватись</Link>
        
      )}
    </header>
  );
};

export default Header;
