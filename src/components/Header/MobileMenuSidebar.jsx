import { useState } from "react";
import SearchBox from "./SearchBox";
import { NavLink } from "react-router-dom";
import CategoryLists from "../CategoryLists/CategoryLists";
import MobileCategoriesSidebar from "../MobileCategoriesSidebar/MobileCategoriesSidebar";

export default function MobileMenuSidebar({ mobileMenu, setMobileMenu }) {
  const [tab, setTab] = useState(1);
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenu(false)}
        className={`overlay ${mobileMenu && "overlay_show"}`}
      ></button>
      <div className={`menu_wrap ${mobileMenu && "menu_wrap_show"} text-sm`}>
        <div className="m-2">
          <SearchBox />
        </div>

        <div className="mt-4 grid grid-cols-2 border-b pb-1">
          <button
            onClick={() => setTab(1)}
            className={`${tab === 1 && "text-primary"}`}
          >
            Ganerel
          </button>
          <button
            onClick={() => setTab(2)}
            className={`${tab === 2 && "text-primary"}`}
          >
            Category
          </button>
        </div>

        <div className="mt-4">
          {tab === 1 && (
            <ul className="px-4 flex flex-col gap-2">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shops">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
            </ul>
          )}

          {tab === 2 && <MobileCategoriesSidebar />}
        </div>
      </div>
    </div>
  );
}
