import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchModal from "../../SearchModal/SearchModal";

export default function SearchCom() {
  const [modal, setModal] = useState(false);

  return (
    <section className="sm:hidden">
      <div className="container">
        <div className="relative">
          <input
            type="text"
            name=""
            className="bg-slate-100 pr-4 pl-8 py-1.5 text-sm rounded-md w-full placeholder:font-light placeholder:text-xs outline-none text-neutral-content"
            placeholder="search for products"
            onClick={() => setModal(true)}
          />

          <div className="absolute top-2 left-2 text-gray-400">
            <FiSearch />
          </div>
        </div>
      </div>

      <SearchModal modal={modal} setModal={setModal} />
    </section>
  );
}
