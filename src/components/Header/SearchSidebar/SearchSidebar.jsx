import { Link, NavLink } from "react-router-dom";
import SearchBox from "../SearchBox";

export default function SearchSidebar({ searchSidebar, setSearchSidebar }) {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setSearchSidebar(false)}
        className={`overlay ${searchSidebar && "overlay_show"}`}
      ></button>

      <div className={`menu_wrap ${searchSidebar && "menu_wrap_show"} text-sm`}>
        <div className="m-2">
          <SearchBox />
        </div>

        <ul className="px-4 flex flex-col gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shops">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/best-seller">Best Seller</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/track-order">Track Order</NavLink>
          </li>
          <li className="mt-1">
            <Link
              to="/seller"
              target="_blank"
              className=" bg-primary p-2 text-base-100"
            >
              Become a Seller
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
