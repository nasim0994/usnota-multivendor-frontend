import MobileCategoriesSidebar from "../MobileCategoriesSidebar/MobileCategoriesSidebar";

export default function MobileMenuSidebar({ mobileMenu, setMobileMenu }) {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenu(false)}
        className={`overlay ${mobileMenu && "overlay_show"}`}
      ></button>
      <div className={`menu_wrap ${mobileMenu && "menu_wrap_show"} text-sm`}>
        <p className="p-3 bg-primary text-base-100 text-[15px]">Categories</p>
        <MobileCategoriesSidebar />
      </div>
    </div>
  );
}
