import { IoMdArrowBack } from "react-icons/io";
import SearchBox from "../Header/SearchBox";

export default function SearchModal({ modal, setModal }) {
  return (
    <>
      <div
        className={`custom_modal w-full h-full ${modal && "modal_show"}`}
        style={{ padding: "0px", borderRadius: "0px" }}
      >
        <div className="bg-gray-100 w-full h-full">
          <div className="flex items-center bg-base-100">
            <button onClick={() => setModal(false)} className="px-2 text-xl">
              <IoMdArrowBack />
            </button>

            {/* <input
              type="text"
              name=""
              className="w-full px-1 py-2 outline-none text-[15px]"
              placeholder="search for products"
            /> */}

            <div className="w-full">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
