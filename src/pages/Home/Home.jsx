import AllProducts from "../../components/HomeComponents/AllProducts/AllProducts";
import CampaignBanner from "../../components/HomeComponents/Campaign/CampaignBanner/CampaignBanner";
import TopCampaignBanner from "../../components/HomeComponents/Campaign/TopCampaignBanner/TopCampaignBanner";
import CategoryWaysProducts from "../../components/HomeComponents/CategoryWaysProducts/CategoryWaysProducts";
import ChooseByBrand from "../../components/HomeComponents/ChooseByBrand/ChooseByBrand";
import ChooseByCategory from "../../components/HomeComponents/ChooseByCategory/ChooseByCategory";
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
import FlashSale from "../../components/HomeComponents/FlashSale/FlashSale";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Menu from "../../components/HomeComponents/Menu/Menu";
import MobileCategories from "../../components/HomeComponents/MobileCategories/MobileCategories";
import PopularProducts from "../../components/HomeComponents/PopularProducts/PopularProducts";
import SearchCom from "../../components/HomeComponents/SearchCom/SearchCom";
import Services from "../../components/HomeComponents/Services/Services";

export default function Home() {
  window.scroll(0, 0);
  return (
    <>
      <SearchCom />
      <MobileCategories />
      <Hero />
      <ChooseByBrand />
      <FeaturedProducts />
      <TopCampaignBanner />
      <PopularProducts />
      <CampaignBanner />
      <AllProducts />

      {/* <ChooseByCategory /> */}
      {/* <Menu />
      <FlashSale />
      <CategoryWaysProducts />
      <Services /> */}
    </>
  );
}
