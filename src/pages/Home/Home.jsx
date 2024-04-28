import AllProducts from "../../components/HomeComponents/AllProducts/AllProducts";
import CampaignBanner from "../../components/HomeComponents/Campaign/CampaignBanner/CampaignBanner";
import TopCampaignBanner from "../../components/HomeComponents/Campaign/TopCampaignBanner/TopCampaignBanner";
import ChooseByBrand from "../../components/HomeComponents/ChooseByBrand/ChooseByBrand";
import FeaturedProducts from "../../components/HomeComponents/FeaturedProducts/FeaturedProducts";
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
      <Menu />
      <Hero />
      <FeaturedProducts />
      <TopCampaignBanner />
      <MobileCategories />
      <PopularProducts />
      <ChooseByBrand />
      <CampaignBanner />
      <AllProducts />
      <Services />
    </>
  );
}
