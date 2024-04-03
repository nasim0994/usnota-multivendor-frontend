import { useEffect, useState } from "react";
import SellerSidebar from "../components/SellerComponents/SellerSidebar/SellerSidebar";
import SellerHeader from "../components/SellerComponents/SellerHeader/SellerHeader";
import { Outlet } from "react-router-dom";

export default function SellerLayout() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".sidebar") && !e.target.closest(".sidebar_btn")) ||
        e.target.closest(".sidebar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  return (
    <section className="flex">
      <aside className={`sidebar ${sidebar && "sidebar_show"}`}>
        <SellerSidebar />
      </aside>
      <div className="outlet_content">
        <SellerHeader setSidebar={setSidebar} />
        <main className="sm:p-5 py-5">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
