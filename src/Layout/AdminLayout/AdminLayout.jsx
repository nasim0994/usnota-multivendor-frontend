import "./Admin.css";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/AdminHeader/AdminHeader";
import AdminSidebar from "../../components/AdminComponents/AdminSidebar/AdminSidebar";
import { useEffect, useState } from "react";

export default function AdminLayout() {
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
      <aside className={`admin_sidebar sidebar ${sidebar && "sidebar_show"}`}>
        <AdminSidebar />
      </aside>

      <div className="outlet_content">
        <AdminHeader setSidebar={setSidebar} />
        <main className="sm:p-5 py-5">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
