import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SearchBox() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".searchInput") &&
        !e.target.closest(".searchIcon")
      ) {
        setSearchDropdown(false);
      }
    });
  }, []);

  return (
    <div className="relative flex">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        onClick={() => setSearchDropdown(true)}
        placeholder="search Product..."
        className="searchInput border w-full px-3 py-1.5 outline-none"
      />
      <div className="searchIcon px-3 text-lg text-base-100 bg-primary flex justify-center items-center rounded-r">
        <BsSearch />
      </div>

      {searchDropdown && (
        <div className="searchDropdown absolute w-full bg-base-100 p-4 shadow-lg max-h-96 overflow-y-auto top-full">
          <ul>
            <li
              onClick={() => setSearchDropdown(false)}
              className="hover:bg-gray-100 p-1"
            >
              <Link to={`/products/slug`} className="flex gap-2 items-center">
                <img src="" alt="" className="w-12" />
                <h6>title</h6>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
