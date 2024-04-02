import { useEffect, useState } from "react";
import SellerSidebar from "../components/SellerComponents/SellerSidebar/SellerSidebar";
import SellerHeader from "../components/SellerComponents/SellerHeader/SellerHeader";
import { Outlet } from "react-router-dom";

export default function SellerLayout() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".admin_sidebar") &&
          !e.target.closest(".admin_sidebar_btn")) ||
        e.target.closest(".admin_siderbar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  return (
    <section className="flex">
      <aside className={`admin_sidebar ${sidebar && "admin_sidebar_show"}`}>
        <SellerSidebar />
      </aside>
      <div className="admin_content">
        <SellerHeader setSidebar={setSidebar} />
        <main className="sm:p-5 py-5">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
