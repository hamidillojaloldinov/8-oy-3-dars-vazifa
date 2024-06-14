import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const { amount } = useSelector((state: any) => state.counter);
  const [nav, setnav] = useState(true);
  return (
    <>
      <div>
        <nav className="border-b-2 border-slate-600 pt-8 pb-9 flex items-center justify-between h-7 sm:w-[1110px] w-[500px] mx-auto">
          <div className="sm:hidden flex flex-col">
            <button
              onClick={() => setnav(!nav)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="modal-wrapper sm:hidden flex">
              <div className={`${nav ? "hidden" : "flex"} overlay3`}>
                <ul className="font-medium modal flex-col p-4 sm:p-0 absolute left-10 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
                  <li className="text-black py-2">
                    <Link to="/" className="text-black on-underline hover:text-[#d87D4A]">
                      HOME
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img src='logo' alt="Logo" />
          </Link>

          <div className="links sm:flex hidden gap-8">
            <Link to="/" className="hover:text-[#d87D4A] link">
              HOME
            </Link>
            <Link to="/cart" className="hover:text-[#d87D4A] link">
              CART
            </Link>
          </div>

          <Link
            to='/cart'
            type="button"
            className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg navbar-center"
          >
            <BsCart3
              className="text-[#d87D4A] w-5 h-5 me-2"
            />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black rounded-full -top-3 -end-2">
              {amount}
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
